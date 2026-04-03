<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['Nome'] ?? '';
    $sobrenome = $_POST['Sobrenome'] ?? '';
    $email = $_POST['Email'] ?? '';
    $telefone = $_POST['Telefone'] ?? '';
    $empresa = $_POST['Empresa'] ?? '';
    $mensagem = $_POST['Mensagem'] ?? '';

    $to = "relacionamento@msfinancialstructure.com";
    $subject = "Novo Contato pelo Site - $nome $sobrenome";
    
    $body = "Você recebeu um novo pedido de Conversa Estratégica.\n\n";
    $body .= "Nome: $nome $sobrenome\n";
    $body .= "Email: $email\n";
    $body .= "Telefone: $telefone\n";
    $body .= "Empresa: $empresa\n\n";
    $body .= "Mensagem:\n$mensagem\n";

    $headers = "From: no-reply@msfinancialstructure.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if(mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "method_not_allowed"]);
}
?>