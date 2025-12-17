import { useState } from "react";
import { Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  // 🔴 BUSINESS WHATSAPP NUMBER (with country code, no +)
  const BUSINESS_PHONE = "919656668222";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanedPhone = formData.phone.replace(/\D/g, "");

    if (!formData.name.trim() || !cleanedPhone) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive"
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit Indian mobile number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const message = `
New Enquiry 🔔

Name: ${formData.name}
Phone: ${cleanedPhone}
Message: ${formData.message || "No message"}
    `.trim();

    const whatsappUrl = `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-body font-medium tracking-wider uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-heading text-foreground mb-6">
              Let's Discuss Your Project
            </h3>
            <p className="text-muted-foreground font-body mb-8">
              Ready to transform your space? Reach out to us for a free consultation.
              We'd love to hear about your interior design needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    +919656668222
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    D.NO 3/493/4, Navadhi, Lakshmi Narayana Nagar,<br />
                    Near Kaveri Nagar ITI, Onnalvadi Village and Panchayat,<br />
                    Hosur – 635126
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Redirecting..." : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
