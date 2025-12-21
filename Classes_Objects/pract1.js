// you are creating a website for ur cllg.
// create a class User with 2 properties, name & email.
// It also has a method called viewData() that allows user to view website data.
let Data = "Hello Bro"
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(Data)
    }
}

let stud1 = new User("Isha", "isha@gmail.com")
let stud2 = new User("Sanket", "sanket@gmail.com")


// create a new class Admin which inherits from User. 
// Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name, email){
        super(name, email)    
    }

    editData(){
        Data = "Hey Sanket"
    }
}

let admin = new Admin("Sanket", "sanket@gmail.com");