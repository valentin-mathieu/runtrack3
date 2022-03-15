let password = "";

document.addEventListener("DOMContentLoaded", (e) => {

    document.addEventListener("keydown", function(event){

        let touche = event.code;
        let mot = password + touche;
        password = mot;
        
        console.log(password);
        
        if(password == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyQ"){

            let body = document.querySelector("body");
            let header = document.querySelector("header");
            let main = document.querySelector("main");
            let footer = document.querySelector("footer");

            let titre = document.createElement("h1");
            let paragraphe = document.createElement("p");
            let img = document.createElement("img");
            img.src = "logo_laplateforme.png";

            header.append(titre);
            titre.append("La Plateforme");

            main.append(paragraphe);
            paragraphe.append("Le campus méditerranéen du numérique !");

            footer.append(img);
            
            //STYLE 

            body.style.margin = "0";
            body.style.padding = "0";

            header.style.height = "20vh";
            header.style.background = "#88C1D0";

            main.style.height = "60vh";
        
            footer.style.height = "20vh";
            footer.style.background = "#88C1D0"

            titre.style.color = "#2A609E";
            titre.style.textAlign = "center";
            titre.style.fontSize = "50px";
        
            paragraphe.style.textAlign = "center";
            paragraphe.style.fontSize = "3em";
            paragraphe.style.color = "#FFCA4B";

            img.style.marginLeft = "25%";
        }
    })
})