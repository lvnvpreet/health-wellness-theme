# Favicon Files

This directory contains favicon files for the Health & Wellness Hugo theme.

## Required Favicon Files:

### Standard Favicons:
- `favicon.ico` - Traditional favicon (16x16, 32x32, 48x48 pixels)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon
- `favicon-96x96.png` - 96x96 PNG favicon

### Apple Touch Icons:
- `apple-touch-icon.png` - 180x180 PNG for iOS devices
- `apple-touch-icon-57x57.png` - 57x57 PNG for older iOS
- `apple-touch-icon-60x60.png` - 60x60 PNG for iOS
- `apple-touch-icon-72x72.png` - 72x72 PNG for iPad
- `apple-touch-icon-76x76.png` - 76x76 PNG for iPad
- `apple-touch-icon-114x114.png` - 114x114 PNG for retina iPhone
- `apple-touch-icon-120x120.png` - 120x120 PNG for iPhone
- `apple-touch-icon-144x144.png` - 144x144 PNG for retina iPad
- `apple-touch-icon-152x152.png` - 152x152 PNG for retina iPad
- `apple-touch-icon-180x180.png` - 180x180 PNG for iPhone 6+

### Android/Chrome Icons:
- `android-icon-36x36.png` - 36x36 PNG for Android
- `android-icon-48x48.png` - 48x48 PNG for Android
- `android-icon-72x72.png` - 72x72 PNG for Android
- `android-icon-96x96.png` - 96x96 PNG for Android
- `android-icon-144x144.png` - 144x144 PNG for Android
- `android-icon-192x192.png` - 192x192 PNG for Android

### Microsoft Tiles:
- `ms-icon-70x70.png` - 70x70 PNG for Windows tiles
- `ms-icon-144x144.png` - 144x144 PNG for Windows tiles
- `ms-icon-150x150.png` - 150x150 PNG for Windows tiles
- `ms-icon-310x310.png` - 310x310 PNG for Windows tiles

### Configuration Files:
- `site.webmanifest` - Web app manifest file
- `browserconfig.xml` - Microsoft browser configuration

### Usage in Head Partial:
These favicons are referenced in the head.html partial:
```html
<link rel="icon" type="image/x-icon" href="{{ "images/favicon/favicon.ico" | relURL }}">
<link rel="icon" type="image/png" sizes="32x32" href="{{ "images/favicon/favicon-32x32.png" | relURL }}">
<link rel="icon" type="image/png" sizes="16x16" href="{{ "images/favicon/favicon-16x16.png" | relURL }}">
<link rel="apple-touch-icon" sizes="180x180" href="{{ "images/favicon/apple-touch-icon.png" | relURL }}">
<link rel="manifest" href="{{ "images/favicon/site.webmanifest" | relURL }}">
```

### Generation Tools:
- Use https://realfavicongenerator.net/ to generate all favicon variations
- Or use https://www.favicon-generator.org/ for basic favicon generation

Replace this README with your actual favicon files.
