let darkMode = localStorage.getItem("darkMode")
const body = document.querySelector("body")
const darkmodeBtn = document.querySelector(".darkmodeBtn")
const poza2 = document.querySelector(".poza2")
const poza1 = document.querySelector(".poza1")
const multscris = document.querySelectorAll(".multscris")
const imagini = document.querySelector(".imagini")
const enableDarkMode =() =>{
    body.classList.add("dark-mode")
    poza1.classList.add("dark-mode")
    poza2.classList.add("dark-mode")
    imagini.classList.add("dark-mode")
    for(i=0;i<multscris.length;i++){
        multscris[i].classList.add("dark-mode")
    }
    localStorage.setItem("darkMode" , "enabled")
}
const disableDarkMode =() =>{
    body.classList.remove("dark-mode")
    poza1.classList.remove("dark-mode")
    poza2.classList.remove("dark-mode")
    imagini.classList.add("dark-mode")
    for(i=0;i<multscris.length;i++){
        multscris[i].classList.remove("dark-mode")
    }
    localStorage.setItem("darkMode" , "enabled")
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