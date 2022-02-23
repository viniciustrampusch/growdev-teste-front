const lista = document.getElementById('lista');

/*axios.get('http://localhost:8080/aula')
     .then(response => {
        response.data.forEach(user => {
            lista.innerHTML += `
                <li>${user.name}</li>
            `;
        });
     })
     .catch(error => {
         console.log(error);
     });*/
     
async function loadUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    response.data.forEach(user => {
        lista.innerHTML += `
            <li>${user.name}</li>
        `;
    });
}

loadUsers();

/*axios.post('/users', {
    name: 'Vini',
    idade: 18,
    email: ''
});*/