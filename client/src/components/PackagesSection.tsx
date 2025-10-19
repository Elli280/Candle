import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { floorPackages, semiPackages } from "@shared/schema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PackagesSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-packages">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-packages-title"
          >
            Our Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our Custom Floor or Semi packages to create the perfect ambiance for your event
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <div className="text-center mb-8">
              <h3
                className="font-serif text-3xl font-semibold text-foreground mb-2"
                data-testid="text-floor-packages-title"
              >
                Custom Floor Packages
              </h3>
              <p className="text-muted-foreground">
                5-6" wide, 14-36" tall
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {floorPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-6 hover-elevate active-elevate-2 transition-all duration-300 relative ${
                    pkg.popular ? "border-primary border-2" : "border-card-border"
                  }`}
                  data-testid={`card-floor-package-${index}`}
                >
                  {pkg.popular && (
                    <Badge
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
                      data-testid={`badge-popular-${index}`}
                    >
                      Most Popular
                    </Badge>
                  )}
                  <div className="text-center space-y-3">
                    <h4
                      className="font-serif text-2xl font-semibold text-card-foreground"
                      data-testid={`text-floor-quantity-${index}`}
                    >
                      {pkg.quantity} {pkg.quantity === "Under 50" || pkg.quantity === "Under 20" ? "" : "Candles"}
                    </h4>
                    <div className="py-4">
                      <span className="text-4xl font-bold text-primary" data-testid={`text-floor-price-${index}`}>
                        ${pkg.price}
                      </span>
                      <span className="text-muted-foreground text-sm block mt-1">
                        {pkg.unit}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h3
                className="font-serif text-3xl font-semibold text-foreground mb-2"
                data-testid="text-semi-packages-title"
              >
                Custom Semi Packages
              </h3>
              <p className="text-muted-foreground">
                3.5" wide, 6-12" tall
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {semiPackages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`p-6 hover-elevate active-elevate-2 transition-all duration-300 relative ${
                    pkg.popular ? "border-primary border-2" : "border-card-border"
                  }`}
                  data-testid={`card-semi-package-${index}`}
                >
                  {pkg.popular && (
                    <Badge
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
                      data-testid={`badge-semi-popular-${index}`}
                    >
                      Most Popular
                    </Badge>
                  )}
                  <div className="text-center space-y-3">
                    <h4
                      className="font-serif text-2xl font-semibold text-card-foreground"
                      data-testid={`text-semi-quantity-${index}`}
                    >
                      {pkg.quantity} {pkg.quantity === "Under 50" || pkg.quantity === "Under 20" ? "" : "Candles"}
                    </h4>
                    <div className="py-4">
                      <span className="text-4xl font-bold text-primary" data-testid={`text-semi-price-${index}`}>
                        ${pkg.price}
                      </span>
                      <span className="text-muted-foreground text-sm block mt-1">
                        {pkg.unit}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover-elevate active-elevate-2 px-10 py-6 text-lg"
            data-testid="button-inquire-now"
          >
            <Link href="/inquire">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
