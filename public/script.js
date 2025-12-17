/* =============================================
   KRISHNA INTERIORS - JavaScript
   ============================================= */

// =============================================
// MOBILE NAVIGATION TOGGLE
// =============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
}

// =============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =============================================
// HEADER SCROLL EFFECT
// =============================================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// =============================================
// CONTACT FORM - GOOGLE SHEETS SUBMISSION
// =============================================

/**
 * SETUP INSTRUCTIONS FOR GOOGLE SHEETS:
 * 
 * 1. Create a new Google Sheet
 * 2. Add headers in Row 1: Name, Phone, Message, Timestamp
 * 3. Go to Extensions > Apps Script
 * 4. Delete any code and paste the following:
 * 
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   
 *   sheet.appendRow([
 *     data.name,
 *     data.phone,
 *     data.message,
 *     new Date().toLocaleString()
 *   ]);
 *   
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ result: 'success' }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 * 
 * 5. Click Deploy > New deployment
 * 6. Select type: Web app
 * 7. Set "Execute as": Me
 * 8. Set "Who has access": Anyone
 * 9. Click Deploy and copy the Web App URL
 * 10. Replace GOOGLE_SCRIPT_URL below with your URL
 */

// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !phone) {
            showFormStatus('Please fill in all required fields.', 'error');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(phone)) {
            showFormStatus('Please enter a valid phone number.', 'error');
            return;
        }
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        try {
            // Check if Google Script URL is configured
            if (GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
                // Demo mode - show success without actually submitting
                console.log('Form Data:', { name, phone, message });
                showFormStatus('Thank you! We will contact you soon.', 'success');
                contactForm.reset();
            } else {
                // Submit to Google Sheets
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        message: message || 'No message provided'
                    })
                });
                
                showFormStatus('Thank you! We will contact you soon.', 'success');
                contactForm.reset();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus('Something went wrong. Please try again.', 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

/**
 * Display form status message
 * @param {string} message - Status message to display
 * @param {string} type - 'success' or 'error'
 */
function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
    
    // Clear message after 5 seconds
    setTimeout(function() {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
    }, 5000);
}

// =============================================
// LAZY LOADING IMAGES (OPTIONAL ENHANCEMENT)
// =============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
    });
}

// =============================================
// CONSOLE LOG FOR DEBUGGING
// =============================================
console.log('Krishna Interiors website loaded successfully!');
console.log('For Google Sheets integration, update GOOGLE_SCRIPT_URL in script.js');
