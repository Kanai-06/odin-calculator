const add = function(a, b) {
	if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
    
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const divide = function(a, b) {
    if(b === 0 || typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";

	return Math.round(((a / b) + Number.EPSILON) * 1000000) / 1000000;
};

const multiply = function(a, b) {
    if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";

    return a * b;
};

const power = function(a, b) {
    if(typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";

	return Math.round((Math.pow(a, b) + Number.EPSILON) * 1000000) / 1000000;
};

const factorial = function(a) {
	if(a < 0 || typeof(a) !== "number") return "ERROR";

    if(a === 0){
        return 1;
    }else {
        return factorial(a - 1) * a;
    }
}; 

const percent = function(a, b){
    if(!(b >= 0 || b <= 100) || typeof(a) !== "number" || typeof(b) !== "number") return "ERROR";
    
    return Math.round(((a * (b / 100)) + Number.EPSILON) * 1000000) / 1000000;
}