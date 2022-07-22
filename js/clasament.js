const cardTemplate = document.querySelector("#templateConst")
const contentContainer = document.querySelector(".content-container")
fetch("https://ergast.com/api/f1/current/constructorStandings.json")
.then(response => 
    response.json()
)
.then(result => {
    const constructorCard = cardTemplate.content.cloneNode(true).children[0]
    const pozitie = constructorCard.querySelector("#pozitie")
    const numeEchipa = constructorCard.querySelector("#numeEchipa")
    const curseCastigate = constructorCard.querySelector("#curseCastigate")
    const nrPuncte = constructorCard.querySelector("#nrpuncte")
    for(var i=0;i<result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.length;i++){
        var newConstructor = document.createElement("div")
        pozitie.textContent = result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].position
        numeEchipa.textContent = result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].Constructor.name
        curseCastigate.textContent = result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].wins
        nrPuncte.textContent = result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[i].points
        newConstructor.classList.add("constructor-container")
        newConstructor.innerHTML = constructorCard.innerHTML
        contentContainer.appendChild(newConstructor)
        darkMode = localStorage.getItem("darkMode")
        if(darkMode !== "enabled"){
            enableDarkMode()
        } else{
            disableDarkMode()
        }
    }
})