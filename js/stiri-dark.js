let darkMode = localStorage.getItem("darkMode")
const body = document.querySelector("body")
const titluDark = document.querySelector(".titlu")
const data = document.querySelector(".data")
const butoane = document.querySelectorAll(".unbuton")
const alteStiri = document.querySelector(".altestiri")
const stireScris = document.querySelectorAll(".stire-scris")
const primulText = document.querySelectorAll(".primul-text")
const doileaText = document.querySelectorAll(".doilea-text")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const enableDarkMode =() =>{
    body.classList.add("dark-mode")
    titluDark.classList.add("dark-mode")
    data.classList.add("dark-mode")
    alteStiri.classList.add("dark-mode")
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    for (var i = 0; i < butoane.length; i++) {
        butoane[i].classList.add("dark-mode")
    }
    for (var i = 0; i < stireScris.length; i++) {
        stireScris[i].classList.add("dark-mode")
    }
    for (var i = 0; i < primulText.length; i++) {
        primulText[i].classList.add("dark-mode")
    }
    for (var i = 0; i < doileaText.length; i++) {
        doileaText[i].classList.add("dark-mode")
    }
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode =() =>{
    body.classList.remove("dark-mode")
    titluDark.classList.remove("dark-mode")
    data.classList.remove("dark-mode")
    alteStiri.classList.remove("dark-mode")
    poza1.classList.remove("dark-mode")
    poza2.classList.remove("dark-mode")
    for (var i = 0; i < butoane.length; i++) {
        butoane[i].classList.remove("dark-mode")
    }
    for (var i = 0; i < stireScris.length; i++) {
        stireScris[i].classList.remove("dark-mode")
    }
    for (var i = 0; i < primulText.length; i++) {
        primulText[i].classList.remove("dark-mode")
    }
    for (var i = 0; i < doileaText.length; i++) {
        doileaText[i].classList.remove("dark-mode")
    }
    localStorage.removeItem("darkMode" , "enabled")
}
if(darkMode === "enabled"){
    enableDarkMode()
}
darkmodeBtn.addEventListener("click" , () => {
    darkMode = localStorage.getItem("darkMode")
    if(darkMode !== "enabled"){
        enableDarkMode()
    } else{
        disableDarkMode()
    }
})