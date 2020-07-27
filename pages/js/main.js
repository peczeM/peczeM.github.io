function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber)
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárohat!");
    } else if (amountNumber < 1) {
        alert("Minimum egy terméket kell vásárolnia!")
    } else {
        let amount = amountNumber * price
        showAmount.innerHTML = amount;
    }
}

let sumButton = document.querySelector("form .btn.btn-primary");

sumButton.addEventListener("click", function () {
    alert("Hello!");
});



let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll(".form-control");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }

    console.log(values);
});

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra Sonka"
];

let toppingSelect = document.querySelector("#topInput")
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}


/*
sumButton.onclick = function(){
    alert ("Hello JS!");
}

window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth);
})

case 0: dayName="Vas";
break;
case 1: dayName="Hét";
break;
case 2: dayName="Ked";
break;
case 3: dayName="Sze";
break;
case 4: dayName="Csü";
break;
case 5: dayName="Pén";
break;
case 6: dayName="Szom";

*/
/*
function addNewTag(arr) {
    arr[2] = 10;
    console.log("From function:", arr);
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
addNewTag(days);
console.log(days);


let helpText = document.createElement("small");
helpText.className = "form-text text-muted ";
helpText.innerHTML = "Adja meg a feltéteket!";


let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);

*/

// Hasonló eredményt érünk el continue- val és break -kel.

/*
for (let i = 0; i < days.length; i++) {
    if (i > 1) {
        continue;
    }
    console.log(days[i]);
}

for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}

let sum = 0;
    for (let i = 0; i < data.length; i++);{
    sum += data[i];
}
console.log("Sum :", sum);

let db = 0;
for (let i=0; i < data.length; i++){
    if(i< data.length){
        db = db + 1;
    }
}
console.log("Db: ", db);

let db = 0;
for (let i=0; i < data.length; i++){
    if ( data[i] %2 == 0){
        db++;
    }
}
console.log("Páros: ", db);

let db = 0;
for (let i=0; i < data.length; i++){
    if ( data[i] %2 >= 1){
        db++;
    }
}
console.log("páratlan: ", db)

let biggest = data[0];
for (let i=0; i < data.length; i++){
    if ( data[i] > biggest){
      biggest = data[i];
    }
}
console.log("Legnagyobb: ", biggest);

let contains = false;
for (let i = 0; i< data.length && contains == false; i++){
    if ( data[i] == 5){
        contains = true;
    }
}
console.log("Tartalmazza az 5: ", contains);

*/
