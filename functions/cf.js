
function calculateBill(billAmount, taxRate=0.13, tipRate=0.15) {
    console.log('Running Calculate Bill');
    const total = billAmount +  billAmount * taxRate + billAmount * tipRate;
    return total;
}

const myTotal = calculateBill(100, 0.13)

// console.log(`Your total is $${myTotal}`)

function sayHiTo(firstName){
    return `Hello ${firstName}`;
}

const greeting = sayHiTo("Edis")
console.log(greeting)


function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name = 'Silly Goose'){
    return `HEY ${name.toUpperCase()}`;
}

yell(doctorize('edis'))