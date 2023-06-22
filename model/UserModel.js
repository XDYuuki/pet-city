class UserModel {
    pets = [
        {
            id: 0,
            name: "",
            specie: "",
            age: 0,
            profilePictureURL: "",
            tutorFirsName: "",
            tutorlastName: "",
            email: "",
            bio: "",
            following: [],
            followers: [],
            posts: [
                {
                    title: "",
                    content: "",
                    imageUrl: "",
                },
            ],
        },
    ];

    firebaseDb;

    constructor() {}

    bindAccess(dbReference) {
        this.firebaseDb = dbReference;
    }

    createNewPet(dataPet) {
        let pet = {
            petId: dataPet.id ? dataPet.id : "",
            name: dataPet.name,
            specie: dataPet.specie,
            age: dataPet.age,
            profilePictureURL: dataPet.profilePictureURL
                ? dataPet.profilePictureURL
                : "",
            tutorFirstName: dataPet.tutorFirstName,
            tutorLastName: dataPet.tutorLastName,
            email: dataPet.email,
            bio: dataPet.bio,
            following: [],
            followers: [],
            posts: [],
        };

        return pet;
    }

    uploadFile(file) {
        return this.firebaseStorage.uploadFile(file);
    }

    addNewPost(petId, post) {}
}
