class SignupView {
    fileCatcher = {
        file: "",
        fileName: "",
        extension: "",
    };

    constructor() {
        this.signupForm = document.getElementById("signup-form");
        this.petNameInput = document.getElementById("pet-name-input");
        this.specieInput = document.getElementById("specie-input");
        this.ageInput = document.getElementById("age-input");
        this.fileInput = document.getElementById("file-ref-input");
        this.tutorFirstName = document.getElementById("tutor-fname-input");
        this.tutorLastName = document.getElementById("tutor-lname-input");
        this.emailInput = document.getElementById("email-input");
        this.passwprdInput = document.getElementById("password-input");
        this.bioInput = document.getElementById("bio-input");
    }

    clearSignupFormView = () => {
        this.petNameInput.value = "";
        this.specieInput.value = "";
        this.ageInput.value = "";
        this.tutorFirstName.value = "";
        this.tutorLastName.value = "";
        this.emailInput.value = "";
        this.passwprdInput.value = "";
        this.bioInput.value = "";
    };

    bindSignupUser(handler) {
        this.fileInput.addEventListener("change", (event) => {
            this.fileCatcher.file = event.target.files[0];
            this.fileCatcher.fileName = this.fileCatcher.file.name
                .split(".")
                .shift();
            this.fileCatcher.extension = this.fileCatcher.file.name
                .split(".")
                .pop();

            console.log("NewFile: ", this.fileCatcher);
        });

        this.signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let userData = {
                name: this.petNameInput.value,
                specie: this.specieInput.value,
                age: this.ageInput.value,
                tutorFirstName: this.tutorFirstName.value,
                tutorLastName: this.tutorLastName.value,
                email: this.emailInput.value,
                password: this.passwprdInput.value,
                bio: this.bioInput.value,
                file: this.fileCatcher,
            };

            console.log("Bio content: ", this.bioInput.value);
            console.log("View userData: ", userData);

            let returnHandler = handler(userData);
            if (returnHandler) {
                //window.location = "pages/profile.html";
                console.log("View return Handler: ", returnHandler);
            }
        });
    }
}
