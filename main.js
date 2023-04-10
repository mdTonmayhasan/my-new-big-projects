

const hambarger = document.getElementById("navigation");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");


if(hambarger){
    hambarger.addEventListener("click", () =>{
        navbar.classList.add("active");
    })
}
if(close){
    close.addEventListener("click", () =>{
        navbar.classList.remove("active");
    })
}


