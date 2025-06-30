# Inter Font Family

This directory contains the Inter font family files for the Health & Wellness Hugo theme.

## Inter Font Information:
Inter is a typeface carefully crafted & designed for computer screens. It features a tall x-height to aid in readability of mixed-case and lower-case text.

### Required Inter Font Files:

#### Regular Weights:
- `Inter-Thin.woff2` - Inter Thin (100)
- `Inter-ExtraLight.woff2` - Inter Extra Light (200)
- `Inter-Light.woff2` - Inter Light (300)
- `Inter-Regular.woff2` - Inter Regular (400)
- `Inter-Medium.woff2` - Inter Medium (500)
- `Inter-SemiBold.woff2` - Inter Semi Bold (600)
- `Inter-Bold.woff2` - Inter Bold (700)
- `Inter-ExtraBold.woff2` - Inter Extra Bold (800)
- `Inter-Black.woff2` - Inter Black (900)

#### Variable Font (Recommended):
- `Inter-Variable.woff2` - Inter Variable font (100-900)

#### Fallback Formats:
- `Inter-Regular.woff` - WOFF format for older browsers
- `Inter-Bold.woff` - WOFF format for older browsers
- `Inter-Regular.ttf` - TTF format fallback
- `Inter-Bold.ttf` - TTF format fallback

### Font Usage in CSS:
```css
@font-face {
  font-family: 'Inter';
  src: url('../fonts/inter/Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Fallback for non-variable font support */
@font-face {
  font-family: 'Inter';
  src: url('../fonts/inter/Inter-Regular.woff2') format('woff2'),
       url('../fonts/inter/Inter-Regular.woff') format('woff'),
       url('../fonts/inter/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('../fonts/inter/Inter-Bold.woff2') format('woff2'),
       url('../fonts/inter/Inter-Bold.woff') format('woff'),
       url('../fonts/inter/Inter-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### CSS Variables for Font Weights:
```css
:root {
  --font-weight-thin: 100;
  --font-weight-extra-light: 200;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;
  --font-weight-black: 900;
}
```

### Typography Scale:
```css
/* Headings */
h1 { font-weight: var(--font-weight-bold); }
h2 { font-weight: var(--font-weight-semi-bold); }
h3 { font-weight: var(--font-weight-medium); }
h4 { font-weight: var(--font-weight-medium); }
h5 { font-weight: var(--font-weight-regular); }
h6 { font-weight: var(--font-weight-regular); }

/* Body text */
body { font-weight: var(--font-weight-regular); }
.lead { font-weight: var(--font-weight-light); }
.small { font-weight: var(--font-weight-regular); }
```

### Download Sources:
- **Official Website**: https://rsms.me/inter/
- **Google Fonts**: https://fonts.google.com/specimen/Inter
- **GitHub**: https://github.com/rsms/inter

### License:
Inter is licensed under the SIL Open Font License 1.1

### Performance Optimization:
- Use WOFF2 format for best compression
- Implement `font-display: swap` for better loading performance
- Preload critical font files in HTML head
- Use variable fonts when possible to reduce file count

### Preload Example:
```html
<link rel="preload" href="{{ "fonts/inter/Inter-Variable.woff2" | relURL }}" as="font" type="font/woff2" crossorigin>
```

### Characteristics:
- **Readability**: Optimized for screens and UI
- **x-height**: Tall x-height for better readability
- **Character Set**: Supports Latin, Cyrillic, and Greek scripts
- **OpenType Features**: Supports stylistic sets and contextual alternates
- **Variable Font**: Continuous weight axis from 100 to 900

### Browser Support:
- **WOFF2**: Chrome 36+, Firefox 39+, Safari 12+, Edge 14+
- **WOFF**: Chrome 5+, Firefox 3.6+, Safari 5.1+, IE 9+
- **TTF**: Universal fallback support

### File Sizes (Approximate):
- Variable WOFF2: ~200KB
- Individual WOFF2: ~25KB each
- Individual WOFF: ~35KB each
- Individual TTF: ~150KB each

Replace this README with your actual Inter font files downloaded from the official sources.
