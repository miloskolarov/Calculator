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
const decimal= document.querySelector (".decimal");
decimal.addEventListener( "click", ()=> addDecimal ());

numb.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        printNum (e.target.textContent);
    });

});

function printNum(number) {
    if (previousNumb!== "" && currentNumb !== "" && operator === "") {
        previousNumb= "";
        currentDisplayNum.textContent= currentNumb;
    }
   if (currentNumb.length <= 12) {currentNumb+= number;
    currentDisplayNum.textContent= currentNumb;}
};

operators.forEach ((btn) => {
    btn.addEventListener("click", (e) => {
        printOp(e.target.textContent);
    });

});

function printOp(op) {
   if (previousNumb=== "") {
     previousNumb= currentNumb;
     multipleNum (op);
   } else if (currentNumb=== "") {
     multipleNum (op);
   } else {
        calculate();
        operator= op;
        currentDisplayNum.textContent= "0";
        previousDisplayNum.textContent= previousNumb + " " + operator;
        
   }
    
   
} 

function multipleNum (text){
    operator= text;
    previousDisplayNum.textContent= previousNumb + " " + operator;
    currentDisplayNum.textContent= "0";
    currentNumb= "";
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
     if (currentNumb <=0) { previousNumb= "Error";
        previousDisplayNum.textContent= "";
        currentDisplayNum.textContent= previousNumb;
        eturn;}
    previousNumb= previousNumb / currentNumb;
} 
    previousNumb= previousNumb.toString();
    displayNumber();

}

function displayNumber () {
    if (previousNumb.length <= 11){
    currentDisplayNum.textContent= previousNumb;
}   else {
    currentDisplayNum.textContent= previousNumb.slice(0, 11)+ "...";
}
    previousDisplayNum.textContent= "";
    operator= "";
    currentNumb= "";
}


function clearDisplay() {
currentNumb= "";
previousNumb= "";
operator= "";
previousDisplayNum.textContent= "";
currentDisplayNum.textContent= 0;

}

function deleteNumber () {
    if (currentNumb != "") {
        currentNumb= currentNumb.slice (0, -1);
        currentDisplayNum.textContent=currentNumb;
    }
}

function addDecimal() {
    if (!currentNumb.includes(".")) {
        currentNumb += ".";
    }
    currentDisplayNum.textContent= currentNumb;
}

// Add multiple number support

//