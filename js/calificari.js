const qualiTemplate = document.querySelector("#quali-template")
const contentContainer = document.querySelector(".content-container")
/* for(var i=12;i>0;i--){
    fetch(`https://ergast.com/api/f1/2022/${i}/qualifying.json`)
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
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        darkMode = localStorage.getItem("darkMode")
        if(darkMode !== "enabled"){
            enableDarkMode()
        } else{
            disableDarkMode()
        }
    })
} */
fetch("https://ergast.com/api/f1/2022/12/qualifying.json")
    .then(response => 
        response.json()
    )
    .then(data => {
        darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/11/qualifying.json")
})
        .then(response => 
            response.json()
        )
        .then(data => {
            darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
                dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
                numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
                q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
                q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
                if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                    const scrisq1 = document.createElement("p")
                    scrisq1.classList.add("neparticipat")
                    scrisq1.textContent = "neparticipat"
                    q1[i].appendChild(scrisq1)
                }
                if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                    const scrisq2 = document.createElement("p")
                    scrisq2.classList.add("neparticipat")
                    scrisq2.textContent = "neparticipat"
                    q2[i].appendChild(scrisq2)
                }
                q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
                if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                    const scrisq3 = document.createElement("p")
                    scrisq3.classList.add("neparticipat")
                    scrisq3.textContent = "neparticipat"
                    q3[i].appendChild(scrisq3)
                }
            }
            newQualiCard.classList.add("tabel-container")
            newQualiCard.innerHTML = qualiCard.innerHTML
            contentContainer.appendChild(newQualiCard)
            contentContainer.appendChild(newQualiCard)
            return fetch("https://ergast.com/api/f1/2022/10/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
        darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/9/qualifying.json")
})  
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/8/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/7/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/6/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/5/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/4/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/3/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/2/qualifying.json")
})
    .then(response => 
        response.json()
    )
    .then(data => {
darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        return fetch("https://ergast.com/api/f1/2022/1/qualifying.json")
})
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
            dataCursa.textContent = new Date(data.MRData.RaceTable.Races[0].date).toISOString().replace(/T.*/,'').split('-').reverse().join('-')
            numePilot[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].position + '.' + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.givenName + " " + data.MRData.RaceTable.Races[0].QualifyingResults[i].Driver.familyName
            q1[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1
            q2[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q1 === ""){
                const scrisq1 = document.createElement("p")
                scrisq1.classList.add("neparticipat")
                scrisq1.textContent = "neparticipat"
                q1[i].appendChild(scrisq1)
            }
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q2 === ""){
                const scrisq2 = document.createElement("p")
                scrisq2.classList.add("neparticipat")
                scrisq2.textContent = "neparticipat"
                q2[i].appendChild(scrisq2)
            }
            q3[i].textContent = data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3
            if(data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === undefined || data.MRData.RaceTable.Races[0].QualifyingResults[i].Q3 === ""){
                const scrisq3 = document.createElement("p")
                scrisq3.classList.add("neparticipat")
                scrisq3.textContent = "neparticipat"
                q3[i].appendChild(scrisq3)
            }
        }
        newQualiCard.classList.add("tabel-container")
        newQualiCard.innerHTML = qualiCard.innerHTML
        contentContainer.appendChild(newQualiCard)
        darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
})
const loader = document.getElementById("preload")
setTimeout(function(){
    loader.style.display = "none"
    contentContainer.style.display ="flex"
}, 2000)