export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  description: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}