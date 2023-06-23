const app = new UserrController(
    new UserModel(),
    new FirebaseAccess(),
    new SignupView()
);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location = "pages/profile.html";
    }
});
