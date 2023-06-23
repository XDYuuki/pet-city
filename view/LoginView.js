class LoginView {
    constructor() {
        this.loginForm = document.getElementById("login-form");
        this.emailInput = document.getElementById("login-email-input");
        this.passwordInput = document.getElementById("login-password-input");
    }

    bindLoginProcess(handler) {
        this.loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            let loginReturn = handler(
                this.emailInput.value,
                this.passwordInput.value
            );

            if (loginReturn) {
                console.log("Login confirmed: redirecting...");
                firebase.auth().onAuthStateChanged((user) => {
                    if (user) {
                        // console.log(window.location);
                        window.location = "profile.html";
                    }
                });
            }
        });
    }
}
