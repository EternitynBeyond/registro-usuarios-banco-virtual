document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const data = {
        email: email,
        password: password
    };

    try {
        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Login successful!');
            console.log(result);
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        alert('There was a problem with the login.');
        console.error(error);
    }
});
