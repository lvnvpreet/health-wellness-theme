# Testimonial Images

This directory contains testimonial-related images for the Health & Wellness Hugo theme.

## Required Testimonial Images:

### Patient Photos (with permission):
- `patient-john-doe.jpg` - Patient John D. headshot
- `patient-jane-smith.jpg` - Patient Jane S. headshot  
- `patient-robert-johnson.jpg` - Patient Robert J. headshot
- `patient-mary-wilson.jpg` - Patient Mary W. headshot
- `patient-david-brown.jpg` - Patient David B. headshot
- `patient-sarah-davis.jpg` - Patient Sarah D. headshot

### Anonymous/Stock Patient Photos:
- `testimonial-1.jpg` - Anonymous patient photo 1
- `testimonial-2.jpg` - Anonymous patient photo 2
- `testimonial-3.jpg` - Anonymous patient photo 3
- `testimonial-4.jpg` - Anonymous patient photo 4
- `testimonial-5.jpg` - Anonymous patient photo 5
- `testimonial-6.jpg` - Anonymous patient photo 6

### Demographic Variety:
- `testimonial-senior-male.jpg` - Senior male patient
- `testimonial-senior-female.jpg` - Senior female patient
- `testimonial-middle-aged-male.jpg` - Middle-aged male patient
- `testimonial-middle-aged-female.jpg` - Middle-aged female patient
- `testimonial-young-adult-male.jpg` - Young adult male patient
- `testimonial-young-adult-female.jpg` - Young adult female patient
- `testimonial-family.jpg` - Family testimonial photo

### Treatment-Specific:
- `dental-patient-before.jpg` - Before dental treatment
- `dental-patient-after.jpg` - After dental treatment (smiling)
- `weight-loss-before.jpg` - Before weight loss program
- `weight-loss-after.jpg` - After weight loss program
- `physical-therapy-success.jpg` - Physical therapy success story

### Video Testimonial Thumbnails:
- `video-testimonial-1.jpg` - Video testimonial thumbnail 1
- `video-testimonial-2.jpg` - Video testimonial thumbnail 2
- `video-testimonial-3.jpg` - Video testimonial thumbnail 3
- `video-testimonial-4.jpg` - Video testimonial thumbnail 4

### Background/Context Images:
- `testimonial-bg.jpg` - Background pattern for testimonial section
- `review-stars.png` - Star rating graphics
- `quote-icon.png` - Quotation mark icon
- `testimonial-overlay.png` - Overlay graphic

### Platform Logos (for review sources):
- `google-reviews.png` - Google Reviews logo
- `facebook-reviews.png` - Facebook Reviews logo
- `yelp-reviews.png` - Yelp Reviews logo
- `healthgrades.png` - Healthgrades logo

### Usage in Templates:
These images are used in testimonial cards and sections:
```html
<img src="{{ "images/testimonials/patient-john-doe.jpg" | relURL }}" alt="John D., Patient" class="testimonial-photo">
```

### Image Specifications:
- **Format**: JPG for photos, PNG for graphics with transparency
- **Headshot Size**: 150x150px (1:1 square ratio) for testimonial avatars
- **Video Thumbnail Size**: 400x225px (16:9 ratio)
- **File Size**: Keep under 50KB for avatars, 100KB for thumbnails
- **Background**: Clean, neutral background for patient photos
- **Quality**: 80-85% JPEG quality

### Photography Guidelines:
- **Natural Expressions**: Genuine, happy, satisfied expressions
- **Good Lighting**: Well-lit, clear photos
- **Professional Quality**: High-resolution, clear images
- **Diverse Representation**: Include patients of various ages, ethnicities
- **Consistent Style**: Similar framing and background across photos

### Privacy and Legal Considerations:
- **Consent Required**: Always obtain written consent for patient photos
- **HIPAA Compliance**: Ensure all patient photos comply with privacy laws
- **Model Releases**: Have signed model releases for all patient photos
- **Anonymous Options**: Offer anonymous testimonials with stock photos
- **Regular Updates**: Remove outdated testimonials and photos

### Stock Photo Guidelines:
- Use diverse, authentic-looking stock photos when patient photos unavailable
- Avoid overly polished or "fake" looking stock images
- Choose images that represent your actual patient demographic
- Ensure stock photos match the tone and professionalism of your practice

### Naming Convention:
- Patient photos: `patient-firstname-lastname.jpg` (with permission)
- Anonymous: `testimonial-[number].jpg`
- Video thumbnails: `video-testimonial-[number].jpg`

### Accessibility:
- Include descriptive alt text for all images
- Use patient name or description in alt text
- Example: `alt="Sarah D., satisfied dental patient"`

Replace this README with your actual testimonial images.
