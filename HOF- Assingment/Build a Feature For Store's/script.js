
let items = {
'item 1': 20,
'item 2': 60,
'item 3': 40,
'item 4': 30,
}

let exchangeRate = 80;

let priceRupess = Object.entries(items).map(([key , Value]) => {
    let RupessConvert = Value * exchangeRate;

    return {[key]: RupessConvert}
})

console.log(priceRupess);