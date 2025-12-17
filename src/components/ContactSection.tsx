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

  // Replace with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name and phone number are required.",
        variant: "destructive"
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit Indian mobile number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // If Google Script URL is set, submit to Google Sheets
      if (GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            timestamp: new Date().toISOString()
          })
        });
      }

      toast({
        title: "Message sent successfully!",
        description: "We will contact you soon."
      });

      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-foreground mb-1">Phone</h4>
                  <a 
                    href="tel:+919876543210" 
                    className="text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
                <label 
                  htmlFor="name" 
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  maxLength={15}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block font-body text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
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
