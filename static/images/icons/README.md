# Icons

This directory contains icon files for the Health & Wellness Hugo theme.

## Required Icon Categories:

### Medical Icons:
- `stethoscope.svg` - Stethoscope icon
- `heart.svg` - Heart/cardiology icon
- `pill.svg` - Medication/pharmacy icon
- `syringe.svg` - Injection/vaccination icon
- `thermometer.svg` - Temperature/fever icon
- `bandage.svg` - Wound care/first aid icon
- `medical-cross.svg` - Medical cross symbol
- `ambulance.svg` - Emergency services icon
- `hospital.svg` - Hospital/facility icon
- `medical-bag.svg` - Medical bag icon

### Dental Icons:
- `tooth.svg` - Tooth icon
- `dental-chair.svg` - Dental chair icon
- `toothbrush.svg` - Oral hygiene icon
- `dental-floss.svg` - Dental floss icon
- `mouthwash.svg` - Mouthwash icon
- `braces.svg` - Orthodontic braces icon
- `dental-implant.svg` - Dental implant icon

### Wellness Icons:
- `fitness.svg` - Exercise/fitness icon
- `meditation.svg` - Meditation/mindfulness icon
- `nutrition.svg` - Nutrition/healthy eating icon
- `water-drop.svg` - Hydration icon
- `sleep.svg` - Sleep/rest icon
- `yoga.svg` - Yoga/flexibility icon
- `running.svg` - Running/cardio icon
- `weight.svg` - Weight management icon

### Service Icons:
- `appointment.svg` - Appointment booking icon
- `consultation.svg` - Medical consultation icon
- `examination.svg` - Medical examination icon
- `surgery.svg` - Surgical procedures icon
- `laboratory.svg` - Lab testing icon
- `x-ray.svg` - Imaging/radiology icon
- `emergency.svg` - Emergency care icon
- `rehabilitation.svg` - Physical therapy icon

### Contact Icons:
- `phone.svg` - Phone contact icon
- `email.svg` - Email contact icon
- `location.svg` - Location/address icon
- `calendar.svg` - Appointment calendar icon
- `clock.svg` - Hours/time icon
- `map.svg` - Map/directions icon

### Social Media Icons:
- `facebook.svg` - Facebook icon
- `twitter.svg` - Twitter icon
- `instagram.svg` - Instagram icon
- `linkedin.svg` - LinkedIn icon
- `youtube.svg` - YouTube icon
- `google-maps.svg` - Google Maps icon
- `yelp.svg` - Yelp reviews icon

### User Interface Icons:
- `menu.svg` - Hamburger menu icon
- `close.svg` - Close/X icon
- `search.svg` - Search icon
- `arrow-left.svg` - Left arrow icon
- `arrow-right.svg` - Right arrow icon
- `arrow-up.svg` - Up arrow icon
- `arrow-down.svg` - Down arrow icon
- `chevron-left.svg` - Left chevron icon
- `chevron-right.svg` - Right chevron icon
- `chevron-up.svg` - Up chevron icon
- `chevron-down.svg` - Down chevron icon

### Form Icons:
- `user.svg` - User/person icon
- `email-field.svg` - Email field icon
- `phone-field.svg` - Phone field icon
- `message.svg` - Message/comment icon
- `submit.svg` - Submit/send icon
- `required.svg` - Required field icon

### Features Icons:
- `24-7.svg` - 24/7 availability icon
- `insurance.svg` - Insurance accepted icon
- `parking.svg` - Parking available icon
- `wheelchair.svg` - Accessibility icon
- `wifi.svg` - WiFi available icon
- `pharmacy.svg` - On-site pharmacy icon
- `laboratory-onsite.svg` - On-site lab icon

### Rating/Review Icons:
- `star-filled.svg` - Filled star rating
- `star-empty.svg` - Empty star rating
- `star-half.svg` - Half star rating
- `thumbs-up.svg` - Positive feedback icon
- `quote.svg` - Testimonial quote icon

### Payment Icons:
- `credit-card.svg` - Credit card payment icon
- `cash.svg` - Cash payment icon
- `insurance-card.svg` - Insurance card icon
- `financing.svg` - Financing options icon

### Alert/Status Icons:
- `info.svg` - Information icon
- `warning.svg` - Warning icon
- `success.svg` - Success/checkmark icon
- `error.svg` - Error icon
- `loading.svg` - Loading spinner icon

### Usage in Templates:
These icons are used throughout the theme:
```html
<img src="{{ "images/icons/stethoscope.svg" | relURL }}" alt="Medical Services" class="service-icon">
```

### Icon Specifications:
- **Format**: SVG preferred (scalable, small file size)
- **Size**: 24x24px base size (scalable)
- **Style**: Consistent stroke width and style
- **Color**: Single color or simple gradient
- **Background**: Transparent background
- **File Size**: Keep SVG under 5KB each

### Design Guidelines:
- **Consistent Style**: Use same icon style throughout (outline, filled, etc.)
- **Simple Design**: Clean, recognizable shapes
- **Scalability**: Should look good at various sizes
- **Accessibility**: High contrast, clear shapes
- **Medical Accuracy**: Medically accurate representations

### Color Schemes:
- **Primary**: Use theme primary color
- **Monochrome**: Black/white versions for flexibility
- **Accent**: Theme accent color for highlights
- **Contextual**: Different colors for different states (success, warning, error)

### Icon Libraries:
Consider using established icon libraries:
- **Heroicons**: Clean, simple SVG icons
- **Feather Icons**: Lightweight, beautiful icons
- **Font Awesome**: Comprehensive icon set
- **Material Icons**: Google's Material Design icons
- **Lucide**: Beautiful, customizable icons

### Accessibility:
- **Alt Text**: Descriptive alt text for all icons
- **ARIA Labels**: Use aria-label for decorative icons
- **High Contrast**: Ensure visibility for users with visual impairments
- **Size**: Minimum 16px for clickable icons

### Implementation:
- **Inline SVG**: For icons that need styling control
- **Image Tags**: For simple decorative icons
- **Icon Fonts**: For large sets of icons
- **CSS Background**: For decorative background icons

### File Naming Convention:
- Use lowercase letters and hyphens
- Use descriptive names
- Examples: `stethoscope.svg`, `appointment-calendar.svg`

### Optimization:
- **SVGO**: Use SVGO to optimize SVG file sizes
- **Remove Metadata**: Strip unnecessary metadata
- **Simplify Paths**: Combine and simplify SVG paths when possible

Replace this README with your actual icon files.
