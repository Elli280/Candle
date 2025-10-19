import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { candleColors } from "@shared/schema";

export default function ColorPreview() {
  const featuredColors = candleColors.slice(0, 6);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background" data-testid="section-color-preview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-color-preview-title"
          >
            Our Color Palette
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of 17 exquisite colors, each designed to complement your event's unique aesthetic
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-12">
          {featuredColors.map((color, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 hover-elevate active-elevate-2 p-4 rounded-lg transition-all"
              data-testid={`color-preview-${index}`}
            >
              <div
                className="w-24 h-24 rounded-full border-2 border-border shadow-md"
                style={{ backgroundColor: color.hex }}
                data-testid={`color-swatch-${index}`}
              />
              <div className="text-center">
                <p className="font-serif italic text-foreground font-medium" data-testid={`text-color-french-${index}`}>
                  {color.french}
                </p>
                <p className="text-sm text-muted-foreground" data-testid={`text-color-english-${index}`}>
                  {color.english}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="px-10 py-6 text-lg hover-elevate active-elevate-2"
            data-testid="button-explore-colors"
          >
            <Link href="/gallery">Explore All 17 Colors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
