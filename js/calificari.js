fetch("https://ergast.com/api/f1/2022/qualifying/1.json")
.then(response => 
    response.json()
)
.then(data => {
    console.log(data.MRData.RaceTable.Races);
})
