
let displaymassege = document.getElementById("massege");
let button = document.getElementById("button");
let counter = 0
let input = document.getElementById("input")

function removeAfterSetTime(){
    location.reload()
}
button.addEventListener("click", () =>{
    let input = document.getElementById("input").value.toLowerCase();
    let split = input.split("")
    input.Value = ""
    for(let i = 0; i<split.length; i++) {
        if(split[i]  == "a" || split[i] == "e" || split[i] == "i" || split[i] == "o" || split[i] == "u"){
            counter ++
        }
        if(counter > 1){
            displaymassege.innerHTML = `'${input}' has ${counter} vowel`
        } 
        else{
            displaymassege.innerHTML = `'${input}' has ${counter} vowel`
            let timeout = setTimeout(removeAfterSetTime, 2500)
        }
    }
})