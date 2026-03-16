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
