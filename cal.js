const tipButton = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip")
const peopleInput = document.getElementById("people")
const billInput = document.getElementById("bill")
const resetButton = document.getElementById("reset")


let bill = 0;
let people = 0;
let tipPercent = 0;


function calcTip() {
    const tipPerson = document.getElementById("tip-person");
    const tipPeople = document.getElementById("total-person");


    if(people !==0 || tipPercent !==0) {
        resetButton.classList.remove("bg-green-750");
        resetButton.classList.add("bg-green-200");
    }
    if(people === 0 || people === null) {
        tipPerson.textContent = "0.00";
        totalPerson.textContent = "0.00"
    } else {
        const totalTip = bill * tipPercent;
        const tipPerPerson = totalTip / people
        const totalPerPerson = Number((totalTip) + Number(bill)) /people;

        console.log(tipPerson + totalPerson)

        tipPerson.textContent = `${tipPerPerson.toFixed(2)}`;
        totalPerson.textContent = `${totalPerPerson.toFixed(2)}`
    }
}

function handlePercentClick(button) {
    return() => {
        tipButton.forEach((b) => {b.classList.remove("bg-green-400")});

        console.log(tipButton)
        customTip.classList.remove("border-orange-400")
        customTip.classList.remove("border-2")
        customTip.classList.add("bg-green-400");
        customTip.value = "";
        tipPercent = button.dataset.tipPercent

        console.log(tipPercent)
        
        calcTip()
    }
}


tipButton.forEach((button) =>{
    button.addEventListener("click", handlePercentClick(button))
})


customTip.addEventListener("input", (e) => {
    const currVal = e.target.value;
    if(currVal <= 0 || currVal >=100){
        customTip.classList.add("#ff0000");
        customTip.classList.add("border-2")
    }else {
        customTip.classList.remove("#ff0000");
        customTip.classList.add("border-2");
        tipButton.forEach((b) => {b.classList.remove("#ff0000")});
        tipPercent = currVal / 100
        calcTip
    }
       
})

 
peopleInput.addEventListener("input", (e) => {
    const currVal = e.target.value;
    const peopleWarning = document.getElementById("people-warning");
    const peopleContainer = document.getElementById("people-container")

    if (currVal == 0 ){
        peopleWarning.classList.add("hidden")
        peopleContainer.classList.add("#ff0000")
        peopleContainer.classList.remove("#ff0000")
    }


})