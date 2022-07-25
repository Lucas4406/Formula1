const templateCursa = document.querySelector("#curse-template")
const tabelContainer = document.querySelector(".tabel-container-curse")
const titluPagina = document.querySelector(".titlu-pagina-curse")
fetch("https://ergast.com/api/f1/2022/results.json?limit=1000")
.then(response => 
    response.json()
)
.then(result => {
    const constructorCard = templateCursa.content.cloneNode(true).children[0]
    const numeCursa  = constructorCard.querySelector(".nume-cursa")
    const dataCursa  = constructorCard.querySelector(".data-cursa")
    const locCursa  = constructorCard.querySelector(".loc-cursa")
    const pozitie = constructorCard.querySelector(".pozitie")
    const numePilot = constructorCard.querySelector(".nume-pilot")
    const echipaPilot = constructorCard.querySelector(".echipa-pilot")
    const status = constructorCard.querySelector(".status-status")
    const fastestLap = constructorCard.querySelector(".fastest-lap")
    console.log(result.MRData.RaceTable.Races[0])
})