class ProfilleView {
    constructor() {
        this.name = document.getElementById("pet-name");
        this.specie = document.getElementById("pet-specie");
        this.bio = document.getElementById("pet-bio");
        this.age = document.getElementById("pet-age");
        this.petPic = document.getElementById("pet-pic");
        this.followers = document.getElementById("pet-followers");
        this.following = document.getElementById("pet-following");
    }

    bindLoadProfile(handler) {
        handler()
            .then((petUser) => {
                console.log("Returned profile user: ", petUser);

                this.name.innerHTML = petUser.name;
                this.specie.innerHTML = petUser.specie;
                this.bio.innerHTML = petUser.bio;
                this.age.innerHTML = petUser.age;
                this.petPic.setAttribute("src", petUser.profilePictureURL);
                this.followers.innerHTML = petUser.followers.length;
                this.following.innerHTML = petUser.following.length;
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }
}
