const ADD_NEW_USER = true;
const JUST_ADD_FILE = false;
class FirebaseAccess {
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyD0UlGaJPDTqjHsVyf3I38ZJ2ZK18rEE5s",
            authDomain: "webapplicationprogrammin-2f465.firebaseapp.com",
            projectId: "webapplicationprogrammin-2f465",
            storageBucket: "webapplicationprogrammin-2f465.appspot.com",
            messagingSenderId: "8290715278",
            appId: "1:8290715278:web:9632a5c75455901e276bdf",
            measurementId: "G-KW4J9HX7GJ",
        };

        this.app = firebase.initializeApp(this.firebaseConfig);
        // this.database = firebase.database();

        this.database = this.app.firestore();
        this.storage = this.app.storage();
    }

    signup(userData, fbStorageBucket, callback) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(userData.email, userData.password)
            .then(() => {
                console.log("User successfully created");
                const user = firebase.auth().currentUser;

                this.uploadFile(
                    userData,
                    ADD_NEW_USER,
                    fbStorageBucket,
                    callback
                );
                //addUserToDb(userData);
                return user.uid;
            })
            .catch((err) => {
                console.log("Error creating user", err);
                return false;
            });
    }

    login(email, password) {}
    logout() {}

    addUserToDb(userData) {}

    uploadFile(data, shouldAddNewUser, FbStorageBucket, callback) {
        if (data) {
            const id = this.database.collection("petUser").doc().id;

            const storageRef = storage.ref(
                `${FbStorageBucket}/${id}.${data.file.extension}`
            );
            const uploadTask = storageRef.put(data.file);

            uploadTask.on(
                "state_changed",
                function (snapshot) {
                    let progressVal =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Progress: ", progressVal, "% / 100%");
                    //progress.value = progressVal;
                },
                function (err) {
                    console.log("error:", err);
                },
                function () {
                    console.log("Upload is done");
                    uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL) => {
                            let imageUrl = downloadURL;

                            if (shouldAddNewUser) {
                                let newPet = callback();
                                this.database
                                    .collection("petUser")
                                    .doc(id)
                                    .set(newPet)
                                    .then(() => {
                                        console.log(
                                            "New pet added to the database."
                                        );
                                    })
                                    .catch((err) => {
                                        console.log("db set error: ", err);
                                    });
                            }
                            return imageUrl;
                        });
                }
            );
        }
    }
}

const firebaseApp = new FirebaseAccess();
