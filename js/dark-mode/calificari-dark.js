let darkMode = localStorage.getItem("darkMode")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const body = document.querySelector("body")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const preloader = document.querySelector("#preload")
const enableDarkMode = () =>{
    const textTitlu = document.querySelector(".text-titlu")
    const tabeldark = document.querySelectorAll(".tabel-container")
    const parteStanga = document.querySelectorAll(".parte-stanga")
    const parteDr = document.querySelectorAll(".parte-dreapta")
    body.classList.add("dark-mode")
    textTitlu.classList.add("dark-mode")
    preloader.classList.add("dark-mode")
    for (var i = 0; i < tabeldark.length; i++) {
        tabeldark[i].classList.add("dark-mode")
    }
    for(var i=0;i<parteStanga.length;i++){
        parteStanga[i].classList.add("dark-mode")
        parteDr[i].classList.add("dark-mode")
    }
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode = () =>{
    const textTitlu = document.querySelector(".text-titlu")
    const tabeldark = document.querySelectorAll(".tabel-container")
    const parteStanga = document.querySelectorAll(".parte-stanga")
    const parteDr = document.querySelectorAll(".parte-dreapta")
    body.classList.remove("dark-mode")
    textTitlu.classList.remove("dark-mode")
    preloader.classList.remove("dark-mode")
    for (var i = 0; i < tabeldark.length; i++) {
        tabeldark[i].classList.remove("dark-mode")
    }
    for(var i=0;i<parteStanga.length;i++){
        parteStanga[i].classList.remove("dark-mode")
        parteDr[i].classList.remove("dark-mode")
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