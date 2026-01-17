const form = document.getElementById('form');
const colorContainer = document.getElementById('color-scheme');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const seedColor = document.getElementById('seed-color').value.slice(1)
    const schemeMode = document.getElementById('options').value

    fetch(` https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
        })
    .then(res => res.json())
    .then(data => {
        data.colors.forEach(color =>{
            console.log(color.hex.value)
        })
        
    })   
    
})









