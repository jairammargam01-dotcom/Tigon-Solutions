import { inngest } from "@/inngest/client";

import { connectDB } from "@/lib/mongodb";
import { sendAdminEmail, sendAutoReply } from "@/lib/mail";

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
    await connectDB();

    const { leadId } = event.data as {
      leadId: string;
    };

    const lead = await Lead.findById(leadId);

    if (!lead) {
      throw new Error("Lead not found.");
    }

    try {
      await Promise.all([
        sendAdminEmail(lead),
        sendAutoReply(lead),
      ]);

      lead.status = "emailed";
      lead.emailedAt = new Date();
    } catch (err) {
      console.error(err);

      lead.status = "failed";
    }

    await lead.save();

    return {
      success: true,
    };
  }
);