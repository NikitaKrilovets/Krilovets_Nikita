//Завдання 1
let a = String(prompt("Введіть ваш вік"));

console.log(a);

if (a < 18) {
        alert("Вам заборонено вхід");
}   else if (a >= 18 && a <= 65) {
        alert("Ласкава просимо!");
}   else {
        alert("Будь ласка, будьте обережні!");
}

//Завдання 2
let b = Number(prompt("Введіть число"));

for(let i = 2; i <= b; i++) {
    console.log(i);
}

//Завдання 3
let c = Number(prompt("Введи число:"));
let d = 1;

while (c > 1) {
    d *= c;
    c--;
}

console.log(d);

//Завдання 4
let first = Number(prompt("Введіть перше число:"));
let second = Number(prompt("Введіть друге число:"));
let operation = prompt("Введіть операцію (+, -, *, /):");

switch (operation) {
    case "+":
        console.log(first + second);
        break;
    case "-":
        console.log(first - second);
        break;
    case "*":
        console.log(first * second);
        break;
    case "/":
        console.log(first / second);
        break;
}

if (second === 0) {
    console.log("Число на нуль не ділится");
} 

//Завдання 5
let w = Number(prompt("Введіть число:"));
let rundom = Math.floor(Math.random() * 100) + 1;

do {
    if (w < rundom) {
        alert("Загадане число більше");
        break;
    }
    else if (w > rundom) {
        alert("Загадане число менше");
        break;
    }
    else {
        alert("Вітаємо! Ви вгадали число!");
        break;
    }
} while (true);
