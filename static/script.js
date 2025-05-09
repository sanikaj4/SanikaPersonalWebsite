// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form validation for contact form
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const phone = document.getElementById('phone');
            const email = document.getElementById('email');
            
            // Simple validation
            let isValid = true;
            
            if (!name.value.trim()) {
                isValid = false;
                highlightField(name);
            } else {
                resetField(name);
            }
            
            if (!phone.value.trim()) {
                isValid = false;
                highlightField(phone);
            } else {
                resetField(phone);
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                isValid = false;
                highlightField(email);
            } else {
                resetField(email);
            }
            
            // If valid, submit the form (you would replace this with actual form submission logic)
            if (isValid) {
                // For now, just show an alert
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Highlight invalid field
    function highlightField(field) {
        field.style.border = '2px solid #D7795D';
    }
    
    // Reset field styling
    function resetField(field) {
        field.style.border = 'none';
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Portfolio Filtering Functionality
    // Make sure this code executes after DOM is fully loaded
    function initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        if (filterButtons.length > 0) {
            // Add click event to each filter button
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Log to confirm click is detected
                    console.log('Filter button clicked:', this.getAttribute('data-filter'));
                    
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get filter value
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Show or hide portfolio items based on filter
                    portfolioItems.forEach(item => {
                        if (filterValue === 'all') {
                            item.style.display = 'flex';
                        } else {
                            // Check if item has the category
                            if (item.classList.contains(filterValue)) {
                                item.style.display = 'flex';
                            } else {
                                item.style.display = 'none';
                            }
                        }
                    });
                });
            });
            
            // Ensure "All" filter is active by default
            // This ensures everything is visible initially
            const allFilterBtn = document.querySelector('.filter-btn[data-filter="all"]');
            if (allFilterBtn) {
                allFilterBtn.click();
            }
        } else {
            console.warn('No filter buttons found with class .filter-btn');
        }
    }
    
    // Initialize filters on page load
    initializeFilters();
});