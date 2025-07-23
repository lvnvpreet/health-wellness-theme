// Health & Wellness Theme - Enhanced Main JavaScript

(function($) {
    'use strict';

    // Check if jQuery is loaded
    if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
        console.error('jQuery is required for this theme to work properly');
        return;
    }

    // Global variables
    const $window = $(window);
    const $document = $(document);
    const $body = $('body');

    // Theme settings
    const theme = {
        breakpoints: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1400
        },
        colors: {
            primary: '#10b981',
            primaryDark: '#059669',
            primaryLight: '#34d399',
            secondary: '#64748b',
            accent: '#06b6d4'
        }
    };

    // Document ready
    $document.ready(function() {
        // Prevent auto-scroll on page load
        preventAutoScroll();
        initializeTheme();
    });

    // Window load - Additional protection
    $window.on('load', function() {
        // Ensure we stay at top if no specific scroll target
        if (window.pageYOffset === 0) {
            window.scrollTo(0, 0);
        }
    });

    // Prevent unwanted auto-scrolling
    function preventAutoScroll() {
        // Disable scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        // Force scroll to top on page load
        window.scrollTo(0, 0);
        
        // Remove any hash from URL that might trigger auto-scroll
        if (window.location.hash && window.location.hash !== '#') {
            const cleanUrl = window.location.href.split('#')[0];
            history.replaceState(null, null, cleanUrl);
        }
    }

    // Initialize all theme components
    function initializeTheme() {
        // Core functionality
        initNavigation();
        initBackToTop();
        initSmoothScrolling();
        initLazyLoading();
        
        // Forms
        initFormValidation();
        initFormEnhancements();
        initPhoneFormatting();
        
        // UI Components
        initAnimations();
        initModals();
        initTooltips();
        initPopovers();
        initFAQAccordion();
        
        // Page-specific
        initHeroSlider();
        initTestimonialCarousel();
        initStatsCounter();
        initGallery();
        
        // Utilities
        initAccessibility();
        initAnalytics();
        
        console.log('Health & Wellness Theme initialized successfully');
    }

    // Navigation functionality
    function initNavigation() {
        const $navbar = $('.navbar');
        const $navbarToggler = $('.navbar-toggler');
        const $navLinks = $('.navbar-nav .nav-link');
        
        // Sticky navigation
        let lastScroll = 0;
        $window.on('scroll', function() {
            const currentScroll = $window.scrollTop();
            
            if (currentScroll > 100) {
                $navbar.addClass('navbar-scrolled');
                
                // Hide/show on scroll
                if (currentScroll > lastScroll && currentScroll > 300) {
                    $navbar.addClass('navbar-hidden');
                } else {
                    $navbar.removeClass('navbar-hidden');
                }
            } else {
                $navbar.removeClass('navbar-scrolled navbar-hidden');
            }
            
            lastScroll = currentScroll;
        });
        
        // Mobile menu
        $navbarToggler.on('click', function() {
            $body.toggleClass('mobile-menu-open');
        });
        
        // Close mobile menu on link click
        $navLinks.on('click', function() {
            if ($window.width() < theme.breakpoints.lg) {
                $navbarToggler.click();
            }
        });
        
        // Dropdown enhancements
        $('.dropdown').on('mouseenter', function() {
            if ($window.width() >= theme.breakpoints.lg) {
                $(this).addClass('show');
                $(this).find('.dropdown-menu').addClass('show');
            }
        }).on('mouseleave', function() {
            if ($window.width() >= theme.breakpoints.lg) {
                $(this).removeClass('show');
                $(this).find('.dropdown-menu').removeClass('show');
            }
        });
        
        // Active link highlighting
        highlightActiveNavLink();
    }

    // Highlight active navigation link
    function highlightActiveNavLink() {
        const currentPath = window.location.pathname;
        $('.navbar-nav .nav-link').each(function() {
            const href = $(this).attr('href');
            if (href && currentPath.includes(href) && href !== '/') {
                $(this).addClass('active');
                $(this).closest('.dropdown').find('.dropdown-toggle').addClass('active');
            }
        });
    }

    // Back to top button
    function initBackToTop() {
        const $backToTop = $('#back-to-top');
        
        $window.on('scroll', function() {
            if ($window.scrollTop() > 300) {
                $backToTop.fadeIn();
            } else {
                $backToTop.fadeOut();
            }
        });
        
        $backToTop.on('click', function(e) {
            e.preventDefault();
            
            // Enable smooth scrolling temporarily
            $('html').addClass('smooth-scroll-enabled');
            
            $('html, body').animate({
                scrollTop: 0
            }, 800, 'easeInOutExpo', function() {
                // Disable smooth scrolling after animation
                setTimeout(() => {
                    $('html').removeClass('smooth-scroll-enabled');
                }, 100);
            });
        });
    }

    // Smooth scrolling - Only for user clicks
    function initSmoothScrolling() {
        $('a[href*="#"]:not([href="#"])').on('click', function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if (target.length) {
                    e.preventDefault();
                    
                    // Enable smooth scrolling temporarily
                    $('html').addClass('smooth-scroll-enabled');
                    
                    const offset = $('.navbar').outerHeight() || 0;
                    
                    $('html, body').animate({
                        scrollTop: target.offset().top - offset - 20
                    }, 800, 'easeInOutExpo', function() {
                        // Disable smooth scrolling after animation
                        setTimeout(() => {
                            $('html').removeClass('smooth-scroll-enabled');
                        }, 100);
                    });
                    
                    // Update URL without triggering scroll
                    if (history.replaceState) {
                        history.replaceState(null, null, this.hash);
                    }
                }
            }
        });
    }

    // Lazy loading
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px'
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Form validation
    function initFormValidation() {
        // Bootstrap validation
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
            }, false);
        });
        
        // Custom validation
        $('.contact-form, .appointment-form').on('submit', function(e) {
            e.preventDefault();
            const $form = $(this);
            
            if (this.checkValidity()) {
                handleFormSubmission($form);
            }
        });
    }

    // Handle form submission
    function handleFormSubmission($form) {
        const $submitBtn = $form.find('[type="submit"]');
        const originalText = $submitBtn.html();
        
        // Show loading state
        $submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Sending...');
        $form.addClass('loading');
        
        // Simulate API call (replace with actual endpoint)
        setTimeout(() => {
            // Success
            $form[0].reset();
            $form.removeClass('was-validated loading');
            $submitBtn.prop('disabled', false).html(originalText);
            
            // Show success message
            const $success = $form.find('.alert-success');
            $success.removeClass('d-none').hide().fadeIn();
            
            // Hide after 5 seconds
            setTimeout(() => {
                $success.fadeOut();
            }, 5000);
            
            // Track conversion
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'event_category': 'form',
                    'event_label': $form.hasClass('appointment-form') ? 'appointment' : 'contact'
                });
            }
        }, 2000);
    }

    // Form enhancements
    function initFormEnhancements() {
        // Floating labels
        $('.form-control, .form-select').on('focus blur', function(e) {
            $(this).closest('.form-group').toggleClass('focused', e.type === 'focus');
        });
        
        // Character counter
        $('textarea[maxlength]').each(function() {
            const $textarea = $(this);
            const maxLength = $textarea.attr('maxlength');
            const $counter = $(`<div class="character-counter text-muted small mt-1">0 / ${maxLength}</div>`);
            
            $textarea.after($counter);
            
            $textarea.on('input', function() {
                const length = this.value.length;
                $counter.text(`${length} / ${maxLength}`);
                
                if (length > maxLength * 0.8) {
                    $counter.addClass('text-warning');
                } else {
                    $counter.removeClass('text-warning');
                }
            });
        });
    }

    // Phone number formatting
    function initPhoneFormatting() {
        $('input[type="tel"]').on('input', function() {
            let value = $(this).val().replace(/\D/g, '');
            
            if (value.length >= 10) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 6) {
                value = value.replace(/(\d{3})(\d{3})/, '($1) $2-');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{3})/, '($1) ');
            }
            
            $(this).val(value);
        });
    }

    // Animations
    function initAnimations() {
        // AOS-like animations
        if ('IntersectionObserver' in window) {
            const animateElements = document.querySelectorAll('[data-aos]');
            
            const animateObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const animation = element.dataset.aos;
                        const delay = element.dataset.aosDelay || 0;
                        
                        setTimeout(() => {
                            element.classList.add('aos-animate', `aos-${animation}`);
                        }, delay);
                        
                        animateObserver.unobserve(element);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });
            
            animateElements.forEach(el => {
                animateObserver.observe(el);
            });
        }
    }

    // Hero slider
    function initHeroSlider() {
        if ($('.hero-slider').length && typeof Swiper !== 'undefined') {
            new Swiper('.hero-slider', {
                effect: 'fade',
                speed: 1000,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        }
    }

    // Testimonial carousel
    function initTestimonialCarousel() {
        if ($('.testimonials-carousel').length && typeof Swiper !== 'undefined') {
            new Swiper('.testimonials-carousel', {
                slidesPerView: 1,
                spaceBetween: 30,
                speed: 800,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }
            });
        }
    }

    // Stats counter
    function initStatsCounter() {
        // Handled in stats-section.html inline script
        // This is just a placeholder for additional functionality if needed
    }

    // Gallery
    function initGallery() {
        $('.gallery-image').on('click', function(e) {
            e.preventDefault();
            const src = $(this).attr('href') || $(this).find('img').attr('src');
            const alt = $(this).find('img').attr('alt') || 'Gallery Image';
            
            showImageModal(src, alt);
        });
    }

    // Image modal
    function showImageModal(src, alt) {
        const modalHtml = `
            <div class="modal fade" id="imageModal" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${alt}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body text-center p-0">
                            <img src="${src}" alt="${alt}" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $body.append(modalHtml);
        const $modal = $('#imageModal');
        const modal = new bootstrap.Modal($modal[0]);
        
        modal.show();
        
        $modal.on('hidden.bs.modal', function() {
            $modal.remove();
        });
    }

    // Modals
    function initModals() {
        // Video modals
        $('.video-trigger').on('click', function(e) {
            e.preventDefault();
            const videoUrl = $(this).data('video');
            if (videoUrl) {
                showVideoModal(videoUrl);
            }
        });
    }

    // Video modal
    function showVideoModal(url) {
        // Extract video ID from YouTube URL
        const videoId = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/)[1];
        
        const modalHtml = `
            <div class="modal fade" id="videoModal" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        $body.append(modalHtml);
        const $modal = $('#videoModal');
        const modal = new bootstrap.Modal($modal[0]);
        
        modal.show();
        
        $modal.on('hidden.bs.modal', function() {
            $modal.remove();
        });
    }

    // Tooltips
    function initTooltips() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }

    // Popovers
    function initPopovers() {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }

    // FAQ Accordion
    function initFAQAccordion() {
        // Handle both Bootstrap native accordions and custom implementations
        const accordions = document.querySelectorAll('.accordion');
        
        accordions.forEach(function(accordion) {
            const accordionItems = accordion.querySelectorAll('.accordion-item');
            
            accordionItems.forEach(function(item) {
                const button = item.querySelector('.accordion-button');
                const collapse = item.querySelector('.accordion-collapse');
                
                if (button && collapse) {
                    // Ensure Bootstrap data attributes are properly set
                    if (!button.hasAttribute('data-bs-toggle')) {
                        button.setAttribute('data-bs-toggle', 'collapse');
                    }
                    
                    // Add click event handler as fallback
                    button.addEventListener('click', function(e) {
                        // Only handle if Bootstrap hasn't already handled it
                        if (!window.bootstrap || !bootstrap.Collapse) {
                            e.preventDefault();
                            
                            const isExpanded = this.getAttribute('aria-expanded') === 'true';
                            const targetId = this.getAttribute('data-bs-target') || this.getAttribute('href');
                            const targetElement = document.querySelector(targetId);
                            
                            if (targetElement) {
                                if (isExpanded) {
                                    // Collapse
                                    targetElement.classList.remove('show');
                                    this.classList.add('collapsed');
                                    this.setAttribute('aria-expanded', 'false');
                                } else {
                                    // Expand
                                    // Close other items in the same accordion first
                                    const parentAccordion = this.closest('.accordion');
                                    if (parentAccordion) {
                                        const otherItems = parentAccordion.querySelectorAll('.accordion-collapse.show');
                                        otherItems.forEach(function(otherItem) {
                                            if (otherItem !== targetElement) {
                                                otherItem.classList.remove('show');
                                                const otherButton = parentAccordion.querySelector(`[data-bs-target="#${otherItem.id}"], [href="#${otherItem.id}"]`);
                                                if (otherButton) {
                                                    otherButton.classList.add('collapsed');
                                                    otherButton.setAttribute('aria-expanded', 'false');
                                                }
                                            }
                                        });
                                    }
                                    
                                    targetElement.classList.add('show');
                                    this.classList.remove('collapsed');
                                    this.setAttribute('aria-expanded', 'true');
                                }
                            }
                        }
                    });
                }
            });
        });
        
        // Initialize Bootstrap accordions if available
        if (window.bootstrap && bootstrap.Collapse) {
            console.log('Bootstrap accordions initialized');
        } else {
            console.log('Using fallback accordion functionality');
        }
    }

    // Accessibility
    function initAccessibility() {
        // Skip link
        $('.skip-link').on('click', function(e) {
            e.preventDefault();
            const target = $($(this).attr('href'));
            if (target.length) {
                target.attr('tabindex', '-1').focus();
            }
        });
        
        // Keyboard navigation
        $document.on('keydown', function(e) {
            // ESC key
            if (e.keyCode === 27) {
                // Close mobile menu
                if ($body.hasClass('mobile-menu-open')) {
                    $('.navbar-toggler').click();
                }
                // Close modals
                $('.modal.show').modal('hide');
            }
        });
        
        // Focus trap for modals
        $document.on('shown.bs.modal', '.modal', function() {
            $(this).find('[autofocus]').focus();
        });
    }

    // Analytics
    function initAnalytics() {
        // Track outbound links
        $('a[href^="http"]:not([href*="' + window.location.hostname + '"])').on('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'outbound',
                    'event_label': this.href
                });
            }
        });
        
        // Track file downloads
        $('a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"], a[href$=".xls"], a[href$=".xlsx"]').on('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'download', {
                    'event_category': 'file',
                    'event_label': this.href
                });
            }
        });
        
        // Track phone clicks
        $('a[href^="tel:"]').on('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'contact',
                    'event_label': 'phone'
                });
            }
        });
    }

    // Window resize handler
    let resizeTimer;
    $window.on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Handle resize events
            if ($window.width() >= theme.breakpoints.lg) {
                $body.removeClass('mobile-menu-open');
                $('.navbar-collapse').removeClass('show');
            }
        }, 250);
    });

    // Utility functions
    window.HealthWellnessTheme = {
        showAlert: function(message, type = 'success') {
            const alertHtml = `
                <div class="alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3" style="z-index: 9999;">
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            $body.append(alertHtml);
            
            setTimeout(() => {
                $('.alert').fadeOut(() => {
                    $('.alert').remove();
                });
            }, 5000);
        },
        
        getCookie: function(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },
        
        setCookie: function(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = `expires=${date.toUTCString()}`;
            document.cookie = `${name}=${value};${expires};path=/`;
        }
    };

    // Add CSS for animations
    const mainThemeStyles = document.createElement('style');
    mainThemeStyles.textContent = `
        /* Navigation transitions */
        .navbar {
            transition: all 0.3s ease;
        }
        
        .navbar-scrolled {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-hidden {
            transform: translateY(-100%);
        }
        
        /* AOS-like animations */
        [data-aos] {
            opacity: 0;
            transition-property: opacity, transform;
            transition-duration: 1s;
        }
        
        .aos-animate.aos-fade-up {
            opacity: 1;
            transform: translateY(0);
        }
        
        [data-aos="fade-up"] {
            transform: translateY(30px);
        }
        
        .aos-animate.aos-fade-down {
            opacity: 1;
            transform: translateY(0);
        }
        
        [data-aos="fade-down"] {
            transform: translateY(-30px);
        }
        
        .aos-animate.aos-fade-left {
            opacity: 1;
            transform: translateX(0);
        }
        
        [data-aos="fade-left"] {
            transform: translateX(30px);
        }
        
        .aos-animate.aos-fade-right {
            opacity: 1;
            transform: translateX(0);
        }
        
        [data-aos="fade-right"] {
            transform: translateX(-30px);
        }
        
        .aos-animate.aos-zoom-in {
            opacity: 1;
            transform: scale(1);
        }
        
        [data-aos="zoom-in"] {
            transform: scale(0.9);
        }
        
        .aos-animate.aos-flip-left {
            opacity: 1;
            transform: rotateY(0);
        }
        
        [data-aos="flip-left"] {
            transform: rotateY(-90deg);
        }
        
        /* Loading states */
        img:not(.loaded) {
            filter: blur(5px);
            transition: filter 0.3s;
        }
        
        img.loaded {
            filter: blur(0);
        }
        
        /* Mobile menu */
        body.mobile-menu-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(mainThemeStyles);

})(jQuery);