const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', "Banana", 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]


let val;

val = numbers.length;

val = Array.isArray(numbers);

val = numbers[0];
val = numbers[3];

numbers[2] = 100;
val = numbers.indexOf(36);

numbers.push(250);

numbers.unshift(120);

numbers.pop()

numbers.shift()

numbers.splice(1, 3)

numbers.reverse()

val = numbers.concat(numbers2)

val = fruit.sort()
val = numbers.sort()


val = numbers.sort(function (x, y) {
    return x - y
})

val = numbers.sort(function (x, y) {
    return y - x
})

function under50(num){
    return num < 50;
}

function over50(num){
    return num > 50;
}

val = numbers.find(under50)
val = numbers.find(over50)



console.log(numbers);
console.log(val);