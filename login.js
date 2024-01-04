document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showModal('Login successful!');
    document.getElementById('loginForm').reset(); // Reset the login form
});

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    showModal('Signup successful!');
    document.getElementById('signupForm').reset(); // Reset the signup form
});

function toggleForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();

    const loginContainer = document.getElementById('loginContainer');
    const signupContainer = document.getElementById('signupContainer');

    if (loginContainer.style.display === 'none') {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    }
}

// Modal
function showModal(message) {
    document.getElementById('myModal').style.display = 'flex';
    document.querySelector('.modal-content p').innerText = message;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
