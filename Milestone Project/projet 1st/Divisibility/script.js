function divisibleby3Button(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr [i] % 3 !== 0 || arr[i] % 2 === 0){
            continue;
        }
        console.log(arr[i]);
    }
}

 const number =[6, 21, 15, 10, 20, 18, 9]
divisibleby3Button(number);