const app = new UserrController(
    new UserModel(),
    new FirebaseAccess(),
    new SignupView()
);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("nav-auth").style.display = "block";
        document.getElementById("nav-no-auth").style.display = "none";
    } else {
        document.getElementById("nav-auth").style.display = "none";
        document.getElementById("nav-no-auth").style.display = "block";
    }
});
