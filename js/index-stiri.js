const stiritemplate  = document.querySelector("#template")
const contentGrid = document.querySelector(".content-grid")
fetch("/json/stiri.json")
.then(response => 
    response.json()
)
.then(data => {
    const card = stiritemplate.content.cloneNode(true).children[0]
    const stireText = card.querySelector("#stiretext")
    const pozaStire = card.querySelector("#stirephoto")
    for(var i=0;i<data.Stiri.length;i++){
            var newCard = document.createElement("a")
            stireText.textContent = data.Stiri[i].titlu
            pozaStire.src = `${data.Stiri[i].poza}`
            newCard.href=data.Stiri[i].link
            newCard.classList.add("ltag")
            newCard.innerHTML = card.innerHTML
            contentGrid.appendChild(newCard)
            darkMode = localStorage.getItem("darkMode")
            if(darkMode !== "enabled"){
                enableDarkMode()
            } else{
                disableDarkMode()
            }
    }
})