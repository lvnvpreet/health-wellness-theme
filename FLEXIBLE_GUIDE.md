# Flexible Theme Usage Guide

## Overview

Your Health & Wellness theme now includes a powerful adaptive design system that automatically adjusts the layout and styling based on whether images are present in your content. This guide explains how to take full advantage of these flexible features.

## How It Works

The theme uses intelligent CSS classes and JavaScript to detect when images are missing and automatically applies enhanced styling to create beautiful, professional layouts even without images.

### Automatic Detection

The theme automatically adds these CSS classes to components:
- `.has-image` - Applied when images are present
- `.no-image` - Applied when images are missing

## Content Types and Adaptations

### 1. Hero Sections

**With Image:**
```yaml
# In your site config (config.toml)
[params]
  hero_image = "/images/hero/medical-center.jpg"
  hero_title = "Your Health is Our Priority"
```

**Without Image:**
```yaml
# Simply omit or comment out the hero_image parameter
[params]
  # hero_image = ""  # No image needed
  hero_title = "Your Health is Our Priority"
```

**Result:**
- With image: Full-screen background with overlay
- Without image: Beautiful gradient background with animated patterns

### 2. Service Pages

**With Image:**
```yaml
---
title: "Dental Cleaning"
image: "/images/services/dental-cleaning.jpg"
icon: "fas fa-tooth"
price: "$150"
description: "Professional dental cleaning service"
---
```

**Without Image:**
```yaml
---
title: "Health Consultation"
# No image parameter needed
icon: "fas fa-stethoscope"
price: "$200"
description: "Comprehensive health assessment"
---
```

**Result:**
- With image: Standard card with image header
- Without image: Enhanced icon design with gradient background and animations

### 3. Team Members

**With Photo:**
```yaml
---
title: "Dr. Sarah Johnson"
image: "/images/team/dr-sarah.jpg"
position: "Chief Medical Officer"
specialties: ["Cardiology", "Internal Medicine"]
---
```

**Without Photo:**
```yaml
---
title: "Dr. Michael Chen"
# No image parameter
position: "Neurologist"
specialties: ["Neurology", "Research"]
---
```

**Result:**
- With photo: Professional photo display with hover effects
- Without photo: Elegant placeholder with medical icon and shimmer animation

### 4. Blog Posts

**With Featured Image:**
```yaml
---
title: "10 Tips for Heart Health"
image: "/images/blog/heart-health.jpg"
author: "Dr. Smith"
tags: ["health", "cardiology"]
---
```

**Without Featured Image:**
```yaml
---
title: "Understanding Diabetes"
# No image needed
author: "Dr. Johnson"
tags: ["health", "diabetes"]
---
```

**Result:**
- With image: Visual card with image header
- Without image: Text-focused design with enhanced typography and colored accents

### 5. Testimonials

**With Patient Photo:**
```yaml
---
title: "Excellent Care"
image: "/images/testimonials/patient1.jpg"
patient: "John Smith"
rating: 5
---
```

**Without Patient Photo:**
```yaml
---
title: "Amazing Service"
# No image needed - uses patient initials
patient: "Mary Johnson"
rating: 5
---
```

**Result:**
- With photo: Professional photo display
- Without photo: Elegant initial-based avatar with gradient background

## Best Practices

### When to Use Images
- Use high-quality, professional images when available
- Ensure images are optimized for web (WebP format recommended)
- Maintain consistent aspect ratios across similar content types
- Include descriptive alt text for accessibility

### When Not to Use Images
- When high-quality images aren't available
- For content where text/icons are more important
- To maintain faster loading times
- When you want to emphasize textual content

### Hybrid Approach
You can mix and match! Some services can have images while others rely on enhanced icon designs. The theme ensures consistency across both approaches.

## Customization Options

### CSS Variables
Customize the adaptive behavior by modifying CSS variables:

```css
:root {
  --content-padding: 2rem;        /* Padding for no-image content */
  --content-spacing: 2.5rem;      /* Spacing for no-image content */
  --primary-color: #007bff;       /* Used in gradients and accents */
}
```

### Custom Adaptive Classes
Create your own adaptive components:

```html
<div class="my-component {{ if .Params.image }}has-image{{ else }}no-image{{ end }}">
  <!-- Your content -->
</div>
```

```css
.my-component.has-image {
  /* Styles when image is present */
  padding: 1rem;
}

.my-component.no-image {
  /* Enhanced styles when no image */
  padding: 2rem;
  background: linear-gradient(135deg, var(--light-color), #fff);
  border-left: 4px solid var(--primary-color);
}
```

## Performance Benefits

### Automatic Optimizations
- Lazy loading for images
- GPU-accelerated animations
- Reduced motion support
- Touch device optimizations

### Loading States
- Image placeholder animations
- Graceful fallbacks for failed image loads
- Progressive enhancement

## Accessibility Features

### Built-in Accessibility
- ARIA labels for image-less content
- Keyboard navigation support
- Screen reader optimizations
- High contrast mode support
- Focus indicators

### Skip Links
- Automatic skip link generation
- Proper landmark roles
- Semantic HTML structure

## Browser Support

The flexible features work across all modern browsers:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers

Graceful degradation ensures basic functionality in older browsers.

## Troubleshooting

### Images Not Loading
If images aren't displaying:
1. Check file paths are correct
2. Ensure images exist in the `static` directory
3. Verify image permissions
4. Check browser console for errors

### Styling Issues
If adaptive styling isn't working:
1. Ensure `flexible-theme.css` is included
2. Check that JavaScript is enabled
3. Verify CSS classes are being applied
4. Clear browser cache

### Performance Issues
If you experience slow loading:
1. Optimize image sizes
2. Enable lazy loading
3. Use WebP format for images
4. Consider reducing animations

## Examples

See the `exampleSite` directory for complete examples of:
- Services with and without images
- Team members with and without photos
- Blog posts with various configurations
- Mixed content approaches

## Support

For additional help:
1. Check the GitHub issues
2. Review the example site
3. Consult the main README
4. Create a new issue for bugs or questions
