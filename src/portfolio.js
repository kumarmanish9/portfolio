document.querySelector('form').addEventListener('submit', function(e) {
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (email === '' || message === '') {
        alert('Please fill in all fields!');
        e.preventDefault(); // Prevent form submission
    } else {
        alert('Message sent successfully!');
    }
});
