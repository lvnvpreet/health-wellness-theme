/**
 * Slider functionality for Health & Wellness theme
 * Handles hero sliders, testimonial carousels, and image galleries
 */

class HealthWellnessSlider {
    constructor() {
        this.init();
    }

    init() {
        // Initialize all sliders when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeSliders();
            });
        } else {
            this.initializeSliders();
        }
    }

    initializeSliders() {
        this.initHeroSlider();
        this.initTestimonialSlider();
        this.initGallerySlider();
        this.initTeamSlider();
        this.initBeforeAfterSlider();
    }

    // Hero Slider
    initHeroSlider() {
        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider && typeof Swiper !== 'undefined') {
            new Swiper('.hero-slider', {
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.hero-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.hero-next',
                    prevEl: '.hero-prev',
                },
                on: {
                    slideChange: function() {
                        // Add animation classes to slide content
                        const activeSlide = this.slides[this.activeIndex];
                        const content = activeSlide.querySelector('.hero-content');
                        if (content) {
                            content.style.animation = 'none';
                            setTimeout(() => {
                                content.style.animation = 'fadeInUp 0.8s ease-out';
                            }, 100);
                        }
                    }
                }
            });
        }
    }

    // Testimonial Slider
    initTestimonialSlider() {
        const testimonialSlider = document.querySelector('.testimonials-slider');
        if (testimonialSlider && typeof Swiper !== 'undefined') {
            new Swiper('.testimonials-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.testimonials-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });
        }
    }

    // Gallery Slider
    initGallerySlider() {
        const gallerySlider = document.querySelector('.gallery-slider');
        if (gallerySlider && typeof Swiper !== 'undefined') {
            new Swiper('.gallery-slider', {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.gallery-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.gallery-next',
                    prevEl: '.gallery-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    }
                }
            });
        }
    }

    // Team Slider
    initTeamSlider() {
        const teamSlider = document.querySelector('.team-slider');
        if (teamSlider && typeof Swiper !== 'undefined') {
            new Swiper('.team-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: '.team-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.team-next',
                    prevEl: '.team-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }
            });
        }
    }

    // Before/After Slider
    initBeforeAfterSlider() {
        const beforeAfterSliders = document.querySelectorAll('.before-after-slider');
        beforeAfterSliders.forEach(slider => {
            const handle = slider.querySelector('.ba-handle');
            const beforeImage = slider.querySelector('.ba-before');
            const afterImage = slider.querySelector('.ba-after');
            
            if (handle && beforeImage && afterImage) {
                let isDragging = false;
                
                const updateSlider = (x) => {
                    const rect = slider.getBoundingClientRect();
                    const position = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
                    
                    beforeImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
                    handle.style.left = `${position}%`;
                };
                
                // Mouse events
                handle.addEventListener('mousedown', (e) => {
                    isDragging = true;
                    e.preventDefault();
                });
                
                document.addEventListener('mousemove', (e) => {
                    if (isDragging) {
                        updateSlider(e.clientX);
                    }
                });
                
                document.addEventListener('mouseup', () => {
                    isDragging = false;
                });
                
                // Touch events
                handle.addEventListener('touchstart', (e) => {
                    isDragging = true;
                    e.preventDefault();
                });
                
                document.addEventListener('touchmove', (e) => {
                    if (isDragging) {
                        updateSlider(e.touches[0].clientX);
                    }
                });
                
                document.addEventListener('touchend', () => {
                    isDragging = false;
                });
                
                // Click to position
                slider.addEventListener('click', (e) => {
                    if (!isDragging) {
                        updateSlider(e.clientX);
                    }
                });
            }
        });
    }

    // Fallback simple slider for when Swiper is not available
    initFallbackSlider() {
        const sliders = document.querySelectorAll('[data-slider]');
        sliders.forEach(slider => {
            const slides = slider.querySelectorAll('.slide');
            const prevBtn = slider.querySelector('.slider-prev');
            const nextBtn = slider.querySelector('.slider-next');
            let currentSlide = 0;
            
            const showSlide = (index) => {
                slides.forEach((slide, i) => {
                    slide.style.display = i === index ? 'block' : 'none';
                });
            };
            
            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            };
            
            const prevSlide = () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            };
            
            if (slides.length > 0) {
                showSlide(0);
                
                if (nextBtn) nextBtn.addEventListener('click', nextSlide);
                if (prevBtn) prevBtn.addEventListener('click', prevSlide);
                
                // Auto-advance
                setInterval(nextSlide, 5000);
            }
        });
    }
}

// Initialize slider when the script loads
new HealthWellnessSlider();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HealthWellnessSlider;
}
