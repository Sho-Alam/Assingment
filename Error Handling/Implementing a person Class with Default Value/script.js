

class person {
    name;
    age;

    constructor (name = "unknown", age = 0){

        this.name = name
        this.age = age
    }

    getDetails(){
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }
}

let person1 = new person("Atir", 22)
person1.getDetails()

let person2 = new person()
person2.getDetails()