//----------------------------------------object & prototype--------------------------------------
// An object in js is an entity having state and behavior(properties and method).
// js objects have a special property called prototype.
// we can set prototype using __proto__

// Note:- if obj & proto have same method, obj's method will be used.

// creating an object
const student = {
    fullName: "Isha Raut",  //object
    marks: 94.5,            //onject
    printMarks: function(){ //method
        console.log("Marks are", this.marks) //this is a keyword means that particular object (student.marks ==> this.marks)
    }
}


// creating custom prototype
const emplopyee = {
    calcTax() {
        console.log("You have to pay 10% tax")
    },
}

const karanArjun = {
    salary: 50000,
}

karanArjun.__proto__ = emplopyee; //karanArjun interited the properties of employee obj

//----------------------------------------classes in js------------------------------------------
/*
    classes are blueprint in js.
    class is a program-code template for creating objs.
    those objs will have some state(variables) & some behavior(functions) inside it.
*/

class Car {
    start(){
        console.log("start")
    }

    stop(){
        console.log("stop")
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new Car();
fortuner.setBrand("Toyota")
let lexus = new Car();

// -----------------------------constructor in class--------------------------
//  constructor() is a special method in class
//  automatically invoked by new
//  initializes object


// ----------------------------------------Inheritance in js-----------------------------
// Inheritance is passing down properties and methods from parent class to child class.
//  note:- id child & parent have same method, child's method will be used.[method overriding]

class Parent{
    hello(){
        console.log("Hello")
    }
}

class Child extends Parent{}

let obj = new Child();

// ----------------------------------Super Keyword---------------------------
//  The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class Person{
    constructor(branch){
        this.species = "Homo sapiens";
        this.branch = branch;
    }

    eat(){
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor(branch){
        super(branch); //to invoke parent class constructor before child class constructor
        //this.branch = branch;
    }
    work(){
        console.log("solve the problem");
    }
}

let isha = new Engineer("Computer Engg"); // first goes to child constructor --> then super() takes u to parent constructor --> again you come to child constructor