# Hero Section Images

This directory contains hero section images for the Health & Wellness Hugo theme.

## Required Hero Images:

### Main Hero Images:
- `hero-1.jpg` - Primary hero image (1920x1080px recommended)
- `hero-2.jpg` - Secondary hero image for slider
- `hero-3.jpg` - Tertiary hero image for variety
- `hero-medical.jpg` - Medical/clinical focused hero image
- `hero-wellness.jpg` - Wellness/lifestyle focused hero image
- `hero-dental.jpg` - Dental practice focused hero image

### Page-Specific Heroes:
- `about-hero.jpg` - About page hero image
- `services-hero.jpg` - Services page hero image
- `team-hero.jpg` - Team page hero image
- `contact-hero.jpg` - Contact page hero image
- `blog-hero.jpg` - Blog page hero image
- `testimonials-hero.jpg` - Testimonials page hero image

### Mobile Optimized:
- `hero-1-mobile.jpg` - Mobile-optimized version (750x1334px)
- `hero-2-mobile.jpg` - Mobile-optimized version
- `hero-3-mobile.jpg` - Mobile-optimized version

### Background Images:
- `hero-bg.jpg` - Generic background pattern/texture
- `hero-overlay.png` - Overlay pattern (optional)

### Usage in Templates:
These images are used in hero sections and page headers:
```html
<section class="hero" style="background-image: url('{{ "images/hero/hero-1.jpg" | relURL }}')">
```

### Image Specifications:
- **Format**: JPG for photos, PNG for graphics with transparency
- **Desktop Size**: 1920x1080px (16:9 ratio) or 1920x1200px
- **Mobile Size**: 750x1334px or similar mobile-friendly dimensions
- **File Size**: Keep under 500KB for fast loading
- **Quality**: 80-85% JPEG quality for good balance
- **Content**: High-quality, professional healthcare/wellness imagery

### Content Suggestions:
- Medical professionals in action
- Modern medical facilities
- Happy, healthy patients
- Wellness and lifestyle imagery
- Clean, modern healthcare environments
- Diverse representation of patients and staff

### Optimization Tips:
- Use WebP format when possible for better compression
- Implement lazy loading for hero images
- Consider using CSS background-image for better control
- Test loading times on various devices

Replace this README with your actual hero images.
