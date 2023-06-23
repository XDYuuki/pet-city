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
        //this.database = this.app.database();

        this.database = this.app.firestore();
        this.storage = this.app.storage();
    }

    signup(userData, fbStorageBucket, email, password, file) {
        console.log("firebase signup userData: ", userData);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("User successfully created");
                const user = firebase.auth().currentUser;

                let uploadNewPet = userData;
                uploadNewPet.id = user.uid;

                this.uploadFile(userData, ADD_NEW_USER, fbStorageBucket, file);
                //addUserToDb(userData);
                return user.uid;
            })
            .catch((err) => {
                console.log("Error creating user", err);
                return false;
            });
    }

    login(email, password) {
        if (email && password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    const user = firebase.auth().currentUser;

                    console.log("User logged in: ", user);
                    return true;
                })
                .catch((err) => {
                    console.log("err", err);
                    return false;
                });
        } else {
            alert("There is something wrong with your e-mail or password");
            return false;
        }
    }

    logout() {}

    addUserToDb(userData) {}

    setDatabaseItem = (item, collection, docID) => {
        this.database
            .collection(collection)
            .doc(docID)
            .set(item)
            .then(() => {
                console.log("New pet added to the database.");
            })
            .catch((err) => {
                console.log("db set error: ", err);
            });
    };

    uploadFile(data, shouldAddNewUser, FbStorageBucket, file) {
        if (data) {
            let id = this.database.collection("petUser").doc().id;

            let storageRef = this.storage.ref(
                `${FbStorageBucket}/${id}.${file.extension}`
            );
            let uploadTask = storageRef.put(file.file);

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
                    uploadTask.snapshot.ref
                        .getDownloadURL()
                        .then((downloadURL) => {
                            let imageUrl = downloadURL;
                            let newPet = data;
                            newPet.profilePictureURL = downloadURL;
                            newPet.id = id;

                            console.log("Upload is done", id, downloadURL);
                            console.log("Db Item: ", newPet);

                            if (shouldAddNewUser) {
                                //this.setDatabaseItem(newPet, "petUser", id);

                                //this.database
                                firebase
                                    .firestore()
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

// const firebaseApp = new FirebaseAccess();
