const titlu = document.querySelector(".titlu")
const dataText = document.querySelector(".date")
const butonText = document.querySelectorAll(".unbuton")


fetch("/json/stiri.json")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[1].titlu
    titlu.textContent = data.Stiri[1].titlu
    dataText.textContent = data.Stiri[1].data
    for(var i=0;i<butonText.length;i++){
        for(var j=0;j<data.Stiri[1].buton.length;j++){
            butonText[i].textContent = data.Stiri[1].buton[j]
        }
    }
})