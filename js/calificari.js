const qualiTemplate = document.querySelector("#quali-template")
const contentContainer = document.querySelector(".content-container")
fetch("https://ergast.com/api/f1/2022/qualifying.json?limit=1000")
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
        const locCursa = qualiCard.querySelector(".loc-cursa")
        var lengthQuali = data.MRData.RaceTable.Races.length
        for(var i=lengthQuali-1;i>=0;i--){
            var newQualiCard = document.createElement("div")
            numeCursa.textContent = data.MRData.RaceTable.Races[i].Circuit.circuitName
            locCursa.textContent = data.MRData.RaceTable.Races[i].Circuit.Location.country
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[i].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            for(var j=0;j<data.MRData.RaceTable.Races[i].QualifyingResults.length;j++){
                numePilot[j].textContent = data.MRData.RaceTable.Races[i].QualifyingResults[j].position + '.' + " " + data.MRData.RaceTable.Races[i].QualifyingResults[j].Driver.givenName + " " + data.MRData.RaceTable.Races[i].QualifyingResults[j].Driver.familyName
                q1[j].textContent = data.MRData.RaceTable.Races[i].QualifyingResults[j].Q1
                if(data.MRData.RaceTable.Races[i].QualifyingResults[j].Q1 === undefined || data.MRData.RaceTable.Races[i].QualifyingResults[j].Q1 === ""){
                    const scrisq1 = document.createElement("p")
                    scrisq1.classList.add("neparticipat")
                    scrisq1.textContent = "neparticipat"
                    q1[j].appendChild(scrisq1)
                }
                q2[j].textContent = data.MRData.RaceTable.Races[i].QualifyingResults[j].Q2
                if(data.MRData.RaceTable.Races[i].QualifyingResults[j].Q2 === undefined || data.MRData.RaceTable.Races[i].QualifyingResults[j].Q2 === ""){
                    const scrisq2 = document.createElement("p")
                    scrisq2.classList.add("neparticipat")
                    scrisq2.textContent = "neparticipat"
                    q2[j].appendChild(scrisq2)
                }
                q3[j].textContent = data.MRData.RaceTable.Races[i].QualifyingResults[j].Q3
                if(data.MRData.RaceTable.Races[i].QualifyingResults[j].Q3 === undefined || data.MRData.RaceTable.Races[i].QualifyingResults[j].Q3 === ""){
                    const scrisq3 = document.createElement("p")
                    scrisq3.classList.add("neparticipat")
                    scrisq3.textContent = "neparticipat"
                    q3[j].appendChild(scrisq3)
                }
            }
            newQualiCard.classList.add("tabel-container")
            newQualiCard.innerHTML = qualiCard.innerHTML
            contentContainer.appendChild(newQualiCard)
            darkMode = localStorage.getItem("darkMode")
            if(darkMode === "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
        }
    })