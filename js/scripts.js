document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';

    let hasError = false;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        document.getElementById('nameError').style.display = 'block';
        hasError = true;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        document.getElementById('emailError').style.display = 'block';
        hasError = true;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').innerText = 'Message is required.';
        document.getElementById('messageError').style.display = 'block';
        hasError = true;
    }

    // Show success message if no errors
    if (!hasError) {
        document.getElementById('successMessage').innerText = 'Form submitted successfully!';
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
    }
});
