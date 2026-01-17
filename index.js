const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const seedColor = document.getElementById('seed-color').value
    console.log(seedColor)
})




fetch(' https://www.thecolorapi.com/scheme', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify()
})
    .then(res => res.json())
    .then(data => console.log(data))


fetch()
