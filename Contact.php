
    <?php
    if(isset($_POST['message'])){
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";

        $message = '<h1>Message envoyé depuis la page Contact de monsite.fr</h1>
        <p><b>Nom : </b>' . $_POST['first-name'] . '<br>
        <p><b>Prenom : </b>' . $_POST['last-name'] . '<br>
        <b>Email : </b>' . $_POST['email'] . '<br>
        <b>Télephone: </b>' . $_POST['phone'] . '<br>

        <b>Message : </b>' . $_POST['message'] . '</p>';

        $retour = mail('gerald.manuel.e@gmail.com', 'Envoi depuis page Contact', $message, $entete);
        if($retour) {
            echo '<p>Votre message a bien été envoyé.</p>';
        }
    }
    ?>


    