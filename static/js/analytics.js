// Analytics and Tracking for Health & Wellness Theme

(function() {
    'use strict';

    // Google Analytics 4 Configuration
    function initGA4() {
        // Check if gtag is available
        if (typeof gtag === 'function') {
            
            // Track page views
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href
            });

            // Track scroll depth
            trackScrollDepth();
            
            // Track file downloads
            trackFileDownloads();
            
            // Track external links
            trackExternalLinks();
            
            // Track form submissions
            trackFormSubmissions();
            
            // Track appointment requests
            trackAppointmentRequests();
        }
    }

    // Track scroll depth
    function trackScrollDepth() {
        const scrollDepths = [25, 50, 75, 100];
        const trackedDepths = new Set();

        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );

            scrollDepths.forEach(depth => {
                if (scrollPercent >= depth && !trackedDepths.has(depth)) {
                    trackedDepths.add(depth);
                    
                    if (typeof gtag === 'function') {
                        gtag('event', 'scroll', {
                            event_category: 'engagement',
                            event_label: depth + '%',
                            value: depth
                        });
                    }
                }
            });
        });
    }

    // Track file downloads
    function trackFileDownloads() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            // Check if it's a file download
            const fileExtensions = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|mp3|mp4|avi)$/i;
            if (fileExtensions.test(href)) {
                if (typeof gtag === 'function') {
                    gtag('event', 'file_download', {
                        event_category: 'downloads',
                        event_label: href,
                        value: 1
                    });
                }
            }
        });
    }

    // Track external links
    function trackExternalLinks() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            // Check if it's an external link
            if (href.startsWith('http') && !href.includes(window.location.hostname)) {
                if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                        event_category: 'external_links',
                        event_label: href,
                        value: 1
                    });
                }
            }
        });
    }

    // Track form submissions
    function trackFormSubmissions() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            const formType = getFormType(form);

            if (typeof gtag === 'function') {
                gtag('event', 'form_submit', {
                    event_category: 'forms',
                    event_label: formType,
                    value: 1
                });
            }
        });
    }

    // Get form type based on classes or form content
    function getFormType(form) {
        if (form.classList.contains('contact-form')) return 'contact';
        if (form.classList.contains('appointment-form')) return 'appointment';
        if (form.classList.contains('newsletter-form')) return 'newsletter';
        if (form.querySelector('input[name="appointment"]')) return 'appointment';
        if (form.querySelector('input[name="newsletter"]')) return 'newsletter';
        return 'general';
    }

    // Track appointment requests (high-value events)
    function trackAppointmentRequests() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            
            if (form.classList.contains('appointment-form') || 
                form.querySelector('input[name="appointment"]')) {
                
                if (typeof gtag === 'function') {
                    gtag('event', 'generate_lead', {
                        event_category: 'appointments',
                        event_label: 'appointment_request',
                        value: 100 // Assign a value to appointment requests
                    });
                }
            }
        });

        // Track appointment CTA clicks
        document.addEventListener('click', function(e) {
            const element = e.target.closest('a, button');
            if (!element) return;

            const text = element.textContent.toLowerCase();
            const href = element.getAttribute('href') || '';

            if (text.includes('appointment') || text.includes('book') || 
                href.includes('contact') || href.includes('appointment')) {
                
                if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                        event_category: 'cta',
                        event_label: 'appointment_cta',
                        value: 50
                    });
                }
            }
        });
    }

    // Track phone number clicks
    function trackPhoneCalls() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (href && href.startsWith('tel:')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'phone_call', {
                        event_category: 'contact',
                        event_label: href.replace('tel:', ''),
                        value: 75
                    });
                }
            }
        });
    }

    // Track email clicks
    function trackEmailClicks() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (href && href.startsWith('mailto:')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'email_click', {
                        event_category: 'contact',
                        event_label: href.replace('mailto:', ''),
                        value: 25
                    });
                }
            }
        });
    }

    // Track video engagement
    function trackVideoEngagement() {
        // YouTube video tracking
        document.addEventListener('click', function(e) {
            const iframe = e.target.closest('iframe');
            if (iframe && iframe.src.includes('youtube.com')) {
                if (typeof gtag === 'function') {
                    gtag('event', 'video_play', {
                        event_category: 'video',
                        event_label: iframe.src,
                        value: 10
                    });
                }
            }
        });
    }

    // Track user engagement time
    function trackEngagementTime() {
        let startTime = Date.now();
        let isActive = true;
        let totalTime = 0;

        // Track when user becomes inactive
        let inactivityTimer;
        
        function resetInactivityTimer() {
            clearTimeout(inactivityTimer);
            if (!isActive) {
                isActive = true;
                startTime = Date.now();
            }
            
            inactivityTimer = setTimeout(() => {
                if (isActive) {
                    totalTime += Date.now() - startTime;
                    isActive = false;
                }
            }, 30000); // 30 seconds of inactivity
        }

        // Track mouse movement, clicks, and scrolling
        ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, resetInactivityTimer, true);
        });

        // Send engagement time when user leaves
        window.addEventListener('beforeunload', function() {
            if (isActive) {
                totalTime += Date.now() - startTime;
            }
            
            if (totalTime > 0 && typeof gtag === 'function') {
                gtag('event', 'timing_complete', {
                    name: 'page_engagement',
                    value: Math.round(totalTime / 1000) // Convert to seconds
                });
            }
        });
    }

    // Track search queries (if search functionality exists)
    function trackSearchQueries() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            const searchInput = form.querySelector('input[type="search"], input[name="q"], input[name="search"]');
            
            if (searchInput) {
                const query = searchInput.value.trim();
                if (query && typeof gtag === 'function') {
                    gtag('event', 'search', {
                        search_term: query,
                        event_category: 'site_search'
                    });
                }
            }
        });
    }

    // Initialize all tracking when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initGA4();
        trackPhoneCalls();
        trackEmailClicks();
        trackVideoEngagement();
        trackEngagementTime();
        trackSearchQueries();
    });

    // Facebook Pixel tracking (if needed)
    function initFacebookPixel(pixelId) {
        if (!pixelId || typeof fbq === 'undefined') return;

        // Track page view
        fbq('track', 'PageView');

        // Track form submissions
        document.addEventListener('submit', function(e) {
            const form = e.target;
            const formType = getFormType(form);

            if (formType === 'appointment') {
                fbq('track', 'Lead');
            } else if (formType === 'contact') {
                fbq('track', 'Contact');
            }
        });
    }

    // Export functions for external use
    window.HealthWellnessAnalytics = {
        trackEvent: function(eventName, parameters) {
            if (typeof gtag === 'function') {
                gtag('event', eventName, parameters);
            }
        },
        
        trackAppointment: function() {
            if (typeof gtag === 'function') {
                gtag('event', 'generate_lead', {
                    event_category: 'appointments',
                    event_label: 'manual_track',
                    value: 100
                });
            }
        },
        
        trackPhoneCall: function(phoneNumber) {
            if (typeof gtag === 'function') {
                gtag('event', 'phone_call', {
                    event_category: 'contact',
                    event_label: phoneNumber,
                    value: 75
                });
            }
        }
    };

})();
