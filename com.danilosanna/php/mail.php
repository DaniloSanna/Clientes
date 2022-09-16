<?php

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];

$to = 'site@danilosanna.com';
$subjec = 'Solicitação de Orçamento';



$body = "Solicitação de Orçamento" . "\n" . 
"Nome: " . $name . "\n" . 
"Telefone: " . $tel . "\n" . 
"E-mail: " . $email . "\n" . 
"Mensagem: " . "\n" . $message;

$header = 'from:site@danilosanna.com'. "\r\n" . 
"Reply-to:" . $email  . "\r\n" . 
"X=Mailer:PHP/" . phpversion() ;

    if($name == "CrytoTug")
    {
        header("Location: https://www.danilosanna.com");
    }
    else
    {
        mail($to, $subjec, $body, $header);
        header("Location: https://www.danilosanna.com");
    }
?>