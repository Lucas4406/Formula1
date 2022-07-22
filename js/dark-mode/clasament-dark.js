let darkMode = localStorage.getItem("darkMode")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const body = document.querySelector("body")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const enableDarkMode = () =>{
    const cardconstDark = document.querySelectorAll(".card-const")
    const pozitieDark = document.querySelectorAll(".pozitie")
    const cursecastigateDark = document.querySelectorAll(".curse-castigate-cont")
    const nrpunctecontDark = document.querySelectorAll(".nrpuncte-cont")
    body.classList.add("dark-mode")
    for (var i = 0; i < cardconstDark.length; i++) {
        cardconstDark[i].classList.add("dark-mode")
        pozitieDark[i].classList.add("dark-mode")
        cursecastigateDark[i].classList.add("dark-mode")
        nrpunctecontDark[i].classList.add("dark-mode")
    }
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode = () =>{
    const cardconstDark = document.querySelectorAll(".card-const")
    const pozitieDark = document.querySelectorAll(".pozitie")
    const cursecastigateDark = document.querySelectorAll(".curse-castigate-cont")
    const nrpunctecontDark = document.querySelectorAll(".nrpuncte-cont")
    body.classList.remove("dark-mode")
    for (var i = 0; i < cardconstDark.length; i++) {
        cardconstDark[i].classList.remove("dark-mode")
        pozitieDark[i].classList.remove("dark-mode")
        cursecastigateDark[i].classList.remove("dark-mode")
        nrpunctecontDark[i].classList.remove("dark-mode")
    }
    poza1.classList.remove("dark-mode")
    poza2.classList.remove("dark-mode")
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
