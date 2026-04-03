<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Configuração de Acentuação (Resolve o Ã§Ã£o)
        $mail->CharSet = 'UTF-8'; 

        // Configurações do Servidor
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'no-reply@msfinancialstructure.com';
        $mail->Password   = 'SENHA_NO_SERVIDOR_HOSTINGER'; // Senha segura aqui
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Remetente e Destinatário
        $mail->setFrom('no-reply@msfinancialstructure.com', 'Site MS Financial');
        $mail->addAddress('relacionamento@msfinancialstructure.com');
        $mail->addReplyTo($_POST['Email'], $_POST['Nome']);

        // Conteúdo do E-mail
        $mail->isHTML(true);
        $mail->Subject = "Novo Contato: " . $_POST['Nome'] . " " . $_POST['Sobrenome'];
        
        // Template HTML mais limpo
        $mail->Body    = "
            <div style='font-family: sans-serif; line-height: 1.6; color: #333;'>
                <h2 style='color: #000;'>Nova solicitação de conversa estratégica</h2>
                <p><strong>Nome:</strong> {$_POST['Nome']} {$_POST['Sobrenome']}</p>
                <p><strong>E-mail:</strong> {$_POST['Email']}</p>
                <p><strong>Telefone:</strong> {$_POST['Telefone']}</p>
                <p><strong>Empresa:</strong> {$_POST['Empresa']}</p>
                <hr style='border: 0; border-top: 1px solid #eee;'>
                <p><strong>Mensagem:</strong><br>" . nl2br($_POST['Mensagem']) . "</p>
            </div>
        ";

        $mail->send();
        echo json_encode(["status" => "success"]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Erro técnico: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "method_not_allowed"]);
}
?>