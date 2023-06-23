const app = new LoginController(new FirebaseAccess(), new LoginView());

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        window.location = "profile.html";
    } else {
        //window.location = "../index.html";
    }
});
