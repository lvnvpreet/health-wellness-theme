# Health & Wellness Hugo Theme

A modern, responsive Hugo theme designed specifically for health and wellness websites, dental practices, medical clinics, and healthcare professionals.

## Features

- 🏥 **Healthcare Focused**: Designed specifically for medical and wellness websites
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🔍 **SEO Optimized**: Built-in SEO best practices and structured data
- 📅 **Appointment Booking**: Integrated appointment forms and CTAs
- 👥 **Team Profiles**: Showcase your medical team and staff
- 💬 **Testimonials**: Display patient reviews and testimonials
- 📝 **Blog System**: Full-featured blog for health articles and updates
- 📞 **Contact Forms**: Multiple contact and inquiry forms
- 🎨 **Modern Design**: Clean, professional, and trustworthy appearance
- ⚡ **Fast Loading**: Optimized for performance and Core Web Vitals
- 🔧 **Customizable**: Easy to customize colors, fonts, and layouts
- 📊 **Analytics Ready**: Google Analytics and tracking integration

## Demo

[View Live Demo](https://your-demo-url.com) | [Documentation](https://your-docs-url.com)

## Installation

### Method 1: Git Submodule (Recommended)

```bash
git submodule add https://github.com/username/health-wellness-theme.git themes/health-wellness-theme
```

### Method 2: Download

1. Download the theme from the [releases page](https://github.com/username/health-wellness-theme/releases)
2. Extract to your `themes/` directory
3. Rename the folder to `health-wellness-theme`

## Quick Start

1. Add the theme to your `config.yaml`:

```yaml
theme: health-wellness-theme
```

2. Copy the example site content:

```bash
cp -r themes/health-wellness-theme/exampleSite/* .
```

3. Start Hugo development server:

```bash
hugo server -D
```

## Configuration

### Basic Configuration

```yaml
baseURL: 'https://yoursite.com'
languageCode: 'en-us'
title: 'Your Health Practice'
theme: 'health-wellness-theme'

params:
  # Site Settings
  logo: '/images/logo.png'
  favicon: '/images/favicon.ico'
  
  # Contact Information
  phone: '+1 (555) 123-4567'
  email: 'info@yourpractice.com'
  address: '123 Health Street, Medical City, MC 12345'
  
  # Business Hours
  hours:
    monday: '9:00 AM - 6:00 PM'
    tuesday: '9:00 AM - 6:00 PM'
    wednesday: '9:00 AM - 6:00 PM'
    thursday: '9:00 AM - 6:00 PM'
    friday: '9:00 AM - 5:00 PM'
    saturday: '9:00 AM - 2:00 PM'
    sunday: 'Closed'
  
  # Social Media
  social:
    facebook: 'https://facebook.com/yourpractice'
    twitter: 'https://twitter.com/yourpractice'
    instagram: 'https://instagram.com/yourpractice'
    linkedin: 'https://linkedin.com/company/yourpractice'
  
  # SEO
  description: 'Professional healthcare services in Medical City'
  keywords: 'healthcare, medical, dental, wellness, clinic'
  
  # Analytics
  googleAnalytics: 'G-XXXXXXXXXX'
```

## Content Structure

### Services

Create service pages in `content/services/`:

```markdown
---
title: "General Dentistry"
description: "Comprehensive dental care for the whole family"
image: "/images/services/general-dentistry.jpg"
price: "$150"
duration: "1 hour"
weight: 1
---

Your service description here...
```

### Team Members

Create team profiles in `content/team/`:

```markdown
---
title: "Dr. Sarah Johnson"
position: "Lead Dentist"
image: "/images/team/dr-sarah-johnson.jpg"
education: "DDS from University of Health Sciences"
specialties: ["General Dentistry", "Cosmetic Procedures"]
weight: 1
---

Dr. Johnson's biography...
```

### Testimonials

Create testimonials in `content/testimonials/`:

```markdown
---
title: "Amazing Experience"
patient: "Robert Johnson"
image: "/images/testimonials/robert-johnson.jpg"
rating: 5
date: 2024-01-15
---

"The best dental experience I've ever had..."
```

## Customization

### Colors and Fonts

Edit `static/css/style.css` or create a custom CSS file to override theme styles.

### Custom Shortcodes

The theme includes several shortcodes for common healthcare website elements:

- `{{< hero-section >}}` - Hero banner with CTA
- `{{< service-card >}}` - Service highlighting
- `{{< team-member >}}` - Team member profiles
- `{{< testimonial >}}` - Patient testimonials
- `{{< appointment-cta >}}` - Appointment booking CTA
- `{{< business-hours >}}` - Operating hours display

## Requirements

- Hugo Extended v0.112.0 or later
- Node.js (for asset processing, optional)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This theme is released under the [MIT License](LICENSE).

## Support

- 📖 [Documentation](https://your-docs-url.com)
- 🐛 [Issue Tracker](https://github.com/username/health-wellness-theme/issues)
- 💬 [Discussions](https://github.com/username/health-wellness-theme/discussions)

## Credits

- Built with [Hugo](https://gohugo.io/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ for the healthcare community
