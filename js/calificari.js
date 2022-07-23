const qualiTemplate = document.querySelector("#quali-template")
const contentContainer = document.querySelector(".content-container")
fetch("https://ergast.com/api/f1/2022/1/qualifying.json")
.then(response => 
    response.json()
)
.then(data => {
    const qualiCard = qualiTemplate.content.cloneNode(true).children[0]
    const numePilot = qualiCard.querySelectorAll(".parte-stanga")
    const q1 = qualiCard.querySelectorAll("#q1")
    const q2 = qualiCard.querySelectorAll("#q2")
    const q3 = qualiCard.querySelectorAll("#q3")
    const numeCursa = qualiCard.querySelector(".nume-cursa")
    const dataCursa = qualiCard.querySelector(".data-cursa")
    var newQualiCard = document.createElement("div")
    for(var i=0;i<data.MRData.RaceTable.Races[0].QualifyingResults.length;i++){
        numeCursa.textContent = data.MRData.RaceTable.Races[0].Circuit.circuitName
        dataCursa.textContent = data.MRData.RaceTable.Races[0].date
        numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
        q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
        q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
        if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined){
            const scrisq1 = document.createElement("p")
            scrisq1.classList.add("neparticipat")
            scrisq1.textContent = "neparticipat"
            q2[i].appendChild(scrisq1)
        }
        q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
        if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined){
            const scrisq2 = document.createElement("p")
            scrisq2.classList.add("neparticipat")
            scrisq2.textContent = "neparticipat"
            q3[i].appendChild(scrisq2)
        }
    }
    newQualiCard.classList.add("tabel-container")
    newQualiCard.innerHTML = qualiCard.innerHTML
    contentContainer.appendChild(newQualiCard)
    console.log(data.MRData.RaceTable.Races[0]);
    console.log(data.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.familyName);
    console.log(data.MRData.RaceTable.Races[0].QualifyingResults[0].Driver.familyName);
    console.log(data.MRData.RaceTable.Races[0].QualifyingResults[16].Q2)
    console.log(data.MRData.RaceTable.Races[0].QualifyingResults[0]);
})
