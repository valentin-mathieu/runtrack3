<?php
session_start();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script src="script.js"></script> -->
    <link rel="stylesheet" href="index.css">

    <title>Document</title>
</head>
<body>
    <?php
    if (isset($_SESSION['firstname'])){
        echo "<p>";
        echo "Bonjour  ".$_SESSION['firstname'];
        echo "</p>";

    } else { ?>
    
        <a href='connexion.php'>Connexion</a>
        <a href='inscription.php'>Inscription</a>
        
    <?php } ?>

</body>
</html>