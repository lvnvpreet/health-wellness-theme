# Logo Images

This directory contains logo files for the Health & Wellness Hugo theme.

## Required Logo Files:

### Primary Logos:
- `logo.svg` - Main logo in SVG format (scalable, preferred)
- `logo.png` - Main logo in PNG format (fallback)
- `logo-white.svg` - White version of logo for dark backgrounds
- `logo-white.png` - White version of logo in PNG format

### Logo Variations:
- `logo-horizontal.svg` - Horizontal layout logo
- `logo-horizontal.png` - Horizontal layout logo in PNG
- `logo-vertical.svg` - Vertical layout logo  
- `logo-vertical.png` - Vertical layout logo in PNG
- `logo-icon.svg` - Icon-only version of logo
- `logo-icon.png` - Icon-only version in PNG

### Usage in Templates:
These logos are referenced in the header partial and other layout files:
```html
<img src="{{ "images/logo/logo.svg" | relURL }}" alt="{{ .Site.Title }}" class="logo">
```

### Recommended Specifications:
- **SVG**: Scalable, preferred format
- **PNG**: 300x100px for horizontal, 100x300px for vertical
- **File Size**: Keep under 50KB for optimal loading
- **Colors**: Should work on white and colored backgrounds
- **Transparency**: PNG files should have transparent backgrounds

### Branding Guidelines:
- Use consistent colors across all logo variations
- Ensure readability at different sizes
- Maintain aspect ratios when scaling
- Test visibility on various background colors

Replace this README with your actual logo files.
