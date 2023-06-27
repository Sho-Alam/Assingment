function capitalName (name){
    let firstLetter = name.charAt(0);
    let capitalizedFirstLetter = firstLetter.toUpperCase();
    return firstLetter === capitalizedFirstLetter ? name : capitalizedFirstLetter + name.slice(1);
}

console.log(capitalName("Alam"));