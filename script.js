// let number be the number of stairs in staircase

// let symbol be the contain of our stairs

// we use do n while to check if the number entered is actually a number
do {
    var number = +prompt('Введите число')
} while (isNaN(number) || number===0)


let symbol = prompt('Введите символ')

let end = prompt('Введите конечный символ')

// use for 
// i to posses to 1
// step = '' means that our symbol can be both either a number or symbol
// stp += means that we posses the symbol and add another symbol added

for (let i=1, result=''; i<=number; i++) {
    result+= symbol;
    console.log(result + end);
}
