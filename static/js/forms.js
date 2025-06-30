// Form handling for Health & Wellness Theme

(function($) {
    'use strict';

    // Form validation rules
    const validationRules = {
        required: function(value) {
            return value.trim() !== '';
        },
        email: function(value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        },
        phone: function(value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            return phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''));
        },
        minLength: function(value, min) {
            return value.length >= min;
        },
        maxLength: function(value, max) {
            return value.length <= max;
        }
    };

    // Initialize form handling
    $(document).ready(function() {
        initFormValidation();
        initFormSubmission();
        initFormEnhancements();
        initDateTimePickers();
        initFileUploads();
    });

    // Form validation
    function initFormValidation() {
        // Real-time validation
        $('form input, form textarea, form select').on('blur', function() {
            validateField($(this));
        });

        // Clear validation on focus
        $('form input, form textarea, form select').on('focus', function() {
            $(this).removeClass('is-invalid is-valid');
            $(this).siblings('.invalid-feedback').remove();
        });

        // Form submission validation
        $('form').on('submit', function(e) {
            const form = $(this);
            let isValid = true;

            form.find('input, textarea, select').each(function() {
                if (!validateField($(this))) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
                scrollToFirstError(form);
            }
        });
    }

    // Validate individual field
    function validateField($field) {
        const value = $field.val();
        const fieldType = $field.attr('type');
        const isRequired = $field.prop('required');
        let isValid = true;
        let errorMessage = '';

        // Remove existing feedback
        $field.removeClass('is-invalid is-valid');
        $field.siblings('.invalid-feedback').remove();

        // Required field validation
        if (isRequired && !validationRules.required(value)) {
            isValid = false;
            errorMessage = 'This field is required.';
        }

        // Email validation
        if (isValid && fieldType === 'email' && value !== '' && !validationRules.email(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }

        // Phone validation
        if (isValid && fieldType === 'tel' && value !== '' && !validationRules.phone(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }

        // Custom validation attributes
        if (isValid && $field.data('min-length')) {
            const minLength = parseInt($field.data('min-length'));
            if (!validationRules.minLength(value, minLength)) {
                isValid = false;
                errorMessage = `Minimum ${minLength} characters required.`;
            }
        }

        if (isValid && $field.data('max-length')) {
            const maxLength = parseInt($field.data('max-length'));
            if (!validationRules.maxLength(value, maxLength)) {
                isValid = false;
                errorMessage = `Maximum ${maxLength} characters allowed.`;
            }
        }

        // Apply validation state
        if (isValid && value !== '') {
            $field.addClass('is-valid');
        } else if (!isValid) {
            $field.addClass('is-invalid');
            $field.after(`<div class="invalid-feedback">${errorMessage}</div>`);
        }

        return isValid;
    }

    // Scroll to first error
    function scrollToFirstError(form) {
        const firstError = form.find('.is-invalid').first();
        if (firstError.length) {
            $('html, body').animate({
                scrollTop: firstError.offset().top - 100
            }, 300);
            firstError.focus();
        }
    }

    // Form submission handling
    function initFormSubmission() {
        // Contact form
        $('.contact-form').on('submit', function(e) {
            e.preventDefault();
            handleFormSubmission($(this), 'contact');
        });

        // Appointment form
        $('.appointment-form').on('submit', function(e) {
            e.preventDefault();
            handleFormSubmission($(this), 'appointment');
        });

        // Newsletter form
        $('.newsletter-form').on('submit', function(e) {
            e.preventDefault();
            handleFormSubmission($(this), 'newsletter');
        });

        // Search form (don't prevent default)
        $('.search-form').on('submit', function(e) {
            const query = $(this).find('input[name="q"]').val().trim();
            if (!query) {
                e.preventDefault();
                showFormMessage($(this), 'Please enter a search term.', 'warning');
            }
        });
    }

    // Handle form submission
    function handleFormSubmission(form, type) {
        const submitButton = form.find('button[type="submit"]');
        const originalText = submitButton.text();
        const formData = new FormData(form[0]);

        // Show loading state
        submitButton.prop('disabled', true).html('<i class="fas fa-spinner fa-spin me-2"></i>Sending...');
        
        // Clear previous messages
        form.find('.alert').remove();

        // Simulate form submission (replace with actual endpoint)
        setTimeout(function() {
            const success = Math.random() > 0.1; // 90% success rate for demo
            
            if (success) {
                handleSubmissionSuccess(form, type, originalText);
            } else {
                handleSubmissionError(form, originalText);
            }
        }, 2000);

        // Track form submission
        if (typeof HealthWellnessAnalytics !== 'undefined') {
            HealthWellnessAnalytics.trackEvent('form_submit', {
                form_type: type,
                form_id: form.attr('id') || 'unknown'
            });
        }
    }

    // Handle successful submission
    function handleSubmissionSuccess(form, type, originalText) {
        const submitButton = form.find('button[type="submit"]');
        
        let message = '';
        switch (type) {
            case 'appointment':
                message = 'Thank you! Your appointment request has been submitted. We will contact you within 24 hours to confirm your appointment.';
                break;
            case 'contact':
                message = 'Thank you! Your message has been sent successfully. We will get back to you as soon as possible.';
                break;
            case 'newsletter':
                message = 'Thank you for subscribing! You will receive our latest updates and health tips.';
                break;
            default:
                message = 'Thank you! Your form has been submitted successfully.';
        }

        showFormMessage(form, message, 'success');
        form[0].reset();
        form.find('.is-valid').removeClass('is-valid');
        
        submitButton.prop('disabled', false).text(originalText);

        // Track successful submission
        if (typeof HealthWellnessAnalytics !== 'undefined') {
            if (type === 'appointment') {
                HealthWellnessAnalytics.trackAppointment();
            }
        }
    }

    // Handle submission error
    function handleSubmissionError(form, originalText) {
        const submitButton = form.find('button[type="submit"]');
        
        showFormMessage(form, 'Sorry, there was an error sending your message. Please try again or contact us directly.', 'danger');
        submitButton.prop('disabled', false).text(originalText);
    }

    // Show form message
    function showFormMessage(form, message, type) {
        const alert = $(`
            <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `);
        
        form.prepend(alert);
        
        // Scroll to message
        $('html, body').animate({
            scrollTop: alert.offset().top - 100
        }, 300);
    }

    // Form enhancements
    function initFormEnhancements() {
        // Auto-format phone numbers
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

        // Character counter for textarea
        $('textarea[maxlength]').each(function() {
            const maxLength = $(this).attr('maxlength');
            const counter = $(`<small class="form-text text-muted character-counter">0/${maxLength} characters</small>`);
            $(this).after(counter);
            
            $(this).on('input', function() {
                const currentLength = $(this).val().length;
                counter.text(`${currentLength}/${maxLength} characters`);
                
                if (currentLength > maxLength * 0.9) {
                    counter.addClass('text-warning').removeClass('text-muted');
                } else {
                    counter.addClass('text-muted').removeClass('text-warning');
                }
            });
        });

        // Smart form field focusing
        $('form').each(function() {
            const firstInput = $(this).find('input, textarea, select').filter(':visible').first();
            if (firstInput.length && !firstInput.val()) {
                setTimeout(() => firstInput.focus(), 100);
            }
        });
    }

    // Date and time pickers
    function initDateTimePickers() {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        $('input[type="date"]').attr('min', today);

        // Disable past dates
        $('input[type="date"]').on('change', function() {
            const selectedDate = new Date($(this).val());
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                $(this).val('');
                showFormMessage($(this).closest('form'), 'Please select a future date.', 'warning');
            }
        });

        // Smart time slot suggestions
        $('select[name*="time"], select[name*="Time"]').each(function() {
            const timeSelect = $(this);
            const now = new Date();
            const currentHour = now.getHours();
            
            // Disable past time slots for today
            const dateInput = timeSelect.closest('form').find('input[type="date"]');
            if (dateInput.length) {
                dateInput.on('change', function() {
                    const selectedDate = $(this).val();
                    const today = new Date().toISOString().split('T')[0];
                    
                    timeSelect.find('option').prop('disabled', false);
                    
                    if (selectedDate === today) {
                        timeSelect.find('option').each(function() {
                            const optionTime = $(this).val();
                            const optionHour = parseInt(optionTime.split(':')[0]);
                            const isPM = optionTime.includes('PM');
                            const hour24 = isPM && optionHour !== 12 ? optionHour + 12 : (!isPM && optionHour === 12 ? 0 : optionHour);
                            
                            if (hour24 <= currentHour) {
                                $(this).prop('disabled', true);
                            }
                        });
                    }
                });
            }
        });
    }

    // File upload handling
    function initFileUploads() {
        $('input[type="file"]').on('change', function() {
            const fileInput = $(this);
            const files = this.files;
            const maxSize = 5 * 1024 * 1024; // 5MB
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
            
            Array.from(files).forEach(file => {
                // Check file size
                if (file.size > maxSize) {
                    showFormMessage(fileInput.closest('form'), 'File size must be less than 5MB.', 'warning');
                    fileInput.val('');
                    return;
                }
                
                // Check file type
                if (!allowedTypes.includes(file.type)) {
                    showFormMessage(fileInput.closest('form'), 'Please upload only images (JPG, PNG, GIF) or PDF files.', 'warning');
                    fileInput.val('');
                    return;
                }
            });
        });
    }

    // Export form utilities
    window.HealthWellnessForms = {
        validateField: validateField,
        showMessage: showFormMessage,
        resetForm: function(formSelector) {
            const form = $(formSelector);
            form[0].reset();
            form.find('.is-valid, .is-invalid').removeClass('is-valid is-invalid');
            form.find('.invalid-feedback').remove();
            form.find('.alert').remove();
        }
    };

})(jQuery);
