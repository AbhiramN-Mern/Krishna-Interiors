import { MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading mb-4">Krishna Interiors</h3>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Premium interior design and woodwork solutions for your dream home. 
              Transforming spaces in Hosur and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/70 font-body text-sm">
              <li>WPVC Works</li>
              <li>Wood & Plywood Works</li>
              <li>POP Ceiling Works</li>
              <li>Modular Kitchen</li>
              <li>Wardrobes & TV Units</li>
              <li>Complete Home Renovation</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-heading mb-4">Visit Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-background/70 font-body text-sm leading-relaxed">
                D.NO 3/493/4, Navadhi,<br />
                Lakshmi Narayana Nagar,<br />
                Near Kaveri Nagar ITI,<br />
                Onnalvadi Village and Panchayat,<br />
                Hosur – 635126
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 font-body text-sm">
            © {currentYear} Krishna Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
