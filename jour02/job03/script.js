document.addEventListener("DOMContentLoaded", (e) => {

    let compteur = document.getElementById("compteur");
    let button = document.getElementById("button");
    let x = 0;
    
    button.addEventListener("click", function addone(){

        const y = x++;
        
        compteur.innerText = x;

    })
})