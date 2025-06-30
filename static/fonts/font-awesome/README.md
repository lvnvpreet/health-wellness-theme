# Font Awesome Icons

This directory contains Font Awesome icon font files for the Health & Wellness Hugo theme.

## Font Awesome Information:
Font Awesome is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.

### Required Font Awesome Files:

#### Font Files:
- `fa-solid-900.woff2` - Solid icons WOFF2
- `fa-solid-900.woff` - Solid icons WOFF
- `fa-solid-900.ttf` - Solid icons TTF
- `fa-regular-400.woff2` - Regular icons WOFF2
- `fa-regular-400.woff` - Regular icons WOFF
- `fa-regular-400.ttf` - Regular icons TTF
- `fa-brands-400.woff2` - Brand icons WOFF2
- `fa-brands-400.woff` - Brand icons WOFF
- `fa-brands-400.ttf` - Brand icons TTF

#### CSS Files (should be in static/css/):
- `all.min.css` - Complete Font Awesome CSS
- `fontawesome.min.css` - Core Font Awesome CSS
- `solid.min.css` - Solid icons CSS
- `regular.min.css` - Regular icons CSS
- `brands.min.css` - Brand icons CSS

### Font Face Declarations:
```css
@font-face {
  font-family: "Font Awesome 6 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("../fonts/font-awesome/fa-solid-900.woff2") format("woff2"),
       url("../fonts/font-awesome/fa-solid-900.woff") format("woff"),
       url("../fonts/font-awesome/fa-solid-900.ttf") format("truetype");
}

@font-face {
  font-family: "Font Awesome 6 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../fonts/font-awesome/fa-regular-400.woff2") format("woff2"),
       url("../fonts/font-awesome/fa-regular-400.woff") format("woff"),
       url("../fonts/font-awesome/fa-regular-400.ttf") format("truetype");
}

@font-face {
  font-family: "Font Awesome 6 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../fonts/font-awesome/fa-brands-400.woff2") format("woff2"),
       url("../fonts/font-awesome/fa-brands-400.woff") format("woff"),
       url("../fonts/font-awesome/fa-brands-400.ttf") format("truetype");
}
```

### Common Medical/Health Icons:
```html
<!-- Medical Icons -->
<i class="fas fa-stethoscope"></i>        <!-- Stethoscope -->
<i class="fas fa-heartbeat"></i>          <!-- Heartbeat -->
<i class="fas fa-pills"></i>              <!-- Pills -->
<i class="fas fa-syringe"></i>            <!-- Syringe -->
<i class="fas fa-thermometer"></i>        <!-- Thermometer -->
<i class="fas fa-band-aid"></i>           <!-- Band-aid -->
<i class="fas fa-ambulance"></i>          <!-- Ambulance -->
<i class="fas fa-hospital"></i>           <!-- Hospital -->
<i class="fas fa-user-md"></i>            <!-- Doctor -->
<i class="fas fa-tooth"></i>              <!-- Tooth -->

<!-- Contact Icons -->
<i class="fas fa-phone"></i>              <!-- Phone -->
<i class="fas fa-envelope"></i>           <!-- Email -->
<i class="fas fa-map-marker-alt"></i>     <!-- Location -->
<i class="fas fa-calendar-alt"></i>       <!-- Calendar -->
<i class="fas fa-clock"></i>              <!-- Clock -->

<!-- Social Media Icons -->
<i class="fab fa-facebook-f"></i>         <!-- Facebook -->
<i class="fab fa-twitter"></i>            <!-- Twitter -->
<i class="fab fa-instagram"></i>          <!-- Instagram -->
<i class="fab fa-linkedin-in"></i>        <!-- LinkedIn -->
<i class="fab fa-youtube"></i>            <!-- YouTube -->

<!-- UI Icons -->
<i class="fas fa-bars"></i>               <!-- Menu -->
<i class="fas fa-times"></i>              <!-- Close -->
<i class="fas fa-search"></i>             <!-- Search -->
<i class="fas fa-chevron-right"></i>      <!-- Chevron Right -->
<i class="fas fa-chevron-left"></i>       <!-- Chevron Left -->
<i class="fas fa-star"></i>               <!-- Star -->
```

### Usage Examples:
```html
<!-- Service Icons -->
<div class="service-icon">
  <i class="fas fa-stethoscope"></i>
</div>

<!-- Contact Info -->
<div class="contact-item">
  <i class="fas fa-phone"></i>
  <span>(555) 123-4567</span>
</div>

<!-- Social Links -->
<a href="#" class="social-link">
  <i class="fab fa-facebook-f"></i>
</a>

<!-- Button Icons -->
<button class="btn">
  <i class="fas fa-calendar-alt"></i>
  Book Appointment
</button>
```

### CSS Classes:
- `fas` - Font Awesome Solid (weight: 900)
- `far` - Font Awesome Regular (weight: 400)
- `fab` - Font Awesome Brands (weight: 400)
- `fa-lg` - Large icon (1.33em)
- `fa-2x` - 2x size
- `fa-3x` - 3x size
- `fa-fw` - Fixed width
- `fa-spin` - Spinning animation

### Download Sources:
- **Official Website**: https://fontawesome.com/
- **CDN**: https://cdnjs.com/libraries/font-awesome
- **GitHub**: https://github.com/FortAwesome/Font-Awesome

### License:
- **Icons**: CC BY 4.0 License
- **Fonts**: SIL OFL 1.1 License
- **Code**: MIT License

### Performance Tips:
- Only include the icon sets you actually use
- Use WOFF2 format for better compression
- Consider using SVG icons for better performance with few icons
- Subset fonts to include only needed icons

### Alternative Approaches:
1. **SVG Icons**: Individual SVG files for better performance
2. **CDN**: Use Font Awesome CDN for automatic updates
3. **Kit**: Use Font Awesome Kit for custom icon sets

### CDN Alternative:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### File Sizes (Approximate):
- fa-solid-900.woff2: ~75KB
- fa-regular-400.woff2: ~15KB
- fa-brands-400.woff2: ~130KB
- all.min.css: ~60KB

### Browser Support:
- **WOFF2**: Chrome 36+, Firefox 39+, Safari 12+, Edge 14+
- **WOFF**: Chrome 5+, Firefox 3.6+, Safari 5.1+, IE 9+
- **TTF**: Universal fallback support

### Accessibility:
- Use `aria-hidden="true"` for decorative icons
- Provide text alternatives for meaningful icons
- Use `role="img"` and `aria-label` for semantic icons

```html
<!-- Decorative icon -->
<i class="fas fa-star" aria-hidden="true"></i>

<!-- Semantic icon -->
<i class="fas fa-phone" role="img" aria-label="Phone number"></i>
```

Replace this README with your actual Font Awesome font files downloaded from the official sources.
