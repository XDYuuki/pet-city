firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    } else {
        window.location = "/index.html";
    }
});
