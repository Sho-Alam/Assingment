// function getPerson(person) {
//     try {
//       if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
//         throw new Error('Invalid parameter type');
//       }
  
//       return `Name: ${person.name}, Age: ${person.age}`;
//     } catch (error) {
//       return error.message;
//     }
//   }

  // Example usage

// const validPerson = { name: 'John Doe', age: 25 };
// const invalidPerson = "";

// console.log(getPerson(validPerson));   // Output: Name: John Doe, Age: 25
// console.log(getPerson(invalidPerson)); // Output: Invalid parameter type

// console.log(getPerson({name: 'John Doe', age: 25}));
// console.log(getPerson({}));




function getPerson (person){
    try{
        if(typeof person !== 'object'|| person ===null || !('name' in person) || !('age' in person) ){
             throw new Error ("Invalid Peramiter type")
        }
        return `Name: ${person.name}, Age: ${person.age}`
    }catch (error){
        return error.message
    }

}

console.log(getPerson ({name: "alam", age: 22}));
console.log(getPerson ({name: "alam"}));