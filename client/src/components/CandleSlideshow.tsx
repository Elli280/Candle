import { useState, useEffect } from "react";
import slide1 from "@assets/stock_images/luxury_candles_elega_5c01d6b3.jpg";
import slide2 from "@assets/stock_images/luxury_candles_elega_c4f4f62c.jpg";
import slide3 from "@assets/stock_images/white_cream_candles__a32829ed.jpg";
import slide4 from "@assets/stock_images/pink_blush_candles_w_1e591f67.jpg";
import slide5 from "@assets/stock_images/black_candles_modern_a7ed517a.jpg";
import slide6 from "@assets/stock_images/lavender_purple_cand_03917484.jpg";

const slides = [
  { src: slide1, alt: "Luxury candle arrangement at elegant event" },
  { src: slide2, alt: "Romantic candle setup for wedding" },
  { src: slide3, alt: "White candles on dinner table centerpiece" },
  { src: slide4, alt: "Pink candles for romantic wedding setting" },
  { src: slide5, alt: "Black candles at modern sophisticated event" },
  { src: slide6, alt: "Lavender candles in spa setting" },
];

export default function CandleSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-muted" data-testid="section-slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            data-testid={`img-slide-${index}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      ))}

      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" 
        role="tablist"
        aria-label="Slideshow navigation"
        data-testid="slideshow-indicators"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            role="tab"
            aria-label={`Go to slide ${index + 1}: ${slide.alt}`}
            aria-selected={index === currentIndex}
            aria-controls={`slide-${index}`}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-white/50 hover-elevate"
            }`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
