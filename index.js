//Завдання 1
let a = [1, 2, 3, 4, 5];
let b = a[0] + a[1] + a[2] + a[3] + a[4];
console.log("Середнє арифметичне: " + b / a.length);
console.log("Максимальне число: " + Math.max(...a));
console.log("Мінімальне число: " + Math.min(...a));
console.log("У порядку зростання: " + a.sort((x, y) => x - y));

//Завдання 2
let people = [
    {
        name: "Іван",
        age: 25,
        city: "Київ",
    },

    {
        name: "Олена",
        age: 15,
        city: "Львів",
    },

    {
        name: "Петро",
        age: 22,
        city: "Одеса",
    },

    {
        age: 5,
        city: "Харків",
    },

    {
        age: 28,
        city: "Дніпро",
    },
];

let age = people.filter(person => person.age >= 18);
console.log("Люди, яким більше 18 років:", age);

let name = people.filter(person => person.name);
console.log("Люди з ім'ям:", name);

//Завдання 4
let student1 = {
    name: "Іван",
    rateMath: 4,
    ratePhysics: 7,
    rateEnglish: 10,
}

let student2 = {
    name: "Олена",
    rateMath: 9,
    ratePhysics: 5,
    rateEnglish: 10,
}

let student3 = {
    name: "Петро",
    rateMath: 7,
    ratePhysics: 6,
    rateEnglish: 2,
}

let avargerate1 = (student1.rateMath + student1.ratePhysics + student1.rateEnglish) / 3;
let avargerate2 = (student2.rateMath + student2.ratePhysics + student2.rateEnglish) / 3;
let avargerate3 = (student3.rateMath + student3.ratePhysics + student3.rateEnglish) / 3;

console.log("Середній бал Івана:", avargerate1);
console.log("Середній бал Олени:", avargerate2);
console.log("Середній бал Петра:", avargerate3);

//Завдання 3
let z = [
    {
        name: "Яблуко",
        category: "Фрукти",
    },

    {
        name: "Морква",
        category: "Овочі",
    },

    {
        name: "Груша",
        category: "Фрукти",
    },

    {
        name: "Картопля",
        category: "Овочі",
    },
];

console.log("Фрукти:", z.filter(item => item.category === "Фрукти"));
console.log("Овочі:", z.filter(item => item.category === "Овочі"));
