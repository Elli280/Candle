import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5" data-testid="section-cta">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6"
          data-testid="text-cta-title"
        >
          Ready to Illuminate Your Event?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto" data-testid="text-cta-description">
          Let us help you create an unforgettable atmosphere with our luxury candle rentals. 
          Contact us today to discuss your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover-elevate active-elevate-2 px-10 py-6 text-lg"
            data-testid="button-cta-inquire"
          >
            <Link href="/inquire">Submit an Inquiry</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="px-10 py-6 text-lg hover-elevate active-elevate-2"
            data-testid="button-cta-gallery"
          >
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
          <a
            href="mailto:info@beyondluxecandle.com"
            className="flex items-center gap-2 hover-elevate active-elevate-2 p-2 rounded-md transition-all"
            data-testid="link-email"
          >
            <Mail className="h-5 w-5" />
            <span>info@beyondluxecandle.com</span>
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-2 hover-elevate active-elevate-2 p-2 rounded-md transition-all"
            data-testid="link-phone"
          >
            <Phone className="h-5 w-5" />
            <span>(555) 123-4567</span>
          </a>
        </div>
      </div>
    </section>
  );
}
