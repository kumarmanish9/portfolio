document.getElementById('contact-form').addEventListener('submit', function(e) 
{
    e.preventDefault();  // Prevent the default form submission

    const form = e.target;

    // Use fetch to send form data to Formspree
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for reaching out, I will get back to you soon!');
            form.reset();  // Clear the form after successful submission
        } else {
            alert('Oops! There was a problem submitting your form. Please try again later.');
        }
    })
    .catch(error => {
        alert('Network error: ' + error.message);
    });
});
