<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$email_from = "jpimentel45@gmail.com";

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n".
"User Emal: $visitor.email.\n".
"User Message: $message.\n";

$to = "jpimentel45@gmail.com"
$headers ="From: $email_from\r\n";
$headers .= "Reply-To: $visitor_email\r\n";
mail($to,$email_subject,$email_body,$headers);
heder("Location: index.html");
?>


