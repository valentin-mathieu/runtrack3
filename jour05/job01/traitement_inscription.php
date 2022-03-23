<?php

$bdd = new PDO("mysql:host=localhost;dbname=utilisateurs", 'root', '');


if(isset($_POST['submit'])){

    $valid = true;

    $password = htmlspecialchars($_POST['password']);
    $email = htmlspecialchars(trim($_POST['email']));
    $firstname = htmlspecialchars(ucwords(strtolower(trim($_POST['firstname']))));
    $lastname = htmlspecialchars(ucwords(strtolower(trim($_POST['lastname']))));
    $password = $_POST['password'];
    $password_confirm = $_POST['password_confirm'];


    $query = "SELECT email FROM utilisateurs WHERE email = '$email'";
    $check = $bdd->prepare($query);
    $check->setFetchMode(PDO::FETCH_ASSOC);
    $check->execute();

    $checkemail = $check->fetchAll();

    if(empty($email)){
        $valid == false;
        $error_email = "Renseignez une adresse email.";
        echo "error mail vide ";
    }

    elseif(filter_var($email, FILTER_VALIDATE_EMAIL) == false) {
        $valid = false;
        $error_email = "Votre email n'est pas au bon format : example@gmail.";
        $email="";
        echo "error mail format ";
    }

    if(count($checkemail) != 0){
        $valid = false;
        $error_email = "Cet email est déjà utilisé.";
        echo "erreur mail utilisé ";
    }

    if(empty($password)){
        $valid = false;
        $error_password = "Renseignez votre mot de passe.";
        echo "error password vide ";
    }

    elseif( strlen($password) < 10 ) {
        $valid = false;
        $error_password = "Le mot de passe doit être au moins de 10 caractères.";
        echo "err password longueur ";
    }

    elseif(!preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]/',$password)) {
        $error_password = "Le mot de passe ne respecte pas les conditions.";
        $valid = false;
        echo "err password conditions ";

    }

    if(empty($_POST['firstname'])){
        $valid = false;
        $error_firstname = "Renseignez votre prénom.";
        echo "error firstname vide ";
    }

    elseif (!preg_match("#^[a-zA-Z]+$#", $firstname)) {
        $valid = false;
        $error_firstname ="Votre prénom n'est pas au bon format.";
        echo "error firstname chiffres/carac spéciaux ";
    }

    if(empty($_POST['lastname'])){
        $valid = false;
        $error_lastname = "Veuillez renseigner votre nom.";
        echo "error lastname vide ";
    }

    elseif (!preg_match("#^[a-zA-Z]+$#", $lastname)) {
        $valid = false;
        $err_lastname ="Votre nom n'est pas au bon format;";
        echo "error lastname chiffres/carac speciaux ";
    }


    if($password != $password_confirm){
        $valid = false;
        $error_password_confirm = "Les mots de passe ne correspondent pas.";
        echo "error confirm password ";
    }


    if($valid == true) {

        $data = [
            'email'=>$email, 
            'firstname'=>$firstname, 
            'lastname'=>$lastname, 
            'password'=>md5($password),
        ] ;

        $query = "INSERT INTO utilisateurs (email, nom, prenom, password) VALUES (:email, :lastname, :firstname, :password)  ";
        $insert = $bdd->prepare($query);
        $insert->execute($data);

        header('Location: connexion.php');
    }

}



?>