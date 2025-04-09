function toggleForm() {
    const title = document.getElementById('formTitle');
    const usernameField = document.getElementById('username');
    const toggleText = document.querySelector('.toggle');
    
    if (title.innerText === 'Login') {
        title.innerText = 'Sign Up';
        usernameField.style.display = 'block';
        toggleText.innerText = 'Already have an account? Login';
    } else {
        title.innerText = 'Login';
        usernameField.style.display = 'none';
        toggleText.innerText = "'Don't have an account? Sign up'";
    }
}