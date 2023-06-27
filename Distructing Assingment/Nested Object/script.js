
const person = {
    name: 'Shoaib',
    age: 20,
    address: {
        street: "B10 Block D Industrial Area",
        city: "Lucknow",
        state: "Utter Pradesh"
    }
}

function extracPerson (obj){
    const{
        name,
        address:{
            street}, 
    } = obj

    return { name, street}
}

console.log(extracPerson (person));