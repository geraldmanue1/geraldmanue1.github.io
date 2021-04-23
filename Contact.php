<?php
require 'vendor/autoload.php';

$API_KEY = "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";

if(iset($_POST['sendmail']))
{
	$lastname = $_POST['last-name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

$email = new \SendGrid\Mail\Mail();
$email->setFrom("geraldmanuel96@gmail.com", "MANUEL");
// $email->setSubject("");
$email->addTo($email, $lastname);
$email->addContent("text/plain", $message);
// $email->addContent(
   //  "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
// );
$sendgrid = new \SendGrid(getenv($API_KEY);

if($sendgrid->send($email));
{
	echo "Email envoie succès";
}

//try {
  //  $response = $sendgrid->send($email);
   // print $response->statusCode() . "\n";
   // print_r($response->headers());
   // print $response->body() . "\n";
//} catch (Exception $e) {
  //  echo 'Caught exception: '. $e->getMessage() ."\n";
//}
//}
?>
