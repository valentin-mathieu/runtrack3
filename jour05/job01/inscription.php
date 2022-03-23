<?php

require('traitement_inscription.php');

?>

<style>

    form {
        display: block;
    }

    label {
        display:block;
    }

    input {
        display:block;
    }


</style>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="inscription.js"></script>
        <!-- <link rel="stylesheet" href="index.css"> -->

        <title>Inscription</title>
    </head>


    <body>
        <form method="post" name="inscription">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email" required>
            <p id="check_email"></p>

            <label for="firstname">Prénom</label>
            <input type="text" name="firstname" id="firstname" placeholder="Prénom" required>
            <p id="check_firstname"></p>

            <label for="lastname">Nom</label>
            <input type="text" name="lastname" id="lastname" placeholder="Nom" required>
            <p id="check_lastname"></p>

            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password" placeholder="**********" required>
            <p id="check_password"></p>

            <label for="password_confirm">Confirmez le mot de passe</label>
            <input type="password" name="password_confirm" id="password_confirm" placeholder="**********" required>
            <p id="check_password_confirm"></p>

            <button type="submit" name="submit" value="inscription">Inscription</button>
        </form>

        <p style="color: red;" id="error"></p>
        

    </body>
</html>