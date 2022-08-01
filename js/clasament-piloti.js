fetch("https://aqueous-escarpment-24578.herokuapp.com/https://f1scraper44.herokuapp.com/clasament-piloti")
.then(response => 
    response.json()
)
.then(result => {
    console.log(result)
})