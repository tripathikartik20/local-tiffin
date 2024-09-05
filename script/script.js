// Handling form submission
document.getElementById('query-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name && email && message) {
        alert('Thank you for your query! We will get back to you soon.');
        // You can add an actual backend call here to send the query data to your server.
    } else {
        alert('Please fill out all fields before submitting.');
    }

    // Clear form fields
    document.getElementById('query-form').reset();
});
