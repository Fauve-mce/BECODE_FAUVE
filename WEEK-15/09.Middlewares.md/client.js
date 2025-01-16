fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
        'Authorization': '123', // Ajouter l'en-tête Authorization correct
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // envoyer un corps de requête
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
