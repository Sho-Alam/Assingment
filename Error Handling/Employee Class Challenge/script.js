class Employee{
    name = "Atir"
    Position = "Maneger"
    sallery = 70000

    getSallery(){
        console.log(`${this.sallery}`);
    }
}

let result = new Employee()
result.getSallery()