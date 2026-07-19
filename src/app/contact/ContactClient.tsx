"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xlgqdepd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          setError(data.errors.map((err: { message: string }) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form");
        }
      }
    } catch {
      setError("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    

      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              Let’s Build Something <span className="text-gradient">Extraordinary</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70"
            >
              Fill out the form below and our team will get back to you within 24 hours to discuss your project requirements.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {isSuccess ? (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-success mb-6" />
                </motion.div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Request Received!</h3>
                <p className="text-white/70 max-w-md">
                  Thank you for reaching out to Tygon Solutions. One of our specialists will review your project details and contact you shortly.
                </p>
                <Button 
                  className="mt-8" 
                  variant="outline" 
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white/80">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/80">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-white/80">Primary Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-dark">Select a service</option>
                      <option value="AI & Automation" className="text-dark">AI & Automation</option>
                      <option value="Software Development" className="text-dark">Software Development</option>
                      <option value="Web/Mobile Apps" className="text-dark">Web / Mobile Apps</option>
                      <option value="UI/UX Design" className="text-dark">UI / UX Design</option>
                      <option value="Digital Marketing" className="text-dark">Digital Marketing</option>
                      <option value="Cloud & DevOps" className="text-dark">Cloud & DevOps</option>
                      <option value="Staffing" className="text-dark">Recruitment & Staffing</option>
                      <option value="Other" className="text-dark">Other (Specify in description)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-white/80">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-dark">Select a range</option>
                      <option value="< $10k" className="text-dark">Under $10,000</option>
                      <option value="$10k - $50k" className="text-dark">$10,000 - $50,000</option>
                      <option value="$50k - $100k" className="text-dark">$50,000 - $100,000</option>
                      <option value="$100k+" className="text-dark">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-white/80">Project Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    className="w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your goals, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="pt-4 flex justify-end">
                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="gradient"
                    className="w-full md:w-auto min-w-[200px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Submit Proposal <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
