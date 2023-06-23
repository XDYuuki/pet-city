class LoginController {
    loggedUserID = undefined;

    constructor(firebaseAccess, loginView) {
        this.loginView = loginView;
        this.firebaseAccess = firebaseAccess;

        this.loginView.bindLoginProcess(this.loginHandler);
    }

    loginHandler = (email, password) => {
        return this.firebaseAccess.login(email, password);
    };
}
