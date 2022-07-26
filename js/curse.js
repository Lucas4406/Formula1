const templateCursa = document.querySelector("#curse-template")
const tabelContainer = document.querySelector(".tabel-container-curse")
const titluPagina = document.querySelector(".titlu-pagina-curse")
fetch("https://ergast.com/api/f1/2022/results.json?limit=1000")
.then(response => 
    response.json()
)
.then(result => {
    console.log(result);
    const constructorCard = templateCursa.content.cloneNode(true).children[0]
    const numeCursa  = constructorCard.querySelector(".nume-cursa")
    const dataCursa  = constructorCard.querySelector(".data-cursa")
    const locCursa  = constructorCard.querySelector(".loc-cursa")
    const pozitie = constructorCard.querySelectorAll(".pozitie")
    const numePilot = constructorCard.querySelectorAll(".nume-pilot")
    const echipaPilot = constructorCard.querySelectorAll(".echipa-pilot")
    const status = constructorCard.querySelectorAll(".status-status")
    const fastestLap = constructorCard.querySelectorAll(".fastet-lap")
    titluPagina.textContent = "Rezultate curse" + " " + result.MRData.RaceTable.Races[0].season
    for(var i = result.MRData.RaceTable.Races.length-1;i>=0;i--){
        var newConstructor = document.createElement("div")
        numeCursa.textContent = result.MRData.RaceTable.Races[i].raceName
        dataCursa.textContent = new Date(result.MRData.RaceTable.Races[i].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
        locCursa.textContent = result.MRData.RaceTable.Races[i].Circuit.Location.country
        for(var j=0;j<result.MRData.RaceTable.Races[i].Results.length;j++){
            pozitie[j].textContent = result.MRData.RaceTable.Races[i].Results[j].position + "."
            numePilot[j].textContent = result.MRData.RaceTable.Races[i].Results[j].Driver.givenName + " " + result.MRData.RaceTable.Races[i].Results[j].Driver.familyName
            echipaPilot[j].textContent = result.MRData.RaceTable.Races[i].Results[j].Constructor.name
            status[j].textContent = result.MRData.RaceTable.Races[i].Results[j].status
            /* fastestLap[j].textContent = result.MRData.RaceTable.Races[i].Results[j].FastestLap.Time.time */
        }
        newConstructor.classList.add("tabel-cursa")
        newConstructor.innerHTML = constructorCard.innerHTML
        tabelContainer.appendChild(newConstructor)
    }
})