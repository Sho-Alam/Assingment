

function callBack (str){
    return function logString (){
     console.log(`Manipulated string is: ${str.toUpperCase()}`);
    }
}

let result = callBack ("alam")
result()
