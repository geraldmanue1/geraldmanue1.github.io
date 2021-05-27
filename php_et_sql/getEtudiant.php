<?php
try {
$bdd = new PDO("mysql:host=localhost;dbname=table_etudiant;charset=utf8", "sio",
"sio", array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch (Exception $e) {
die('Erreur fatale : ' . $e->getMessage());
}
// Préparation de la requête : le ? correspond au paramètre attendu
$req = $bdd->prepare("SELECT `idEtudiant`, `observationEtudiant` FROM `etudiant` WHERE idEtudiant = ?");

// Exécution de la requête en lui passant le tableau des arguments
// (ici un seul élément : le code du idEtudiant)
$req->execute(array($_GET['idEtudiant']));

$idEtudiant = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($idEtudiant);
?>