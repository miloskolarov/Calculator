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
const del= document.querySelector (".delete");

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

// Add calculator function
    // Add an event listener to equal

    // Make function to calculate depending on the operator
    //Convert previousNumb and currentNumb to Number(method)
    //Use else if statements for each operator

function calculate() {
    previousNumb= Number (previousNumb);
    currentNumb= Number (currentNumb); 

    if (operator=== "+" ) {
    previousNumb= previousNumb + currentNumb;
};
previousDisplayNum.textContent= "";
currentDisplayNum.textContent= previousNumb;
}


// Write a function to display results



