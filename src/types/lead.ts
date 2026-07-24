export interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  description: string;
  status: "pending" | "emailed" | "failed";
  createdAt: string;
}