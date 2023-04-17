function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(resp => resp.json())
        .then(function(obj) {
            const p = document.createElement('p');
            p.textContent = obj.id;
            document.querySelector('body').appendChild(p);
        })
        .catch(function(error) {
            const p = document.createElement('p');
            p.textContent = error.message;
            document.querySelector('p').appendChild(p);
        });
};
