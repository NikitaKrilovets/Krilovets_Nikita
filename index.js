let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let colorHistory = JSON.parse(localStorage.getItem('Background')) || [];

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.style.backgroundColor = savedTheme;
}

document.body.style.transition = 'background-color 0.9s';

btn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    colorHistory.push('white');
    localStorage.setItem('Background', JSON.stringify(colorHistory));
});

btn2.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    colorHistory.push('black');
    localStorage.setItem('Background', JSON.stringify(colorHistory));
});

btn3.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
    colorHistory.push('green');
    localStorage.setItem('Background', JSON.stringify(colorHistory));
});