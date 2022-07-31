fetch("https://aqueous-escarpment-24578.herokuapp.com/https://api-formula1.herokuapp.com/stiri")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[3].titlu
})