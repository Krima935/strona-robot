var v = document.querySelector(".wrapper");
document.addEventListener("DOMContentLoaded", function(){
    v.classList.add('loaded');
}); 

document.querySelector(".year").innerHTML = new Date().getFullYear();