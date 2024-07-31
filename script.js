document.getElementById("confirm_password").addEventListener("input", () => {
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirm_password").value
    var errorElement = document.getElementById('error');

    if (password !== confirmPassword) {
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
    }
})