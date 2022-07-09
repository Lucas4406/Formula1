const body = document.querySelector("body")
const stiri = document.querySelector(".stiri")
const contText = document.querySelectorAll(".content-text")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
darkmodeBtn.addEventListener("click" , () =>{
    body.classList.toggle("dark-mode")
    stiri.classList.toggle("dark-mode")
    for (var i = 0; i < contText.length; i++) {
        contText[i].classList.toggle("dark-mode")
    }
    console.log(contText.length);
    poza1.classList.toggle("dark-mode")
    poza2.classList.toggle("dark-mode")
})