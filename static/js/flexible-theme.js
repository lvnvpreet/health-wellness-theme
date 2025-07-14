/**
 * Flexible Theme JavaScript
 * Enhances the adaptive behavior of the theme
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        
        // Image Loading and Error Handling
        function setupImageHandling() {
            const images = document.querySelectorAll('img[data-fallback]');
            
            images.forEach(img => {
                img.addEventListener('error', function() {
                    // Create fallback element
                    const fallback = document.createElement('div');
                    fallback.className = 'img-fallback';
                    fallback.innerHTML = this.dataset.fallback || '<i class="fas fa-image"></i>';
                    
                    // Replace image with fallback
                    this.parentNode.replaceChild(fallback, this);
                });
            });
        }
        
        // Lazy Loading for Images
        function setupLazyLoading() {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('image-placeholder');
                            imageObserver.unobserve(img);
                        }
                    });
                });
                
                document.querySelectorAll('img[data-src]').forEach(img => {
                    img.classList.add('image-placeholder');
                    imageObserver.observe(img);
                });
            }
        }
        
        // Enhanced Card Interactions
        function setupCardInteractions() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                // Add keyboard navigation
                card.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        const link = this.querySelector('a');
                        if (link) {
                            link.click();
                        }
                    }
                });
                
                // Add focus indicators
                card.setAttribute('tabindex', '0');
            });
        }
        
        // Adaptive Typography
        function setupAdaptiveTypography() {
            const noImageCards = document.querySelectorAll('.no-image');
            
            noImageCards.forEach(card => {
                const title = card.querySelector('.card-title, h1, h2, h3, h4, h5, h6');
                const content = card.querySelector('.card-text, p');
                
                if (title && content) {
                    // Adjust typography based on content length
                    const contentLength = content.textContent.length;
                    if (contentLength > 200) {
                        title.style.fontSize = '1.2rem';
                    } else if (contentLength < 100) {
                        title.style.fontSize = '1.5rem';
                    }
                }
            });
        }
        
        // Theme Color Adaptation
        function setupThemeAdaptation() {
            // Check for user's color scheme preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode-preferred');
            }
            
            // Listen for changes in color scheme
            if (window.matchMedia) {
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                    if (e.matches) {
                        document.body.classList.add('dark-mode-preferred');
                    } else {
                        document.body.classList.remove('dark-mode-preferred');
                    }
                });
            }
        }
        
        // Performance Monitoring
        function setupPerformanceOptimizations() {
            // Optimize animations based on device capabilities
            const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
            
            if (isReducedMotion || isLowEndDevice) {
                document.body.classList.add('reduced-animations');
            }
            
            // Optimize hover effects for touch devices
            if ('ontouchstart' in window) {
                document.body.classList.add('touch-device');
            }
        }
        
        // Accessibility Enhancements
        function setupAccessibilityEnhancements() {
            // Add skip links
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-link';
            skipLink.textContent = 'Skip to main content';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 6px;
                background: var(--primary-color);
                color: white;
                padding: 8px;
                text-decoration: none;
                z-index: 1000;
                border-radius: 0 0 4px 4px;
            `;
            
            skipLink.addEventListener('focus', function() {
                this.style.top = '0';
            });
            
            skipLink.addEventListener('blur', function() {
                this.style.top = '-40px';
            });
            
            document.body.insertBefore(skipLink, document.body.firstChild);
            
            // Ensure main content has proper landmark
            const mainContent = document.querySelector('main') || document.querySelector('#main') || document.querySelector('.main-content');
            if (mainContent) {
                mainContent.id = 'main-content';
                mainContent.setAttribute('role', 'main');
            }
            
            // Add ARIA labels to cards without images
            document.querySelectorAll('.no-image .card').forEach(card => {
                const title = card.querySelector('.card-title, h1, h2, h3, h4, h5, h6');
                if (title) {
                    card.setAttribute('aria-label', `${title.textContent} - Content card`);
                }
            });
        }
        
        // Form Enhancements
        function setupFormEnhancements() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                // Add loading states
                form.addEventListener('submit', function() {
                    const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
                    if (submitBtn) {
                        submitBtn.style.position = 'relative';
                        submitBtn.innerHTML += '<span class="loading-spinner"></span>';
                        submitBtn.disabled = true;
                    }
                });
                
                // Enhanced form validation
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    input.addEventListener('invalid', function(e) {
                        e.preventDefault();
                        this.classList.add('error');
                        
                        // Create custom error message
                        let errorMsg = this.parentNode.querySelector('.error-message');
                        if (!errorMsg) {
                            errorMsg = document.createElement('div');
                            errorMsg.className = 'error-message';
                            this.parentNode.appendChild(errorMsg);
                        }
                        errorMsg.textContent = this.validationMessage;
                    });
                    
                    input.addEventListener('input', function() {
                        this.classList.remove('error');
                        const errorMsg = this.parentNode.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.remove();
                        }
                    });
                });
            });
        }
        
        // Initialize all enhancements
        setupImageHandling();
        setupLazyLoading();
        setupCardInteractions();
        setupAdaptiveTypography();
        setupThemeAdaptation();
        setupPerformanceOptimizations();
        setupAccessibilityEnhancements();
        setupFormEnhancements();
        
        // Animate elements on scroll (for non-reduced motion users)
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.card, .hero-section, .stats-section').forEach(el => {
                observer.observe(el);
            });
        }
    });

    // Add CSS for loading spinner and animations
    const flexibleThemeStyles = document.createElement('style');
    flexibleThemeStyles.textContent = `
        .loading-spinner {
            display: inline-block;
            width: 12px;
            height: 12px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
            margin-left: 8px;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        .error-message {
            color: var(--danger-color);
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
        
        .input.error {
            border-color: var(--danger-color) !important;
        }
        
        .skip-link:focus {
            top: 0 !important;
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .reduced-animations * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        
        .touch-device .card:hover {
            transform: none;
        }
    `;
    document.head.appendChild(flexibleThemeStyles);
})();