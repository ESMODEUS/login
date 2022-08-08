const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "Admin" && password === "AxalitaobA2021") {
        onclick=(window.location.href = "https://www.axalitaoba.ga/");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

