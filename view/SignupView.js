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
        this.age = document.getElementById("age-input");
        this.fileInput = document.getElementById("file-ref-input");
        this.tutorFirstName = document.getElementById("tutor-fname-input");
        this.tutorLastName = document.getElementById("tutor-lname-input");
    }

    bindSignupUser(handler) {
        this.fileInput.addEventListener("change", (event) => {
            this.fileCatcher.file = event.target.files[0];
            this.fileCatcher.fileName = fileToUpload.file.name
                .split(".")
                .shift();
            this.fileCatcher.extension = fileToUpload.file.name
                .split(".")
                .pop();
        });

        this.signupForm.addEventListener("submit", (event) => {
            event.preventDefault;

            let userData = {};

            if (handler()) {
                window.location = "pages/profile.html";
            }
        });
    }
}
