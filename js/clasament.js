const cardTemplate = document.querySelector("#templateConst")
const contentContainer = document.querySelector(".content-container")
fetch("http://ergast.com/api/f1/current/constructorStandings.json")
.then(response => 
    response.json()
)
.then(data => {
    const constructorCard = cardTemplate.content.cloneNode(true).children[0]
    const pozitie = constructorCard.querySelector("#pozitie")
    const numeEchipa = constructorCard.querySelector("#numeEchipa")
    const curseCastigate = constructorCard.querySelector("#curseCastigate")
    const nrPuncte = constructorCard.querySelector("#nrpuncte")
    for(var i=0;i<data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length;i++){
        var newConstructor = document.createElement("div")
        pozitie.textContent = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].position
        numeEchipa.textContent = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.name
        curseCastigate.textContent = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].wins
        nrPuncte.textContent = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].points
        newConstructor.classList.add("constructor-container")
        newConstructor.innerHTML = cardTemplate.innerHTML
        contentContainer.appendChild(newConstructor)
        console.log(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.name)
    }
})