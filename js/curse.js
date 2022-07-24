fetch("https://ergast.com/api/f1/2022/results.json?limit=1000")
.then(response => 
    response.json()
)
.then(result => {
    console.log(result.MRData.RaceTable.Races[0]);
})