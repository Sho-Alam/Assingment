const person = {
firstName: "Mohd",
lastName: "Atir",
age: 23

}

function ageInDays(person, callback){
    const fullName = `${person.firstName} ${person.lastName}`
    const ageInDays = `${person.age * 365}`
    callback(fullName, ageInDays)
}

function logResult (fullName, ageInDays){
    console.log(`The person Full name is ${fullName} and there age in days is ${ageInDays}`);
}

ageInDays(person, logResult)