import { 
  Layers, 
  Trees, 
  LayoutGrid, 
  Home,
  DoorOpen,
  Tv,
  CloudSun,
  Hammer
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "WPVC Works",
    description: "Durable and waterproof wall panels for modern interiors"
  },
  {
    icon: Trees,
    title: "Wood Works",
    description: "Custom wooden furniture and fixtures crafted to perfection"
  },
  {
    icon: LayoutGrid,
    title: "Plywood Works",
    description: "High-quality plywood solutions for all your furniture needs"
  },
  {
    icon: CloudSun,
    title: "POP Ceiling Works",
    description: "Elegant false ceiling designs with premium finishes"
  },
  {
    icon: Home,
    title: "Modular Kitchen",
    description: "Space-efficient kitchens with modern modular designs"
  },
  {
    icon: DoorOpen,
    title: "Wardrobes",
    description: "Custom wardrobes designed to maximize your storage"
  },
  {
    icon: Tv,
    title: "TV Units",
    description: "Contemporary TV units that complement your living space"
  },
  {
    icon: Hammer,
    title: "Complete Renovation",
    description: "End-to-end home interior and renovation services"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-body font-medium tracking-wider uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-background p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
