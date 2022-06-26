//HEADER

const stiriBtn = document.getElementById("stiri-button")
stiriBtn.addEventListener("click", ()=>{
    window.location.assign("index.html")
})

const programBtn = document.getElementById("program-button")
programBtn.addEventListener("click", ()=>{
    window.location.assign("program.html")
})

const echipeBtn = document.getElementById("echipe-button")
echipeBtn.addEventListener("click", ()=>{
    window.location.assign("echipe.html")
})

const pilotiBtn = document.getElementById("piloti-button")
pilotiBtn.addEventListener("click", ()=>{
    window.location.assign("piloti.html")
})

const istorieBtn = document.getElementById("istorie-button")
istorieBtn.addEventListener("click", ()=>{
    window.location.assign("istorie.html")
})

const logoBtn = document.querySelector("#logo-button")
logoBtn.addEventListener("click", ()=>{
    window.location.assign("index.html")
})

const fiaBtn = document.querySelector(".fia")
fiaBtn.addEventListener("click", ()=>{
    window.open("https://www.fia.com")
})

const currentLink=window.location.href
const menuItem = document.querySelectorAll(".buton")
const menuLength = menuItem.length
for(let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLink){
        menuItem[i].classList.add("active")
    }
    console.log(currentLink)
}


//STIRI

const stangaSus = document.querySelector("#stanga-sus")
stangaSus.addEventListener("click", ()=>{
    window.open("https://www.formula1.com/en/latest/article.mercedes-current-struggles-no-fun-at-all-says-team-boss-toto-wolff.2kRqsavxPAOd32MMV0HvtR.html")
})

const dreaptaSus = document.querySelector("#dreapta-sus")
dreaptaSus.addEventListener("click", ()=>{
    window.location.assign("stire2.html")
})

const stangaJos = document.querySelector("#stanga-jos")
stangaJos.addEventListener("click", ()=>{
    window.open("https://www.formula1.com/en/latest/article.power-rankings-whos-up-and-whos-down-after-the-2022-australian-grand-prix.2P3XZqxdI6sognsxhhKZgH.html")
})

const dreaptaJos = document.querySelector("#dreapta-jos")
dreaptaJos.addEventListener("click", ()=>{
    window.open("https://www.formula1.com/en/latest/article.palmer-how-albon-pulled-off-a-blinding-strategy-call-to-take-williams-first.4XIMhqWLpO5Kbsk9Jx702X.html")
})