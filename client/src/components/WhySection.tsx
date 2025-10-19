import { Leaf, Palette, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly Elegance",
    description:
      "100% plant-based, petroleum-free candles that are reusable and sustainable. A clean, healthy alternative that's kind to the environment and your guests.",
  },
  {
    icon: Palette,
    title: "Customizable Artistry",
    description:
      "Choose from 17 exquisite colors to perfectly match your event's aesthetic. From classic whites to bold statements, we have the perfect palette for your vision.",
  },
  {
    icon: Sparkles,
    title: "Effortless Luxury",
    description:
      "Mess-free candles with no drips or soot, featuring an 8-12 hour burn time. Enjoy timeless elegance without the hassle of traditional candles.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background" data-testid="section-why">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-why-title"
          >
            Why Beyond Luxe Candle?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate active-elevate-2 transition-all duration-300 bg-card border border-card-border"
                data-testid={`card-benefit-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" data-testid={`icon-benefit-${index}`} />
                  </div>
                  <h3
                    className="font-serif text-2xl font-semibold text-card-foreground"
                    data-testid={`text-benefit-title-${index}`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-testid={`text-benefit-description-${index}`}
                  >
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
