document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    // Get form data values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Form data:', { email, password });

    
    try {
        const response = await fetch('https://registro-usuarios-banco-virtual.onrender.com/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }) 
        });

        
        if (response.ok) {
            const data = await response.json(); 
            console.log('Login successful:', data);
            alert('Login successful!');
        } else {
            const data = await response.json(); 
            alert('Error: ' + data.message); 
        }
    } catch (error) {
        
        console.error('Error:', error);
        alert('There was a problem with the login.');
    }
});
