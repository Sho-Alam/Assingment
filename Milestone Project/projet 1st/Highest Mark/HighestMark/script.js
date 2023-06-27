 let mark = [100, 102, 105, 150, 120]
let highestmark = mark [0]

for (let i = 1; i < mark.length; i++){
    highestmark = mark [i] > highestmark ? mark [i] : highestmark;
}

console.log("The Highets Mark:" + highestmark);