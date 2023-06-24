const profileApp = new ProfileController(
    new ProfilleView(),
    new FirebaseAccess()
);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    } else {
        window.location = "/index.html";
    }
});
