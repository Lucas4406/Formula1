fetch("https://aqueous-escarpment-24578.herokuapp.com/https://f1scraper44.herokuapp.com/stiri")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[2].titlu
})