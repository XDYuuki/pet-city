class ProfileController {
    userRef;
    constructor(view, fireBaseAccess) {
        this.view = view;
        this.fireBaseAccess = fireBaseAccess;

        this.view.bindLoadProfile(this.loadProfileHandler);
    }

    loadProfileHandler = () => {
        return new Promise((resolve, reject) => {
            this.fireBaseAccess
                .getUserFromDb()
                .then((user) => {
                    resolve(user);
                })
                .catch((err) => {
                    reject(err);
                });

            // setTimeout(() => {
            //     console.log("Ret: ", ret);
            //     if (ret) {
            //         resolve(ret);
            //     } else {
            //         reject("Error with load profile handler promise");
            //     }
            // }, 2000);
        });
    };
}
