// let a is being the number that should be raised to a degree
// let b is degree itself

// with the help of do and while we can clarify if the number or degree follows the rules that has been staited

// the first rule is that number and degree must not be NOT number and must not equel to zero

do {
    var a = +prompt('Введите число')
} while (isNaN(a) || a===0) {
    console.log(a);
}

do {
    var b = +prompt('Введите степень')
} while (isNaN(b) || b===0) {
    console.log(b);
}

// the main concept of thisis the saying that "WHILE this DO another thing"

// in JS double multiplying means rising to de 


let result = a**b

alert(result)

console.log(result);