const form = document.getElementById('form');
const colorContainer = document.getElementById('color-scheme');


form.addEventListener('submit', function (e) {

    e.preventDefault()
    const seedColor = document.getElementById('seed-color').value.slice(1)
    const schemeMode = document.getElementById('options').value

fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}`)
    .then(res => res.json())
    .then(data => {
        let html = ''
        data.colors.forEach(color =>{
            const colorHex = color.hex.value
            const colorImage = color.image.bare
            html += `
            <div class="color-box">
                <img src="${colorImage}" alt="color ${colorHex}"/>
                <div class="code-container">
                    <button class="color-code" id="copy">${colorHex}</button>
                </div>
            </div> 
            `
        })
        colorContainer.innerHTML = html
        const copyButtons = document.querySelectorAll('#copy')
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const colorCode = button.textContent
                navigator.clipboard.writeText(colorCode)
            })
        })
    })   

}) 
