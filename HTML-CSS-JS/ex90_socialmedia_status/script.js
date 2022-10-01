class User {
    constructor(name){
        this.name = name;
        this.status = "";
    }
    updateStatus(status){
        this.status = status;
    }
}
const user1 = new User("Camila");
const user2 = new User("Anna");
const user3 = new User("John");
user1.updateStatus("Writing code!")
console.log(user1);
console.log(user2);
console.log(user3);

