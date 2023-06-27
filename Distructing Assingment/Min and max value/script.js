

function maxAndminValue (value){
    return {
        max: Math.max(...value),
        min: Math.min(...value)
}
}

console.log( maxAndminValue ([12, 35, 65, 78, 10, 23, ]));