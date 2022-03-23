<?php

$bdd = new PDO("mysql:host=localhost;dbname=utilisateurs", 'root', '');

$check = true;


if(isset($_POST['connect'])){

    $password = md5(htmlspecialchars($_POST['password']));
    $email = htmlspecialchars(trim($_POST['email']));

    $data = [
        'email'=>$email,
        'password'=>$password,
    ];

    $query = "SELECT * FROM utilisateurs WHERE email = :email AND password =:password";
    $connect = $bdd->prepare($query);
    $connect->setFetchMode(PDO::FETCH_ASSOC);
    $connect->execute($data);

    $connexion = $connect->fetchAll();


    if (!empty($connexion)) {

        session_start();
        $_SESSION['id_user'] = $connexion[0]['id'];
        $_SESSION['email'] = $connexion[0]['email'];
        $_SESSION['firstname'] = $connexion[0]['prenom'];
        $_SESSION['lastname'] = $connexion[0]['nom'];

        header('Location: index.php');
       

        

    } else {

        echo "L'email ou le mot de passe est incorrect";
    }



}



?>