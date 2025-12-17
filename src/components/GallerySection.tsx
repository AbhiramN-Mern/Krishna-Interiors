import { useState } from "react";
import galleryKitchen from "@/assets/1.jpeg";
import galleryWardrobe from "@/assets/2.jpeg"
import galleryTvunit from "@/assets/3.jpeg";
import galleryCeiling from "@/assets/4.jpeg";
import galleryBedroom from "@/assets/5.jpeg";
import galleryWpvc from "@/assets/6.jpeg";
import galleryLiving from "@/assets/7.jpeg";
import heroInterior from "@/assets/8.jpeg";

const galleryImages = [
  { src: galleryKitchen,  },
  { src: galleryWardrobe },
  { src: galleryTvunit },
  { src: galleryCeiling },
  { src: galleryBedroom },
  { src: galleryWpvc },
  { src: galleryLiving },
  { src: heroInterior},
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-body font-medium tracking-wider uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-background font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery image enlarged"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-background text-4xl font-light hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
