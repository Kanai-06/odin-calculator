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
	if(typeof(a) !== "number" || a < 0 || !Number.isInteger(a)) return "ERROR";

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

const clickEvent = new Event('click');

document.addEventListener('keypress', (e) => {
    switch (e.key) {
        case 'c':
            ON_CE.dispatchEvent(clickEvent);
            break;
        case '!':
            document.querySelector('#factorial').dispatchEvent(clickEvent);
            break;
        case '√':
            document.querySelector('#sqrt').dispatchEvent(clickEvent);
            break;
        case '%':
            document.querySelector('#percent').dispatchEvent(clickEvent);
            break;
        case '7':
            document.querySelector('#seven').dispatchEvent(clickEvent);
            break;
        case '8':
            document.querySelector('#eight').dispatchEvent(clickEvent);
            break;
        case '9':
            document.querySelector('#nine').dispatchEvent(clickEvent);
            break;
        case '4':
            document.querySelector('#four').dispatchEvent(clickEvent);
            break;
        case '5':
            document.querySelector('#five').dispatchEvent(clickEvent);
            break;
        case '6':
            document.querySelector('#six').dispatchEvent(clickEvent);
            break;
        case '1':
            document.querySelector('#one').dispatchEvent(clickEvent);
            break;
        case '2':
            document.querySelector('#two').dispatchEvent(clickEvent);
            break;
        case '3':
            document.querySelector('#three').dispatchEvent(clickEvent);
            break;
        case '0':
            document.querySelector('#zero').dispatchEvent(clickEvent);
            break;
        case '.':
            document.querySelector('#point').dispatchEvent(clickEvent);
            break;
        case '=':
        case 'Enter':
            document.querySelector('#equals').dispatchEvent(clickEvent);
            break;
        case '/':
            document.querySelector('#divide').dispatchEvent(clickEvent);
            break;
        case '*':
            document.querySelector('#multiply').dispatchEvent(clickEvent);
            break;
        case '-':
            document.querySelector('#subtract').dispatchEvent(clickEvent);
            break;
        case '+':
            document.querySelector('#add').dispatchEvent(clickEvent);
            break;
        default:
            break;
    }
})