
function greet (name){
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`;
        resolve(greeting)
    })
}
greet ("alam").then((message) => console.log(message)); 