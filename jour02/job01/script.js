document.addEventListener("DOMContentLoaded", (e) => {

    let article = document.getElementById("citation");
    let button = document.querySelector("button");

    button.addEventListener("click", function citation(){

        console.log(article.textContent);

    })
})
