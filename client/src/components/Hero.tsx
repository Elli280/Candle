import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBackground from "@assets/stock_images/luxury_candles_elega_f20d779a.jpg";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            data-testid="text-hero-title"
          >
            Beyond Luxe Candle
          </h1>
          
          <p
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white/95 italic font-light"
            data-testid="text-hero-slogan"
          >
            Illuminate Your Moments with Timeless Elegance
          </p>

          <p
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
            data-testid="text-hero-description"
          >
            Luxury candle rentals for weddings, galas, and celebrations that deserve 
            nothing less than perfection. Customizable, eco-friendly, and effortlessly beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              asChild
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground hover-elevate active-elevate-2 px-8 py-6 text-lg font-medium border border-primary-border"
              data-testid="button-hero-inquire"
            >
              <Link href="/inquire">Start Your Inquiry</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/20 backdrop-blur-md text-white border-white/40 hover-elevate active-elevate-2 px-8 py-6 text-lg font-medium"
              data-testid="button-hero-gallery"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover-elevate active-elevate-2 p-2 rounded-full transition-all animate-bounce"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
