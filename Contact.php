<?php

	$email= "geraldmanuel96@gmail.com";  /*****ENTER_FROM_EMAIL_ADDRESS*****/
	$name= "MANUEL Gerald";				/*****ENTER_A_NAME*****/
	$body= "Bienvenue dans mon premier email sendgrid ....!";
	$subject= "Premier e-mail sendgrid";


	$headers= array(

			'Authorization: Bearer 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',  /*****ENTER_YOUR_API_KEY*****/
			'Content-Type: application/json'
	);



	$data = array(

			"personalizations" => array(

				array(

					"to" =>array(

						array(

							"email" =>"geraldmanuel96@gmail.com", /*****ENTER_TO_EMAIL_ADDRESS*****/
							"name"  => $name
						)
					)
				)

			),


			"from" => array(

				"email"=> $email
			),


			"subject" =>$subject,
			"content" =>array(

					array(

						"type" => "text/html",
						"value" => $body
					)
			)


	);


	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL, "https://api.sendgrid.com/v3/mail/send");
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	
	$response = curl_exec($ch);

	curl_close($ch);

	echo $response;




?>