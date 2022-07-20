const textEchipa = document.querySelectorAll(".text-echipa")
const textTara = document.querySelectorAll(".text-tara")
const textPodium = document.querySelectorAll(".text-podium")
const textPuncte = document.querySelectorAll(".text-puncte")
const textGp = document.querySelectorAll(".text-gp")
const textCampionate = document.querySelectorAll(".text-campionate")
const textClCursa = document.querySelectorAll(".text-cl-cursa")
const textClQuali = document.querySelectorAll(".text-cl-quali")
const textData = document.querySelectorAll(".text-data")
const textLoc = document.querySelectorAll(".text-loc")
fetch("/json/piloti.json")
.then(response => 
    response.json()
)
.then(data => {
    textEchipa[0].innerText =" " +  data.Charles[0].Echipa
    textTara[0].innerText=" " + data.Charles[0].Tara
    textPodium[0].innerText=" " + data.Charles[0].Podium
    textPuncte[0].innerText=" " + data.Charles[0].Puncte
    textGp[0].innerText=" " + data.Charles[0].Gp
    textCampionate[0].innerText=" " + data.Charles[0].Campionate
    textClCursa[0].innerText=" " + data.Charles[0].ClCursa
    textClQuali[0].innerText=" " + data.Charles[0].ClQuali
    textData[0].innerText=" " + data.Charles[0].Data
    textLoc[0].innerText=" " + data.Charles[0].Loc
}
);