let hello = "kungen"

let monthlyIncome = 40;
let months = 12
let sum = monthlyIncome * months;

console.log("Tjennare, " + hello + "!")
console.log("Du sparar på en " + months + " månader " + sum + " kr")

let doColorButton = document.getElementById("doColorButton");

doColorButton.addEventListener("click", () => {
    let setColor = document.getElementById("setColor").value
    console.log("klick på knapp. Sätt färg till " + setColor)
    document.body.style.backgroundColor = setColor;
})
