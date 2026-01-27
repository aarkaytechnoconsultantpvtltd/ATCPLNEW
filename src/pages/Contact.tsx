// src/pages/Contact.tsx (or wherever your file is)

import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // // REPLACE THESE 3 VALUES AFTER SIGNING UP AT https://www.emailjs.com
  // const EMAILJS_SERVICE_ID = "service_qbg2yto";        // e.g., service_abc123
  // const EMAILJS_TEMPLATE_ID = "template_x6w7l4l";     // e.g., template_xyz789
  // const EMAILJS_PUBLIC_KEY = "oNk9FRa0pelu043ph"; // e.g., AbC123dEfG...

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct WhatsApp message with form details
      const phone = "919764440734"; // WhatsApp number

      const text =
        `Hello Aarkay Team!%0A%0A` +
        `*Name:* ${encodeURIComponent(formData.name)}%0A` +
        `*Email:* ${encodeURIComponent(formData.email)}%0A` +
        `*Company:* ${encodeURIComponent(
          formData.company || "Not provided"
        )}%0A` +
        `*Phone:* ${encodeURIComponent(formData.phone || "Not provided")}%0A` +
        `*Subject:* ${encodeURIComponent(formData.subject)}%0A%0A` +
        `*Message:*%0A${encodeURIComponent(formData.message)}`;

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

      toast.success("Opening WhatsApp with your message!");

      // Reset form after opening WhatsApp
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to open WhatsApp. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const phone = "919764440734";

    const text =
      `Hello Aarkay Team!%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || "-")}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || "-")}%0A` +
      `*Company:* ${encodeURIComponent(formData.company || "-")}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || "-")}%0A` +
      `*Subject:* ${encodeURIComponent(
        formData.subject || "General Inquiry"
      )}%0A%0A` +
      `*Message:*%0A${encodeURIComponent(formData.message || "No message")}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@atcgroup.co.in",
      href: "mailto:info@atcgroup.co.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9764440734 ",
      href: "tel:+919764440734",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Nagpur, Maharashtra, India",
      href: "#",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 10:30AM - 5:30PM IST",
      href: "#",
    },
  ];

  const faqs = [
    {
      question: "What is Aarkay Techno Consultants and when was it founded?",
      answer:
        "We're your technology partners since 1992! Starting from a small office in Nagpur with just third-party maintenance and AMC services, we've grown into a powerhouse of industrial automation, AI/ML, IoT, and custom software development. Over 30+ years, we've helped businesses across textiles, explosives, automotive, FMCG, pharmaceuticals, and more transform their operations. Think of us as the team that's been solving real-world tech challenges since before the internet was cool!",
    },
    {
      question: "What industries do you serve?",
      answer:
        "Almost every industry you can think of! From Textiles to Explosives & Defence, Automotive to FMCG & Packaging, Pharmaceuticals to Mining, Gas & Energy to Retail, Agriculture to Steel & Towers—we've done it all. Each industry has unique challenges, and we love creating tailored solutions. Whether it's tracking explosive cartridges or inspecting fabric quality, we bring the same passion and expertise to every project",
    },
    {
      question: "What are your core services and solutions?",
      answer:
        "We're a one-stop technology shop! Here's what we do best: (1) IT Infrastructure & Software Solutions - from network design to cloud deployment, we build the backbone of your digital world (2) Tracking & Tracing - barcode and RFID systems that know where everything is, always (3) Vision Systems with AI/ML - smart cameras that can inspect, detect, and read better than humans (4) SPM, System Integration & Industry 4.0 - custom machines and automation that make factories smarter (5) Mobile Computing & Custom Software - apps and solutions built exactly how you need them (6) Project Consultation - we guide you from idea to implementation, every step of the way",
    },
    {
      question: "What are some of your key innovations and products?",
      answer:
        "We're pretty proud of these! (1) Aarkay Fabric Inspection Data Logger (FIDL) - deployed in 40+ textile plants, it tracks every meter of fabric with live defect mapping (2) Overhead Crane Management System - wireless control that makes heavy lifting smart and safe (3) Explo Print SD System - blazing fast barcode printing for explosive cartridges (300-400/min!) with full PESO compliance (4) Smart Inventory Systems - helping giants like Hindalco Group manage assets effortlessly (5) AI-Powered Analytics - from ANPR to fire detection, our AI sees everything and alerts you instantly",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "It depends on what you're building! A quick MVP or pilot? We can deliver in 4–8 weeks. Enterprise-scale implementation? Usually 3–6 months. For specialized solutions like our Fabric Inspection Data Logger or Crane Management System, we take the time to get it perfect—proper integration, thorough testing, and comprehensive training. We'll give you a detailed timeline during our first consultation, and we stick to it!",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Absolutely! Support isn't just something we offer—it's in our DNA. Since 1992, starting with our very first AMC client Baidyanath Ayurved Bhavan, we've been there for our customers 24/7. We provide monitoring, regular updates, preventive maintenance, and dedicated technical support. Think of us as your IT department that never sleeps. We offer flexible support packages because we know every business has different needs.",
    },       
    {
      question: "What technologies do you work with?",
      answer:
        "Everything! Seriously, we're tech enthusiasts who love learning and adapting. Our toolkit includes: Barcode & RFID systems, AI/ML for vision and analytics, IoT platforms and sensors, Industrial automation, Cloud computing (AWS), Mobile development (Android, iOS), Modern web tech (React, Node.js,dotnet), Database systems (SQL, NoSQL,PostgreSQL), Computer vision and OCR, Wireless connectivity (Bluetooth, Wi-Fi), and Industry 4.0 solutions. If there's a new technology that can solve your problem better, we'll learn it and use it!",
    },
    {
      question: "Do you provide training and documentation?",
      answer:
        "Of course! What good is a great system if your team can't use it confidently? We provide hands-on operator training, system administrator training, and management overview sessions. Plus, you get comprehensive documentation—system architecture, user manuals, troubleshooting guides, and API docs. We don't just hand over a system and walk away; we make sure your team becomes experts too!",
    },
    {
      question:
        "What makes Aarkay Techno different from other IT solution providers?",
      answer:
        "Great question! Here's what sets us apart: (1) 30+ years of proven experience - we've seen it all and solved it all (2) Deep industry expertise - we speak your language, whether it's textiles or explosives (3) End-to-end solutions - from hardware to software, we handle everything (4) Custom solutions - no cookie-cutter approaches here (5) Local presence, national reach - based in Nagpur, serving all of India (6) Long-term partnerships - we're in this together for the long haul (7) Innovation-driven - we bring tomorrow's technology to your business today!",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Super simple! Here's the journey: (1) Reach out - contact us via this form, WhatsApp, phone, or email (we respond within 24 hours!) (2) Free consultation - let's chat about your needs and challenges (3) Detailed proposal - we'll send you a clear plan with timeline and pricing (4) Kick-off - once you approve, we dive into requirement analysis (5) Build & deliver - development, testing, and deployment with regular updates so you're always in the loop (6) Training & support - we ensure your team is ready, then stick around for ongoing support Ready to transform your business? Let's talk!",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70">
              Ready to transform your business? Contact us today for a free
              consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                  />
                </div>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                >
                  <option value="">Select Subject *</option>
                  <option>Book a Demo</option>
                  <option>Free Consultation</option>
                  <option>Partnership</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition resize-none"
                />
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <Button
                onClick={openWhatsApp}
                variant="accent"
                size="lg"
                className="w-full mb-8"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp (Auto-filled)
              </Button>

              <div className="rounded-2xl overflow-hidden h-64 border border-border">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.255361734229!2d79.06980037530537!3d21.11757588053993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf7987e4368b%3A0x1f6d1358231ab343!2sAarkay%20Techno%20Consultants%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1733329999000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-accent" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <div className="text-muted-foreground space-y-3">
                      {(() => {
                        // Check if answer contains numbered items like (1), (2), (3)
                        const hasNumberedItems = /\(\d+\)/.test(faq.answer);

                        if (hasNumberedItems) {
                          // Split by numbered items
                          const parts = faq.answer.split(/(?=\(\d+\))/);
                          const intro = parts[0].trim();
                          const items = parts
                            .slice(1)
                            .map((part) => {
                              // Remove the number and trim
                              return part.replace(/^\(\d+\)\s*/, "").trim();
                            })
                            .filter(Boolean);

                          if (items.length > 0) {
                            return (
                              <>
                                {intro && <p className="mb-3">{intro}</p>}
                                <ul className="space-y-2">
                                  {items.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            );
                          }
                        }

                        // Regular paragraph for answers without numbering
                        return <p>{faq.answer}</p>;
                      })()}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
          >
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-muted-foreground">
                We respond to all inquiries within 24 hours during business
                days. Your project is our priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
