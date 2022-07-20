fetch("/json/stiri.json")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[0].titlu
})