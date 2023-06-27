
// let name = 'alam'

// setTimeout (() => {
//     let reveredName = name.split ('').reverse ().join("")
//     console.log(reveredName);
// },2000)

let reverseName = (name) => {
    setTimeout (() => {
        let reversedName = name.split ('').reverse().join('')
        console.log(reversedName);
    },1000)
}

reverseName ('Sakib')