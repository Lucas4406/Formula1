let darkMode = localStorage.getItem("darkMode")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const body = document.querySelector("body")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const enableDarkMode = () =>{
    const titluCurse = document.querySelector(".titlu-pagina-curse")
    const tabelCurse = document.querySelectorAll(".tabel-cursa")
    const parteJosPilot = document.querySelectorAll(".parte-jos-pilot")
    body.classList.add("dark-mode")
    titluCurse.classList.add("dark-mode")
    for (var i = 0; i < tabelCurse.length; i++) {
        tabelCurse[i].classList.add("dark-mode")
    }
    for (var i = 0; i < parteJosPilot.length; i++) {
        parteJosPilot[i].classList.add("dark-mode")
    }
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode = () =>{
    const titluCurse = document.querySelector(".titlu-pagina-curse")
    const tabelCurse = document.querySelectorAll(".tabel-cursa")
    const parteJosPilot = document.querySelectorAll(".parte-jos-pilot")
    body.classList.remove("dark-mode")
    titluCurse.classList.remove("dark-mode")
    for (var i = 0; i < tabelCurse.length; i++) {
        tabelCurse[i].classList.remove("dark-mode")
    }
    for (var i = 0; i < parteJosPilot.length; i++) {
        parteJosPilot[i].classList.remove("dark-mode")
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