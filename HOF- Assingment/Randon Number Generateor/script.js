

let delay = 3;
console.log(` The will  be Generate ${delay} second`);

let intervalID = setInterval (() => {
    console.log(delay--);
}, 1000);

setTimeout (() => {
    clearInterval (intervalID);
    let randomNumber = Math.floor (Math.random () * 10000);
    console.log(`The random Number generate ${randomNumber}`)
},delay * 1000)