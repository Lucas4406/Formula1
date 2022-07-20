const template  = document.querySelector("#template")
const contentGrid = document.querySelector(".content-grid")
fetch("/json/stiri.json")
.then(response => 
    response.json()
)
.then(data => {
        const card = template.content.cloneNode(true).children[0]
        const stireText = card.querySelector("#stiretext")
        const linkTag = card.querySelector("#template a")
        const pozaStire = card.querySelector("#stirephoto")
        stireText.textContent = data.Stiri[0].titlu
        pozaStire.src = `${data.Stiri[0].poza}`
        console.log(`${data.Stiri[0].link}`);
        contentGrid.append(card)
})