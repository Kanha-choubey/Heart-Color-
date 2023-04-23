let icon = document.querySelector("h1")
let container = document.querySelector(".container")

function clickMe(e){
    // container.style.backgroundImage = "URL{'http.//source.unsplash.com/user/erondu'}"
        container.style.backgroundColor = 
     "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
    // button.style.backgroundColor = "black";
    //  button.style.color = "white";
    //  button.style.fontSize = "25px"

}


icon.addEventListener("mousemove", clickMe);

