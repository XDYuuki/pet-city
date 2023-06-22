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
            petId: "",
            name: dataPet.name,
            specie: dataPet.specie,
            age: dataPet.age,
            profilePictureURL: "",
            tutorFirsName: dataPet.tutorFirsName,
            tutorlastName: dataPet.tutorlastName,
            email: dataPet.email,
            bio: dataPet.bio,
            posts: [],
        };

        return pet;
    }

    uploadFile(file) {
        return this.firebaseStorage.uploadFile(file);
    }

    addNewPost(petId, post) {}
}
