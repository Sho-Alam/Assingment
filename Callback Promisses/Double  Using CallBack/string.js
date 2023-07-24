
function dblWithCallBack (arr, fn){
    arr.forEach(el => {
        console.log(el * 2);
    });
    fn()
}

let myArray = [1, 2, 3, 4]

dblWithCallBack (myArray, function(){
    console.log("Done with CallBack");
})