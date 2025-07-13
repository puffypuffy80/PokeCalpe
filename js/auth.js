// Simulación básica de autenticación con localStorage

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;
            const storedPass = localStorage.getItem("user_" + user);
            if (storedPass && storedPass === pass) {
                alert("Login correcto");
                localStorage.setItem("loggedInUser", user);
                window.location.href = "index.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newUser = document.getElementById("newUsername").value;
            const newPass = document.getElementById("newPassword").value;
            if (localStorage.getItem("user_" + newUser)) {
                alert("Usuario ya existe");
            } else {
                localStorage.setItem("user_" + newUser, newPass);
                alert("Registro correcto, ya puedes iniciar sesión");
                window.location.href = "login.html";
            }
        });
    }

    // Si estás en index.html, verifica si hay usuario logueado
    if (window.location.pathname.endsWith("index.html")) {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (!loggedInUser) {
            alert("Debes iniciar sesión para ver esta página");
            window.location.href = "login.html";
        }
    }
});
