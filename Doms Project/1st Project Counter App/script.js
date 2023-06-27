
const decerementBtn  = document.getElementById("decerementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

decerementBtn.addEventListener("click", () => {
const value = Number (displayValue.innerText);
if (value > 0) {
    displayValue.innerText = value - 1;
} else{
    alert("Negative value not allowed");
}
});


incrementBtn.addEventListener("click", () => {
    const value = Number (displayValue.innerText);
    if (value >= 10) {
        alert("10+ Values are not allowed");
    } else {
        displayValue.innerText = value + 1;

    }
} );

resetBtn.addEventListener("click",() => {
    displayValue.innerText = 0;
});

