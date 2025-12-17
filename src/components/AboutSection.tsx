const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-body font-medium tracking-wider uppercase mb-4">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            Crafting Beautiful Interiors Since Years
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
            At <span className="text-foreground font-medium">Krishna Interiors</span>, we transform your living spaces into beautiful, 
            functional environments. Led by <span className="text-foreground font-medium">Krishna</span>, our team of skilled craftsmen 
            brings decades of experience in woodwork, interior design, and home renovation.
          </p>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            We pride ourselves on using only premium quality materials, delivering exceptional 
            craftsmanship, and providing personalized service to each of our clients in Hosur 
            and surrounding areas. Your dream home is our passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
