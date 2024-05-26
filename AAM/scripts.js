// Form validation script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email
