const titlu = document.querySelector(".titlu")
const dataText = document.querySelector(".date")
const butonText = document.querySelectorAll(".unbuton")
const facebookBtn = document.querySelector("#facebook")
const twitterBtn = document.querySelector("#twitter")
const pozaStire  = document.querySelector(".poza-stire")
const stireLink = document.querySelectorAll("#stirelink")
const tipStire = document.querySelectorAll("#tipstire")
const textCont = document.querySelectorAll("#textCont")
const link1 = document.querySelector("#link1")
const link2 = document.querySelector("#link2")
fetch("https://aqueous-escarpment-24578.herokuapp.com/https://f1scraper44.herokuapp.com/stiri")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[0].titlu
    titlu.textContent = data.Stiri[0].titlu
    dataText.textContent = data.Stiri[0].data
    for(var i=0;i<butonText.length;i++){
        butonText[i].textContent = data.Stiri[0].buton[i]
    }
    facebookBtn.href = data.Stiri[0].facebook
    twitterBtn.href = data.Stiri[0].twitter
    pozaStire.src = data.Stiri[0].poza
    tipStire[0].textContent = data.Stiri[0].sdr1[0]
    stireLink[0].href = data.Stiri[0].sdr1[1]
    stireLink[0].innerHTML = data.Stiri[0].sdr1[2]

    tipStire[1].textContent = data.Stiri[0].sdr2[0]
    stireLink[1].href = data.Stiri[0].sdr2[1]
    stireLink[1].innerHTML = data.Stiri[0].sdr2[2]

    tipStire[2].textContent = data.Stiri[0].sdr3[0]
    stireLink[2].href = data.Stiri[0].sdr3[1]
    stireLink[2].innerHTML = data.Stiri[0].sdr3[2]

    tipStire[3].textContent = data.Stiri[0].sdr4[0]
    stireLink[3].href = data.Stiri[0].sdr4[1]
    stireLink[3].textContent = data.Stiri[0].sdr4[2]

    tipStire[4].textContent = data.Stiri[0].sdr5[0]
    stireLink[4].href = data.Stiri[0].sdr5[1]
    stireLink[4].textContent = data.Stiri[0].sdr5[2]
    for(var i=0;i<textCont.length;i++){
        textCont[i].textContent = data.Stiri[0].textcont[i]
    }
    link1.href = data.Stiri[0].link1[0]
    link1.textContent = data.Stiri[0].link1[1]
    link2.href = data.Stiri[0].link2[0]
    link2.textContent = data.Stiri[0].link2[1]
})