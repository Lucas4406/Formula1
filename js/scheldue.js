fetch("https://ergast.com/api/f1/2022.json?limit=1000")
    .then(response => 
        response.json()
    )
    .then(data => {
        console.log(data.MRData.RaceTable.Races);
    })