# Beyond Luxe Candle - Design Guidelines

## Design Approach

**Reference-Based Design**: Drawing primary inspiration from efsicreations.com's elegant, soft aesthetic combined with themequeens.com's clear package presentation and color showcase methodology. The design will embody luxury candle rentals with French-inspired sophistication.

## Color Palette

### Primary Colors (from efsicreations.com)
- **Cream/Beige Base**: 40 30% 95% - Primary background
- **Warm Taupe**: 30 15% 85% - Secondary surfaces  
- **Soft Brown**: 25 20% 70% - Text and accents
- **Deep Mocha**: 20 25% 35% - Headings and emphasis
- **Rich Chocolate**: 20 30% 20% - Navigation, footer backgrounds

### Accent Colors
- **Soft Gold**: 45 65% 75% - Luxury accents, buttons, CTAs
- **Warm Ivory**: 40 20% 98% - Card backgrounds, form fields

**Dark Mode**: Not required for this luxury aesthetic - maintain consistent warm, light theme throughout

## Typography

**Font Selection**: Google Fonts
- **Headings**: 'Playfair Display' - Elegant serif for luxury feel (weights: 400, 600, 700)
- **Body Text**: 'Montserrat' - Clean, modern sans-serif (weights: 300, 400, 500, 600)
- **Accent Text**: 'Cormorant Garamond' - French names, special callouts (italic, 400, 600)

**Type Scale**:
- Hero Heading: 3.5rem (desktop) / 2.5rem (mobile)
- Section Headings: 2.5rem (desktop) / 1.75rem (mobile)
- Package Names: 1.5rem
- Body: 1rem / 1.125rem line-height
- Small Text: 0.875rem

## Layout System

**Spacing Units**: Tailwind spacing - predominantly using 4, 8, 12, 16, 20, 24, 32 for consistent rhythm

**Container Strategy**:
- Max-width: 1280px for content sections
- Full-width for hero and gallery sections
- Generous padding: py-20 to py-32 for desktop sections, py-12 to py-16 mobile

## Home Page Structure

### 1. Navigation
- Fixed/sticky navigation with logo on left, menu items center-right
- Transparent overlay on hero, transitions to solid cream background on scroll
- Menu: Home, Gallery, Packages, Inquire Now
- CTA button: "Book Your Event" in soft gold

### 2. Hero Section (90vh)
**Background**: Elegant background image with subtle dark overlay (opacity 0.3-0.4) for text legibility
- Logo prominently displayed at top center or integrated into hero
- Centered content layout
- Headline: "Beyond Luxe Candle" in Playfair Display
- Slogan: "Illuminate Your Moments with Timeless Elegance" 
- Subtext: Brief description (1-2 sentences) about luxury candle rentals
- Primary CTA button with blurred background
- Scroll indicator at bottom

### 3. Animated Candle Slideshow
**Implementation**: Below hero, full-width carousel/slideshow
- Auto-rotating showcase of 4-6 candle arrangement images
- Smooth fade transitions (3-4 seconds per image)
- Minimal navigation dots at bottom
- Subtle parallax effect on scroll

### 4. Why Beyond Luxe Candle Section
**Layout**: 3-column grid (stacks to single column on mobile)
- Section heading centered, elegant underline accent
- Each benefit as a card with icon/image at top
- **Three Benefits**:
  1. "Eco-Friendly Elegance" - 100% plant-based, petroleum-free, sustainable choice
  2. "Customizable Artistry" - 17 exquisite colors to match any event aesthetic  
  3. "Effortless Luxury" - Mess-free, no drips or soot, 8-12 hour burn time
- Icon or small candle image per card
- 2-3 sentence description each
- Cards with subtle shadow, cream backgrounds, rounded corners

### 5. Package Showcase
**Two-Section Layout**:

**Custom Floor Packages**
- Elegant heading with dimension specs (5-6" wide, 14-36" tall)
- 5 pricing tiers in card grid (2-3 columns desktop, stack mobile)
- Each card: Tier name, candle quantity, price prominently displayed
- Soft gold accent on "most popular" package
- Hover effect: gentle lift and shadow enhancement

**Custom Semi Packages**  
- Same card treatment as floor packages
- 6 pricing tiers displayed
- Clear dimension specs (3.5" wide, 6-12" tall)

### 6. Color Palette Preview
- Teaser section showing 4-6 featured colors in circular swatches
- French names beneath each (Cormorant Garamond italic)
- "Explore All 17 Colors" CTA linking to Gallery

### 7. Call-to-Action Section
- Full-width, subtle gold background
- Centered content: "Ready to Illuminate Your Event?"
- Large inquiry button
- Contact information subtly displayed

### 8. Footer
- Rich chocolate background with cream text
- Logo, quick links, social media icons
- Contact details, business hours if applicable
- Copyright and credits

## Gallery Page

### Structure
- Hero: Smaller header (40vh) with "Our Color Collection" title
- Introduction paragraph about color customization
- Grid layout: 17 color sections, each featuring:
  - Large color name in both French and English (e.g., "Blanche / White")
  - 2-4 placeholder images per color showing candles in various arrangements
  - Masonry or uniform grid (3-4 columns desktop, 2 mobile)
  - Subtle hover zoom effect on images
  - Color swatch accent bar or border

**Color Organization** (in aesthetic flow):
Group warm tones → cool tones → neutrals → bold colors for visual harmony

## Inquire Now Page

### Layout
- Smaller hero (30vh) with "Start Your Journey"
- Two-column layout (single column mobile):
  - **Left**: Contact form with elegant styling
    - Name, Email, Phone, Event Date
    - Event Type dropdown
    - Package Selection (Floor/Semi dropdown)
    - Quantity needed
    - Preferred colors (multi-select)
    - Message/Additional Details textarea
    - Submit button in soft gold
  - **Right**: Business information card
    - Contact details
    - Service areas
    - "What happens next" process steps
    - Optional: Embedded map or location image

## Images Strategy

### Required Images

**Home Page**:
1. **Hero Background**: Elegant candle arrangement in sophisticated setting (warm, luxurious ambiance)
2. **Slideshow Images** (4-6): Various candle setups - intimate dinners, grand events, different color schemes
3. **Why Section Icons/Images**: 3 small supporting visuals for each benefit
4. **Package Section**: 1-2 lifestyle images of candles at events

**Gallery Page**:
- 3-4 high-quality images per color (17 colors = ~51-68 images total)
- Each showing the specific candle color in beautiful settings
- Variety of arrangements (intimate, grand, table settings, floor installations)

**General**:
- Logo integration throughout
- Placeholder text: Use image description comments where actual photos needed

## Component Specifications

### Buttons
- Primary: Soft gold background, mocha text, rounded corners (0.5rem)
- Secondary: Outline with mocha border, transparent background  
- On images: Blurred cream background (backdrop-filter: blur), mocha text
- Padding: px-8 py-3 for standard, px-10 py-4 for hero CTAs

### Cards
- Background: Warm ivory or cream
- Border: 1px solid taupe at 20% opacity
- Shadow: Subtle (0 4px 6px rgba(0,0,0,0.05))
- Hover: Lift slightly (translateY -4px) and enhance shadow
- Border-radius: 0.75rem

### Forms
- Input fields: Cream background, taupe border
- Focus state: Soft gold border, subtle glow
- Labels: Montserrat 500 weight, mocha color
- Generous padding: py-3 px-4

### Navigation
- Desktop: Horizontal menu, elegant spacing
- Mobile: Hamburger menu with smooth slide-in drawer
- Active state: Soft gold underline accent

## Animation Guidelines

**Use Sparingly**:
- Hero: Subtle fade-in for text (0.8s ease)
- Slideshow: Smooth cross-fade transitions (1s)
- Scroll reveals: Gentle fade-up for sections (intersection observer)
- Cards: Smooth hover transitions (0.3s)
- NO distracting parallax or complex animations

## Accessibility

- Color contrast ratios meet WCAG AA standards (mocha on cream, chocolate on taupe)
- All interactive elements keyboard accessible
- Form labels properly associated
- Alt text for all candle images describing color and arrangement
- Semantic HTML structure throughout

This design creates a luxurious, French-inspired aesthetic that positions Beyond Luxe Candle as a premium service while maintaining clarity and usability for event planners and hosts.