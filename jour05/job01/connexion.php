<?php

require('traitement_connexion.php');

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

        <title>Connexion</title>
    </head>


    <body>
        <form method="post" name="connexion">
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Email">

            <label for="password">Mot de passe</label>
            <input type="password" name="password" placeholder="**********">

            <button type="submit" name="connect">Connexion</button>
        </form>

        <p id="error"></p>
        

    </body>
</html>