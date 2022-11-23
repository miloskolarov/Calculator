let currentNumb= "";
let previousNumb="";
let operator= "";

const currentDisplayNum= document.querySelector (".currentNumb");
const previousDisplayNum= document.querySelector (".previousNumb");

const operators= document.querySelectorAll (".operator");
const equal= document.querySelector (".equal");
equal.addEventListener ("click", () => calculate());
const numb= document.querySelectorAll (".number");

const clear= document.querySelector (".clear");
clear.addEventListener ("click", () => clearDisplay());
const del= document.querySelector (".delete");
del.addEventListener ("click", ()=> deleteNumber());

numb.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        printNum (e.target.textContent);
    });

});

function printNum(number) {
   if (currentNumb.length <= 12) {currentNumb+= number;
    currentDisplayNum.textContent= currentNumb;}
};

operators.forEach ((btn) => {
    btn.addEventListener("click", (e) => {
        printOp(e.target.textContent);
    });

});

function printOp(op) {
    operator= op;
    previousNumb= currentNumb;
    previousDisplayNum.textContent= previousNumb + " " + op;
    currentNumb= "";
    currentDisplayNum.textContent= "";
} 


function calculate() {
    previousNumb= Number (previousNumb);
    currentNumb= Number (currentNumb); 

    if (operator=== "+" ) {
    previousNumb= previousNumb + currentNumb;
} else if (operator === "-") {
    previousNumb= previousNumb - currentNumb;
} else if (operator === "x") {
    previousNumb= previousNumb * currentNumb;
} else if (operator === "/") {
    previousNumb= previousNumb / currentNumb;
} 

previousDisplayNum.textContent= "";
currentDisplayNum.textContent= previousNumb;
}


function clearDisplay() {
currentNumb= "";
previousNumb= "";
operator= "";
previousDisplayNum.textContent= "";
currentDisplayNum.textContent= 0;

}
// write delete function
    //use slice
    //if number is current number number is not empty string
    //if current number is empty string display zero

function deleteNumber () {
    if (currentNumb != "") {
        currentNumb= currentNumb.slice (0, -1);
        currentDisplayNum.textContent=currentNumb;
    }
}

// add function to a button


