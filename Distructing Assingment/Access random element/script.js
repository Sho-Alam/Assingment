


function randomElement (arr){

    const first = arr[0]
    const second = arr[1]
    const last = arr[arr.length -1]

    return {
        first,
        second,
        last
    }
}

console.log(randomElement ([1, 2, 3, 4, 5, 6, 7]));