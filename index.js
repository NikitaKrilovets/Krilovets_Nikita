let users = document.getElementById('users');
let error = document.getElementById('error');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        } 
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            let li = document.createElement('li');
            li.textContent = "Name: " + user.name + " Email: " + user.email;
            users.appendChild(li);
        });
    })
    .catch(err => {
        error.textContent = 'Error fetching users';
    });