import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo_1760857336352.jpg";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/inquire", label: "Inquire Now" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center gap-3 hover-elevate rounded-md px-2 py-1 transition-all"
            data-testid="link-home"
          >
            <img
              src={logoImage}
              alt="Beyond Luxe Candle"
              className="h-14 w-14 object-contain"
              data-testid="img-logo"
            />
            <span className="font-serif text-xl font-semibold text-foreground hidden sm:block">
              Beyond Luxe Candle
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-base font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="default"
              asChild
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2"
              data-testid="button-book-event"
            >
              <Link href="/inquire">Book Your Event</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border py-4 px-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors hover-elevate mb-2 ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="default"
              asChild
              className="w-full mt-2 bg-primary text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="button-mobile-book-event"
            >
              <Link href="/inquire">Book Your Event</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
