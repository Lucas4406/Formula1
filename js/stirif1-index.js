const stiriBtn = document.getElementById("stiri-button")
stiriBtn.addEventListener("click", ()=>{
    window.location.assign("/pagini/stirif1.html")
})

const programBtn = document.getElementById("program-button")
programBtn.addEventListener("click", ()=>{
    window.location.assign("/pagini/program.html")
})

const echipeBtn = document.getElementById("echipe-button")
echipeBtn.addEventListener("click", ()=>{
    window.location.assign("/pagini/echipe.html")
})

const istorieBtn = document.getElementById("istorie-button")
istorieBtn.addEventListener("click", ()=>{
    window.location.assign("/pagini/istorie.html")
})

const logoBtn = document.querySelector("#logo-button")
logoBtn.addEventListener("click", ()=>{
    window.location.assign("/index.html")
})

const fiaBtn = document.querySelector(".fia")
fiaBtn.addEventListener("click", ()=>{
    window.open("https://www.fia.com")
})