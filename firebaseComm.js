const app = new UserrController(
    new UserModel(),
    new SignupView(),
    new FirebaseAccess()
);
