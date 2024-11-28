document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Form data:', { username, email, password }); 

    
    fetch('https://registro-usuarios-banco-virtual.onrender.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ username, email, password }) 
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        if (data.message) {
            alert(data.message); 
        } else {
            alert("Error registering user!"); 
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the registration.');
    });
});
