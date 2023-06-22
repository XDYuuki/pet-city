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
            this.loggedUserID = this.firebaseAccess.signup(
                dataPet,
                "petPic",
                this.model.createNewPet
            );
        }
    };
}
