class UserrController {
    loggedUserID;

    constructor(model, view, firebaseAccess) {
        this.model = model;
        this.view = view;
        this.firebaseAccess = firebaseAccess;

        this.view.bindSignupUser(this.signupHandler);
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

            this.view.clearSignupFormView();

            return this.loggedUserID;
        }
        return false;
    };
}
