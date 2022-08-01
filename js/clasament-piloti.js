const templateCard = document.querySelector("#piloticlasament")
const pilotiGrid = document.querySelector(".piloti-grid")
fetch("https://aqueous-escarpment-24578.herokuapp.com/https://f1scraper44.herokuapp.com/clasament-piloti")
.then(response => 
    response.json()
)
.then(result => {
    const constructorCard = templateCard.content.cloneNode(true).children[0]
    const pozitie = constructorCard.querySelector(".pozitie")
    const nrpuncte = constructorCard.querySelector(".nrpuncte")
    const culoarePilot = constructorCard.querySelector(".culoare-pilot")
    const firstN = constructorCard.querySelector(".firstname")
    const lastN = constructorCard.querySelector(".lastname")
    const steag = constructorCard.querySelector(".img-steag")
    const echipa = constructorCard.querySelector(".echipa")
    const pozaPilot = constructorCard.querySelector(".poza-pilot")
    const nrPilot = constructorCard.querySelector(".nr-pilot")
    for(var i=0;i<result.length;i++){
        var newConstructor = document.createElement("div")
        pozitie.textContent = result[i].position
        nrpuncte.textContent = result[i].points
        culoarePilot.style.color = result[i].driverColor
        firstN.textContent = result[i].firstName
        lastN.textContent = result[i].lastName
        steag.src = result[i].driverFlag
        echipa.textContent = result[i].team
        pozaPilot.src = result[i].driverPhoto
        nrPilot.src = result[i].driverNumber
        newConstructor.classList.add("pilot-container")
        newConstructor.innerHTML = constructorCard.innerHTML
        pilotiGrid.appendChild(newConstructor)
    }
})