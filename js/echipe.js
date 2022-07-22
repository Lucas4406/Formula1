fetch("http://ergast.com/api/f1/current/constructorStandings.json")
.then(response => 
    response.json()
)
.then(data => {
    for(var i=data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length-2;i>0;i--){
        var echipaUnu = document.getElementById(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i+1].Constructor.constructorId)
        var echipaDoi = document.getElementById(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.constructorId)
        document.getElementById("echipeCont").insertBefore(echipaDoi,echipaUnu)
    }
    for(var i=0;i<data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length;i++){
        var echipaDoi = document.getElementById(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.constructorId)
        echipaDoi.querySelectorAll(".linie")[0].textContent = i+1
    }
})