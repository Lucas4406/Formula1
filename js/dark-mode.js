let darkMode = localStorage.getItem("darkMode")
const body = document.querySelector("body")
const stiri = document.querySelector(".stiri")
const contText = document.querySelectorAll(".content-text")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const enableDarkMode = () =>{
    body.classList.add("dark-mode")
    stiri.classList.add("dark-mode")
    for (var i = 0; i < contText.length; i++) {
        contText[i].classList.add("dark-mode")
    }
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode = () =>{
    body.classList.remove("dark-mode")
    stiri.classList.remove("dark-mode")
    for (var i = 0; i < contText.length; i++) {
        contText[i].classList.remove("dark-mode")
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

