const unButon = document.querySelector("#buton-dpd")
const dpdMenu = document.querySelector(".dropdown-menu")
unButon.addEventListener("click" , ()=>{
    dpdMenu.classList.toggle("active")
})
var myElementToCheckIfClicksAreInsideOf = document.querySelector('.dropdown-menu');
// Listen for click events on body
document.body.addEventListener('click', function (event) {
    if (myElementToCheckIfClicksAreInsideOf.contains(event.target)) {
        console.log('clicked inside');
    } else {
        console.log('clicked inside');
    }
});
