//  Using Constructor 

// class myCar{
//     company;
//     model;
//     year;


//     constructor(c, m, y){
//         this.company = c
//         this.model = m
//         this.year = y
//     }

        

//     getDiscription(){
//         console.log(`this is a ${This.company} ${this.model} ${this.year}`);
//     }
// }

// let result = new myCar("Skoda", "Rapid", 2022)
// result.getDiscription()

// Whitout Using Constructor

class myCar{
    company;
    model;
    year;


    

        company = "Skoda"
        model = "Rapid"
        year = 2023

    getDiscription(){
        console.log(`This is a ${this.company} ${this.model} ${this.year}`);
    }
}
let result = new myCar()
result.getDiscription()
