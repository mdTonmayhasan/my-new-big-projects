

const hambarger = document.getElementById("nav");
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


    var mainImg = document.getElementById("mainImg");
    var min = document.getElementsByClassName("min");

    min[0].onclick = function(){
        mainImg.src = min[0].src
    }
    min[1].onclick = function(){
        mainImg.src = min[1].src
    }
    min[2].onclick = function(){
        mainImg.src = min[2].src
    }
    min[3].onclick = function(){
        mainImg.src = min[3].src
    }
   



