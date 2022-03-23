document.addEventListener('DOMContentLoaded', (event) => {


    document.getElementById("email").addEventListener("input", function (e) {

        var check_email ;

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
            check_email = "Email valide.";
            document.getElementById("check_email").innerHTML = check_email;


        } else {
            check_email = "L'adresse email doit être au format example@gmail.com";
            document.getElementById("check_email").innerHTML = check_email;
        }

    })

    
    document.getElementById("firstname").addEventListener("input", function (e) {

        var check_firstname ;

        if (/^[a-zA-Z]+$/.test(this.value)) {
            check_firstname = "Prénom valide";
            document.getElementById("check_firstname").innerHTML = check_firstname;

        } else {
            check_firstname = "Prénom invalide";
            document.getElementById("check_firstname").innerHTML = check_firstname;
        }

    })

    document.getElementById("lastname").addEventListener("input", function (e) {

        var check_lastname ;

        if (/^[a-zA-Z]+$/.test(this.value)) {
            check_lastname = "Nom valide";
            document.getElementById("check_lastname").innerHTML = check_lastname;

        } else {
            check_lastname = "Nom invalide";
            document.getElementById("check_lastname").innerHTML = check_lastname;
        }

    })

    document.getElementById("password").addEventListener("input", function (e) {

        var check_password ;

        if(this.length < 10 ) {
            check_password = "Mot de passe trop court";
            document.getElementById("check_password").innerHTML = check_password;

        } else if (/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]/.test(this.value)) {
            check_password = "Mot de passe valide."
            document.getElementById("check_password").innerHTML = check_password;

        } else {
            check_password = "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.";;
            document.getElementById("check_password").innerHTML = check_password;
        }

    })

    document.getElementById("password_confirm").addEventListener("input", function (e) {

        var check_password_confirm ;

        if(this.value != document.getElementById("password").value ) {
            check_password_confirm = "Les mots de passe ne sont pas identiques";
            document.getElementById("check_password_confirm").innerHTML = check_password_confirm;

        } else {
            check_password_confirm = "Les mot de passe sont identiques.";
            document.getElementById("check_password_confirm").innerHTML = check_password_confirm;
        }

    })

    //Verification si tous les champs sont remplis après avoir appuyé sur submit

    document.forms["inscription"].addEventListener("submit", function(e) {
      
        
        var error ;

        // Vérification que tous les champs sont remplis

        var inputs = this;

        console.log(inputs)

        for ( i = 0 ; i < inputs.length; i ++) {
            if (!inputs[i].value) {
                error = "Veuillez renseigner tous les champs.";
            }
        }

        if(error) {
            
            document.getElementById('error').innerHTML = error;
        } else {
            alert('Formulaire envoyé');
            header('Location: connexion.php');
        }
    })




    

})