import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  const phoneNumber = "+919876543210"; // Replace with actual phone number
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-primary font-body font-medium tracking-wider uppercase mb-4 animate-fade-in">
            Krishna Interiors
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-background leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Premium Interior & Woodwork Solutions in Hosur
          </h1>
          <p className="text-xl md:text-2xl text-background/80 font-body font-light mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            WPVC | Wood | Plywood | POP Ceiling Works
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={handleCall}
              className="group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={scrollToContact}
              className="text-background border-background hover:bg-background hover:text-foreground"
            >
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
