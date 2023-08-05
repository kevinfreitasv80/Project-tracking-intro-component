const iconHamburger = document.getElementById("iconHamburger");
const iconClose = document.getElementById("iconClose");
const ul = document.querySelector("ul");
let OC = false;

iconHamburger.addEventListener("click", function() {
    this.style.display = "none";
    iconClose.style.display = "block";
    ul.style.display = "grid";
    OC = true;
});
iconClose.addEventListener("click", function() {
    this.style.display = "none";
    ul.style.display = "none";
    iconHamburger.style.display = "block";
    OC = false;
});
window.addEventListener("resize", function() {
    if(this.innerWidth > 570){
        iconClose.style.display = "none";
        iconHamburger.style.display = "none";
        ul.style.display = "flex";
    }else{
        if (OC) {
            iconClose.style.display = "block";
            iconHamburger.style.display = "none";
            ul.style.display = "grid";
        }else{
            iconHamburger.style.display = "block";
            iconClose.style.display = "none";
            ul.style.display = "none";
        }
    }
});