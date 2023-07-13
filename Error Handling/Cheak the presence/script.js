
function cheakerNumber (num1){
    return function (num2){
        return num1.includes(num2)
    }
    
    
}

const arr = [1, 2, 3, 4, 5]
let result = cheakerNumber(arr)
console.log(result(4));
console.log(result(7));
 
