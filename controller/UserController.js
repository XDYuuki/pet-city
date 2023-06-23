class UserrController {
    loggedUserID = undefined;

    constructor(model, firebaseAccess, signupView) {
        this.model = model;
        this.signupView = signupView;
        this.firebaseAccess = firebaseAccess;

        this.signupView.bindSignupUser(this.signupHandler);
        this.model.bindAccess(this.firebaseAccess);
    }

    signupHandler = (dataUser) => {
        if (dataUser) {
            let dataPet = this.model.createNewPet(dataUser);
            console.log("Controller dataPet: ", dataPet);
            this.loggedUserID = this.firebaseAccess.signup(
                dataPet,
                "petPic",
                dataUser.email,
                dataUser.password,
                dataUser.file
            );

            this.signupView.clearSignupFormView();

            return this.loggedUserID;
        }
        return false;
    };
}
