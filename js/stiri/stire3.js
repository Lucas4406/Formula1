fetch("/json/stiri.json")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[2].titlu
})