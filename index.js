//Variant 2
let p = document.querySelector('p');
let buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', function() {
    p.style.color = p.style.color === 'red' ? 'black' : 'red';
});

buttons[1].addEventListener('click', function() {
    p.style.fontSize = p.style.fontSize === '20px' ? '16px' : '20px';
});

buttons[2].addEventListener('click', function() {
    p.style.display = p.style.display === 'none' ? 'block' : 'none';
});

buttons[3].addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'red' ? 'white' : 'red';
});
