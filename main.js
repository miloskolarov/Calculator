let currentNumb= "";
let previousNumb="";
let operator= "";

const currentDisplayNum= document.querySelector (".currentNumb");
const previousDisplayNum= document.querySelector (".previousNumb");

const operators= document.querySelectorAll (".operator");
const equal= document.querySelector (".equal");
const numb= document.querySelectorAll (".number");

const clear= document.querySelector (".clear");
const del= document.querySelector (".delete");

numb.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        printNum (e.target.textContent);
    });

}) ;

function printNum(number) {
   if (currentNumb.length <= 12) {currentNumb+= number;
    currentDisplayNum.textContent= currentNumb;}
}

