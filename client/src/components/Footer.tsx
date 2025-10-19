import { Link } from "wouter";
import logoImage from "@assets/logo_1760857336352.jpg";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="Beyond Luxe Candle"
                className="h-12 w-12 object-contain"
                data-testid="img-footer-logo"
              />
              <span className="font-serif text-xl font-semibold">Beyond Luxe Candle</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed" data-testid="text-footer-description">
              Luxury candle rentals for unforgettable events. Since 2023, we've been illuminating special moments with timeless elegance.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4" data-testid="text-footer-quick-links">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-background/80 hover-elevate active-elevate-2 p-1 rounded inline-block transition-all" data-testid="link-footer-home">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-background/80 hover-elevate active-elevate-2 p-1 rounded inline-block transition-all" data-testid="link-footer-gallery">
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/inquire">
                  <a className="text-background/80 hover-elevate active-elevate-2 p-1 rounded inline-block transition-all" data-testid="link-footer-inquire">
                    Inquire Now
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4" data-testid="text-footer-connect">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/beyondluxecandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/beyondluxecandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@beyondluxecandle.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover-elevate active-elevate-2 transition-all"
                data-testid="link-footer-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/80 text-sm" data-testid="text-footer-location">
              Serving the DMV Area
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Beyond Luxe Candle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
