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
fetch("/json/stiri.json")
.then(response => 
    response.json()
).then(data => {
    document.title = data.Stiri[1].titlu
    titlu.textContent = data.Stiri[1].titlu
    dataText.textContent = data.Stiri[1].data
    for(var i=0;i<butonText.length;i++){
        butonText[i].textContent = data.Stiri[1].buton[i]
    }
    facebookBtn.href = data.Stiri[1].facebook
    twitterBtn.href = data.Stiri[1].twitter
    pozaStire.src = data.Stiri[1].poza
    for(var i=0;i<data.Stiri[1].sdr1.length;i++){
        tipStire[0].textContent = data.Stiri[1].sdr1[0]
        stireLink[0].href = data.Stiri[1].sdr1[i]
        stireLink[0].innerHTML = data.Stiri[1].sdr1[i]

        tipStire[1].textContent = data.Stiri[1].sdr2[0]
        stireLink[1].href = data.Stiri[1].sdr2[i]
        stireLink[1].innerHTML = data.Stiri[1].sdr2[i]

        tipStire[2].textContent = data.Stiri[1].sdr3[0]
        stireLink[2].href = data.Stiri[1].sdr3[i]
        stireLink[2].innerHTML = data.Stiri[1].sdr3[i]

        tipStire[3].textContent = data.Stiri[1].sdr4[0]
        stireLink[3].href = data.Stiri[1].sdr4[i]
        stireLink[3].textContent = data.Stiri[1].sdr4[i]

        tipStire[4].textContent = data.Stiri[1].sdr5[0]
        stireLink[4].href = data.Stiri[1].sdr5[i]
        stireLink[4].textContent = data.Stiri[1].sdr5[i]
    }
    for(var i=0;i<textCont.length;i++){
        textCont[i].textContent = data.Stiri[1].textcont[i]
    }
    for(var i=0;i<data.Stiri[1].link1.length;i++){
        link1.href = data.Stiri[1].link1[i]
        link1.textContent = data.Stiri[1].link1[i]
    }
    for(var i=0;i<data.Stiri[1].link2.length;i++){
        link2.href = data.Stiri[1].link2[i]
        link2.textContent = data.Stiri[1].link2[i]
    }
})