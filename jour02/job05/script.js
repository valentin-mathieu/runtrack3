document.addEventListener("DOMContentLoaded", (e) => {

let footer = document.querySelector('footer');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', function(){

    var progress = (document.documentElement.scrollTop / height) * 100;

    console.log(progress);
        footer.style.width = progress + "%";

    if (progress <= 25 ){
        footer.style.background = "lightgrey";
    }
    else if (progress > 25  && progress <= 50 ) {
        footer.style.background = "darkgrey";
    }
    else if (progress > 50  && progress <= 75 ) {
        footer.style.background = "grey";
    }
    else if (progress > 75 && progress <= 100) {
        footer.style.background = "black";
    }
})

})