async function bruv () {
    const stiritemplate  = document.querySelector("#template")
    const contentGrid = document.querySelector(".content-grid")
    var j
    for(j=0;j<22;j++){
        var link = "https://aqueous-escarpment-24578.herokuapp.com/https://f1scraper44.herokuapp.com/stiri-translate/" + j
        await fetch(link)
        .then(response => 
            response.json()
            )
            .then(data => {
                const card = stiritemplate.content.cloneNode(true).children[0]
                const stireText = card.querySelector("#stiretext")
                const pozaStire = card.querySelector("#stirephoto")
                var newCard = document.createElement("a")
                stireText.textContent = data.titlu
                pozaStire.src = `${data.poza}`
                newCard.href=data.linkuri
                newCard.target = "_blank"
                newCard.classList.add("ltag")
                newCard.innerHTML = card.innerHTML
                contentGrid.appendChild(newCard)
                darkMode = localStorage.getItem("darkMode")
                if(darkMode === "enabled"){
                    enableDarkMode()
                } else{
                    disableDarkMode()
                }
        })
    }
}
window.document.onload = bruv()