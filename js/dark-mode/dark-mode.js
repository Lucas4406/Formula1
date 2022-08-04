let darkMode = localStorage.getItem("darkMode")
const body = document.querySelector("body")
const stiri = document.querySelector(".stiri")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const templateDark = document.querySelector("#template")
const enableDarkMode = () =>{
    const lTag = document.querySelectorAll(".ltag")
    const contText = document.querySelectorAll(".content-text")
    body.classList.add("dark-mode")
    stiri.classList.add("dark-mode")
    templateDark.classList.add("dark-mode")
    for (var i = 0; i < contText.length; i++) {
        contText[i].classList.add("dark-mode")
    }
    for (var i = 0; i < lTag.length; i++) {
        lTag[i].classList.add("dark-mode")
    }
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode = () =>{
    const lTag = document.querySelectorAll(".ltag")
    const contText = document.querySelectorAll(".content-text")
    body.classList.remove("dark-mode")
    stiri.classList.remove("dark-mode")
    templateDark.classList.remove("dark-mode")
    for (var i = 0; i < contText.length; i++) {
        contText[i].classList.remove("dark-mode")
    
    }
    for (var i = 0; i < lTag.length; i++) {
        lTag[i].classList.remove("dark-mode")
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

