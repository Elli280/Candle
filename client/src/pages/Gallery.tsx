import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { candleColors } from "@shared/schema";
import whiteImage1 from "@assets/stock_images/white_cream_candles__a32829ed.jpg";
import whiteImage2 from "@assets/stock_images/white_cream_candles__09af3441.jpg";
import whiteImage3 from "@assets/stock_images/white_cream_candles__57c71f1f.jpg";
import pinkImage1 from "@assets/stock_images/pink_blush_candles_w_1e591f67.jpg";
import pinkImage2 from "@assets/stock_images/pink_blush_candles_w_8651fa5b.jpg";
import pinkImage3 from "@assets/stock_images/pink_blush_candles_w_02de769e.jpg";
import blackImage1 from "@assets/stock_images/black_candles_modern_a7ed517a.jpg";
import blackImage2 from "@assets/stock_images/black_candles_modern_e19629a4.jpg";
import blackImage3 from "@assets/stock_images/black_candles_modern_4de2c9d3.jpg";
import lavenderImage1 from "@assets/stock_images/lavender_purple_cand_03917484.jpg";
import lavenderImage2 from "@assets/stock_images/lavender_purple_cand_61c8f87a.jpg";
import lavenderImage3 from "@assets/stock_images/lavender_purple_cand_8b391db9.jpg";
import redImage1 from "@assets/stock_images/red_candles_romantic_46d6451c.jpg";
import redImage2 from "@assets/stock_images/red_candles_romantic_91057dd0.jpg";
import redImage3 from "@assets/stock_images/red_candles_romantic_28227d8b.jpg";
import luxImage1 from "@assets/stock_images/luxury_candles_elega_3ba089df.jpg";
import luxImage2 from "@assets/stock_images/luxury_candles_elega_ada1aadb.jpg";
import luxImage3 from "@assets/stock_images/luxury_candles_elega_c248f45a.jpg";

const colorGalleries = candleColors.map((color) => {
  let images = [luxImage1, luxImage2, luxImage3];
  
  if (color.english === "White" || color.english === "Nude Sand") {
    images = [whiteImage1, whiteImage2, whiteImage3];
  } else if (color.english === "Pink" || color.english === "Blush" || color.english === "Dusty Rose" || color.english === "Barbie Pink") {
    images = [pinkImage1, pinkImage2, pinkImage3];
  } else if (color.english === "Black") {
    images = [blackImage1, blackImage2, blackImage3];
  } else if (color.english === "Lilac" || color.english === "Lavender") {
    images = [lavenderImage1, lavenderImage2, lavenderImage3];
  } else if (color.english === "Red") {
    images = [redImage1, redImage2, redImage3];
  }
  
  return { ...color, images };
});

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center" data-testid="section-gallery-hero">
        <div className="text-center px-4">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            Our Color Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-description">
            Explore all 17 exquisite colors, each with its own French-inspired name and timeless appeal
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-gallery-colors">
        <div className="max-w-7xl mx-auto space-y-20">
          {colorGalleries.map((color, colorIndex) => (
            <div key={colorIndex} data-testid={`color-gallery-${colorIndex}`}>
              <div className="flex items-center gap-6 mb-8">
                <div
                  className="w-16 h-16 rounded-full border-2 border-border shadow-md flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                  data-testid={`color-swatch-gallery-${colorIndex}`}
                />
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-foreground" data-testid={`text-color-name-${colorIndex}`}>
                    <span className="italic">{color.french}</span> / {color.english}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {color.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all duration-300"
                    data-testid={`img-container-${colorIndex}-${imageIndex}`}
                  >
                    <img
                      src={image}
                      alt={`${color.french} candles arrangement ${imageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-testid={`img-gallery-${colorIndex}-${imageIndex}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
