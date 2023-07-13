
function Student (name){
    this.name = name;
}

Object.prototype.printDetails = function(){
    console.log(`hello My name is ${this.name}`);
}

const result = new Student("Alam")

result.printDetails()