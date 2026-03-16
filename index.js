//1 завдання
let a = 5;
let b = 3.14;
let c = "hello";
let d = true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

a = "now it's a string";
b = 3.14;
c = false;
d = 42;

let e = Number(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

let o = {
    name: "John",
    surname: "Doe",
    age: 30,
    isStudent: true
}

console.log(JSON.stringify(o));

//2 завдання
let x = Number(prompt("Введіть число:"));
let y = Number(prompt("Введіть друге число:"));
let z = Number(prompt("Введіть третє число:"));

let s = (x + y + z) / 3;
console.log("Середнє арифметичне: " + s);

console.log("Модуль чисел:", Math.abs(x), Math.abs(y), Math.abs(z));
console.log("Округлення в більшу сторону:", Math.ceil(x), Math.ceil(y), Math.ceil(z));
console.log("Округлення в меншу сторону:", Math.floor(x), Math.floor(y), Math.floor(z));
console.log("Піднесення до степеня:", Math.pow(x), Math.pow(y), Math.pow(z));

function fun(a, b)  {
    return a % b === 0;
}
console.log("Ділення на 5:", fun(x, 5), fun(y, 5), fun(z, 5));
console.log("Ділення на 7:", fun(x, 7), fun(y, 7), fun(z, 7));

function triangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}
console.log("Чи можна утворити трикутник:", triangle(x, y, z));

//3 завдання
let qq = Number(prompt("Введіть число:"));
let ww = Number(prompt("Введіть друге число:"));
let ee = Number(prompt("Введіть третє число:"));

let max = Math.max(qq, ww, ee);
let min = Math.min(qq, ww, ee);
console.log("Максимальне число:", max);
console.log("Мінімальне число:", min);

let rr = (qq % 2 === 0) || (ww % 2 === 0) || (ee % 2 === 0);
console.log("Чи є хоча б одне парне число:", rr);

let first = 2;
let second = 1;
let third = 3;

let t = (first > second) && (second < third);
console.log("Умова:", t);

//4 завдання
let name = String(prompt("Введіть ім'я:"));
let age = Number(prompt("Введіть рік вашого народження:"));
let city = String(prompt("Введіть місце проживання:"));

let ff = 2026;
let currentAge = ff - age;
console.log("Тобі " + currentAge + " років");

let st = "Київ";
if (city === "Київ") {
    console.log("Ти живеш у Києві");
} else {
    console.log("Ти не живеш у Києві");
}

if (currentAge <= 10) {
    console.log("Ви дитина");
} else if (currentAge <= 18) {
    console.log("Ви підліток");
} else if (currentAge <= 60) {
    console.log("Ви дорослий");
} else {
    console.log("Ви літня людина");
}
