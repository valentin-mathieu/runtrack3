document.addEventListener("DOMContentLoaded", (e) => {

    let button = document.getElementById("button");
    let phrase = document.createElement("p");

    button.addEventListener("click", function (){

        fetch("expression.txt")
        .then( response => response.text())
        .then(data => {
    
            phrase.innerText = data;
            document.body.appendChild(phrase);

        })  
    })
})