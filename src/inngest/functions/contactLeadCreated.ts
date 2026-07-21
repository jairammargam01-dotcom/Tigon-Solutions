import { inngest } from "@/inngest/client";

import { connectDB } from "@/lib/mongodb";
import {
  verifyMailConnection,
  sendAdminEmail,
  sendAutoReply,
} from "@/lib/mail";

import { Lead } from "@/models/Lead";

export const contactLeadCreated = inngest.createFunction(
  {
    id: "contact-lead-created",

    triggers: [
      {
        event: "contact/lead.created",
      },
    ],
  },

  async ({ event }) => {
    console.log("========== INNGEST FUNCTION START ==========");

    await connectDB();

    const { leadId } = event.data as {
      leadId: string;
    };

    console.log("Lead ID:", leadId);

    const lead = await Lead.findById(leadId);

    if (!lead) {
      throw new Error("Lead not found.");
    }

    console.log("Lead Found:", lead);

    await verifyMailConnection();

    try {
      await Promise.all([
        sendAdminEmail(lead),
        sendAutoReply(lead),
      ]);

      lead.status = "emailed";
      lead.emailedAt = new Date();

      console.log("Emails sent successfully.");
    } catch (err) {
      console.error("EMAIL ERROR");
      console.error(err);

      lead.status = "failed";
    }

    await lead.save();

    console.log("Lead updated.");

    return {
      success: true,
    };
  }
);