let profile = document.getElementById('profile');
let user = document.getElementById('user');
let error = document.getElementById('error');

async function getUser() {
    try {
        let responseUser = await fetch('https://jsonplaceholder.typicode.com/users/1');
        let responsePost = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');

        if (!responseUser.ok || !responsePost.ok) {
            throw new Error('Помилка завантаження');
        }
        
        let userData = await responseUser.json();
        let postData = await responsePost.json();

        user.appendChild(document.createElement('p')).innerHTML = `<strong>Ім'я:</strong> ${userData.name}`;
        user.appendChild(document.createElement('p')).innerHTML = `<strong>Email:</strong> ${userData.email}`;
        user.appendChild(document.createElement('p')).innerHTML = `<strong>Місто:</strong> ${userData.address.city}`;

        postData.forEach(post => {
            let postElement = document.createElement('div');
            postElement.innerHTML = `<h3>` + post.title + `</h3>` + `<p>` + post.body + `</p>`;
            posts.appendChild(postElement);
        });

    }   catch (err) {
        error.textContent = 'Помилка завантаження даних';
    }
}
getUser();