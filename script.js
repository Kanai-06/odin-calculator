let functions = {
    add : function(a, b) {
        if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
        
        return a + b;
    },

    subtract : function(a, b) {
        if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
        
        return a - b;
    },

    divide : function(a, b) {
        if(typeof(a) !== "number" || typeof(b) !== "number" || b === 0) return "ERROR";

        return Math.round(((a / b) + Number.EPSILON) * 100) / 100;
    },

    multiply : function(a, b) {
        if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";

        return a * b;
    },

    percent : function(a, b){
        if(typeof(a) !== "number" || typeof(b) !== "number" ) return "ERROR";
        
        return Math.round(((a * (b / 100)) + Number.EPSILON) * 100) / 100;
    }
};

const factorial = function(a) {
	if(typeof(a) !== "number" || a < 0) return "ERROR";

    if(a === 0){
        return 1;
    }else {
        return factorial(a - 1) * a;
    }
}; 



const sqrt = function(a){
    if(typeof(a) !== "number" || a < 0) return "ERROR";

    return Math.round(((Math.sqrt(a)) + Number.EPSILON) * 100) / 100;
}

let numberOne;
let numberTwo;
let operationToDo;
let M_value = 0;

const display = document.querySelector("#display");

const ON_CE = document.querySelector("#ON_CE");
const MRC = document.querySelector("#MRC");
const M_minus = document.querySelector("#M_minus");
const M_plus = document.querySelector("#M_plus");

M_plus.addEventListener("click", () => {
    M_value+= Number(display.textContent);
})

M_minus.addEventListener("click", () => {
    M_value-= Number(display.textContent);
})

MRC.addEventListener("click", () => {
    display.textContent = M_value;
    M_value = 0;
})

ON_CE.addEventListener("click", () => {
    numberOne = null;
    numberTwo = null;
    operationToDo = null;
    display.textContent = "";
})

const operationsLeft = document.querySelectorAll("#operations #left button");
const operationsRight = document.querySelectorAll("#operations #right button");

const equals = document.querySelector("#equals");

function displayValue(value){
    if(String(value).length > 10){
        display.textContent = "ERROR";
    }
    
    if(String(value).indexOf('.') > -1){
        display.textContent = value;
    }else{
        display.textContent = value + '.';
    }
};

equals.addEventListener("click", () => {
    numberTwo = Number(display.textContent);
    displayValue(functions[operationToDo](numberOne, numberTwo));
});

operationsLeft.forEach(operation => {
    operation.addEventListener("click", () => {
        switch(operation.id){
            case "factorial":
                displayValue(factorial(Number(display.textContent)));
                break;
            case "sqrt":
                displayValue(sqrt(Number(display.textContent)));
                break;
            case "percent":
                numberOne = Number(display.textContent);
                display.textContent = "";
                operationToDo = "percent";
                break;
            case "equals":
                break;
            default:
                display.textContent+= operation.textContent;
                break;
        }
    })
});

operationsRight.forEach(operation => {
    operation.addEventListener("click", () => {
        numberOne = Number(display.textContent);
        display.textContent = "";
        operationToDo = operation.id;
    })
});