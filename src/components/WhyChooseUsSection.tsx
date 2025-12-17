import { Check } from "lucide-react";

const reasons = [
  {
    title: "Experienced Professionals",
    description: "Our team brings years of expertise in interior design and woodwork"
  },
  {
    title: "Premium Materials",
    description: "We use only the highest quality materials for lasting durability"
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising on quality"
  },
  {
    title: "On-Time Delivery",
    description: "We respect your time and always deliver projects on schedule"
  },
  {
    title: "Local Support",
    description: "Being based in Hosur, we provide quick and reliable local service"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-body font-medium tracking-wider uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
              Your Trusted Interior Partner
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              When it comes to transforming your home, you deserve the best. Here's why 
              homeowners in Hosur trust Krishna Interiors for their interior needs.
            </p>
          </div>
          
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-heading text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
