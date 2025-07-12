// Health & Wellness Theme Main JavaScript

(function($) {
    'use strict';

    // Document ready
    $(document).ready(function() {
        
        // Initialize components
        initBackToTop();
        initSmoothScrolling();
        initFormValidation();
        initLazyLoading();
        initAnimations();
        initNavigation();
        initModals();
        
        console.log('Health & Wellness Theme loaded successfully');
    });

    // Back to top button
    function initBackToTop() {
        const backToTopButton = $('#back-to-top');
        
        if (backToTopButton.length) {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 300) {
                    backToTopButton.fadeIn();
                } else {
                    backToTopButton.fadeOut();
                }
            });

            backToTopButton.click(function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        $('a[href*="#"]:not([href="#"])').click(function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if (target.length) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 800);
                }
            }
        });
    }

    // Form validation and submission
    function initFormValidation() {
        // Contact form
        $('.contact-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const formData = form.serialize();
            
            // Basic validation
            let isValid = true;
            form.find('[required]').each(function() {
                if (!$(this).val().trim()) {
                    isValid = false;
                    $(this).addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid');
                }
            });
            
            // Email validation
            const emailField = form.find('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.length && !emailRegex.test(emailField.val())) {
                isValid = false;
                emailField.addClass('is-invalid');
            }
            
            if (isValid) {
                submitForm(form, formData);
            } else {
                showAlert('Please fill in all required fields correctly.', 'danger');
            }
        });

        // Appointment form
        $('.appointment-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const formData = form.serialize();
            
            // Validation
            let isValid = true;
            form.find('[required]').each(function() {
                if (!$(this).val().trim()) {
                    isValid = false;
                    $(this).addClass('is-invalid');
                } else {
                    $(this).removeClass('is-invalid');
                }
            });
            
            if (isValid) {
                submitForm(form, formData);
            } else {
                showAlert('Please fill in all required fields.', 'danger');
            }
        });

        // Newsletter form
        $('.newsletter-form').on('submit', function(e) {
            e.preventDefault();
            
            const form = $(this);
            const email = form.find('input[type="email"]').val();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(email)) {
                submitForm(form, form.serialize());
            } else {
                showAlert('Please enter a valid email address.', 'danger');
            }
        });
    }

    // Form submission handler
    function submitForm(form, formData) {
        const submitButton = form.find('button[type="submit"]');
        const originalText = submitButton.text();
        
        // Show loading state
        submitButton.prop('disabled', true).text('Sending...');
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(function() {
            showAlert('Thank you! Your message has been sent successfully.', 'success');
            form[0].reset();
            submitButton.prop('disabled', false).text(originalText);
        }, 2000);
    }

    // Show alert messages
    function showAlert(message, type) {
        const alert = $(`
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);
        
        // Find the best place to show the alert
        const target = $('.alert-container').length ? $('.alert-container') : $('main').first();
        target.prepend(alert);
        
        // Auto-hide after 5 seconds
        setTimeout(function() {
            alert.fadeOut();
        }, 5000);
    }

    // Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Animations on scroll
    function initAnimations() {
        if ('IntersectionObserver' in window) {
            const animateObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                animateObserver.observe(el);
            });
        }
    }

    // Navigation enhancements
    function initNavigation() {
        // Mobile menu toggle
        $('.navbar-toggler').on('click', function() {
            $(this).toggleClass('active');
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.navbar').length) {
                $('.navbar-collapse').removeClass('show');
                $('.navbar-toggler').removeClass('active');
            }
        });

        // Enhance dropdown functionality
        $('.dropdown-toggle').on('click', function(e) {
            e.preventDefault();
            const $dropdown = $(this).next('.dropdown-menu');
            
            // Close other dropdowns
            $('.dropdown-menu').not($dropdown).removeClass('show');
            
            // Toggle current dropdown
            $dropdown.toggleClass('show');
        });

        // Close dropdown when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.dropdown').length) {
                $('.dropdown-menu').removeClass('show');
            }
        });

        // Prevent dropdown from closing when clicking inside
        $('.dropdown-menu').on('click', function(e) {
            e.stopPropagation();
        });

        // Highlight current page in navigation
        const currentPath = window.location.pathname;
        $('.navbar-nav .nav-link').each(function() {
            const href = $(this).attr('href');
            if (href && currentPath.includes(href) && href !== '/') {
                $(this).addClass('active');
            }
        });
    }

    // Modal functionality
    function initModals() {
        // Image modal for gallery
        $('.gallery-image').on('click', function(e) {
            e.preventDefault();
            const imageSrc = $(this).attr('href') || $(this).find('img').attr('src');
            const imageAlt = $(this).find('img').attr('alt') || 'Gallery Image';
            
            showImageModal(imageSrc, imageAlt);
        });
    }

    // Show image in modal
    function showImageModal(src, alt) {
        const modal = $(`
            <div class="modal fade" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${alt}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body text-center">
                            <img src="${src}" alt="${alt}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        `);
        
        $('body').append(modal);
        modal.modal('show');
        
        modal.on('hidden.bs.modal', function() {
            modal.remove();
        });
    }

    // Utility functions
    window.HealthWellnessTheme = {
        showAlert: showAlert,
        showImageModal: showImageModal
    };

    // Window resize handler
    $(window).on('resize', function() {
        // Handle responsive adjustments
        if ($(window).width() > 991) {
            $('.navbar-collapse').removeClass('show');
        }
    });

    // Window load handler
    $(window).on('load', function() {
        // Hide loading spinner if exists
        $('.page-loading').fadeOut();
        
        // Initialize any components that need full page load
        initAdvancedFeatures();
    });

    // Advanced features after page load
    function initAdvancedFeatures() {
        // Initialize any third-party plugins here
        
        // Example: Initialize carousel if Swiper is loaded
        if (typeof Swiper !== 'undefined') {
            const testimonialSwiper = new Swiper('.testimonials-carousel', {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
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

        // Example: Initialize AOS (Animate On Scroll) if loaded
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100
            });
        }
    }

})(jQuery);
