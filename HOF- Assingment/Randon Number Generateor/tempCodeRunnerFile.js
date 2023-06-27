
let delay = 5;
console.log(`The number will be generate ${delay} second`);

let intervalID =  setInterval (() => {
    console.log(delay--);
},1000)

setTimeout (() => {
    clearInterval (intervalID)
    let randomNumber = Math.floor (Math.random () * 10000)
    console.log(`The random Number generate ${randomNumber}`);
},delay * 1000)
