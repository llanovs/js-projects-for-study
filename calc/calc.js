let number1;
let number2;
let addButton;
let subButton;
let divideButton;
let multiplyButton;
let output;

setValues();

/**
 * Get inputs and buttons values from html page
 * use # for element id in tag, for example,
 * <button id="divide"> or <input type="number" id="numb1"/>
 */
function setValues(){
    number1 = document.querySelector("#numb1");
    number2 = document.querySelector("#numb2");
    addButton = document.querySelector("#add");
    subButton = document.querySelector("#sub");
    divideButton = document.querySelector("#divide");
    multiplyButton = document.querySelector("#multiply");
    output = document.querySelector("#output");
    addListenes();
}

/**
 * Set listeners for button click Event
 */
function addListenes(){
    addButton.addEventListener("click", addHandler);
    subButton.addEventListener("click", subHandler);
    multiplyButton.addEventListener("click",  multiplyHandler);
    divideButton.addEventListener("click", divideHandler);
}

/**
 * Set result to html tag
 * For example,  <div id="output">
 */
function printResult(result){
    output.innerHTML = `Result: ${result}`;
}

function addHandler(){
    printResult(Number(number1.value) + Number(number2.value));
}

function subHandler(){
    printResult(number1.value - number2.value);
}

function multiplyHandler() {
    printResult(Number(number1.value) * Number(number2.value));
}
function divideHandler() {
    printResult(Number(number1.value) / Number(number2.value));
}
