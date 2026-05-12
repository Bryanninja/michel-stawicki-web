<?php
// Permite que o React leia a resposta do PHP
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Verifica se a requisição é do tipo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['erro' => 'Método não permitido']);
    exit;
}

// 1. SUA CHAVE DE API DO RESEND (Cole aqui após gerar no painel deles)
$resend_api_key = 're_gCK1jeLN_C5gKsedTs7gBTo242hWD4mBx';

// 2. CONFIGURAÇÕES DE E-MAIL
$email_remetente = 'no-reply@msfinancialstructure.com';// Quem envia (Domínio verificado no Resend)
$email_destino = 'relacionamento@msfinancialstructure.com'; // Quem recebe os formulários preenchidos

// 3. CAPTURA E LIMPEZA DOS DADOS ENVIADOS PELO REACT
$nome = htmlspecialchars($_POST['Nome'] ?? '');
$sobrenome = htmlspecialchars($_POST['Sobrenome'] ?? '');
$email = htmlspecialchars($_POST['Email'] ?? '');
$telefone = htmlspecialchars($_POST['Telefone'] ?? '');
$empresa = htmlspecialchars($_POST['Empresa'] ?? '');
$mensagem = htmlspecialchars($_POST['Mensagem'] ?? '');

// Validação básica de segurança no servidor
if (empty($nome) || empty($email) || empty($mensagem)) {
    http_response_code(400);
    echo json_encode(['erro' => 'Dados incompletos']);
    exit;
}

// 4. MONTAGEM DO CORPO DO E-MAIL EM HTML
$html_content = "
    <div style='font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;'>
        <h2 style='color: #1A1A1A; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;'>Novo Contato - Site MS Financial</h2>
        
        <p><strong>Nome:</strong> {$nome} {$sobrenome}</p>
        <p><strong>E-mail:</strong> {$email}</p>
        <p><strong>Telefone:</strong> {$telefone}</p>
        <p><strong>Empresa:</strong> {$empresa}</p>
        
        <h3 style='margin-top: 20px; color: #1A1A1A;'>Mensagem:</h3>
        <div style='background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #333;'>
            <p style='white-space: pre-wrap; margin: 0;'>{$mensagem}</p>
        </div>
        
        <p style='font-size: 12px; color: #888; margin-top: 30px; text-align: center;'>Este e-mail foi enviado automaticamente pelo formulário do site.</p>
    </div>
";

// 5. PREPARAÇÃO DA REQUISIÇÃO PARA O RESEND
$data = [
    'from' => 'MS Financial <' . $email_remetente . '>',
    'to' => [$email_destino],
    'subject' => 'Nova Solicitação de Conversa Estratégica - ' . $empresa,
    'html' => $html_content,
    'reply_to' => $email // Permite que a equipe clique em "Responder" e vá direto para o e-mail do cliente
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resend_api_key,
    'Content-Type: application/json'
]);

// 6. EXECUTA O DISPARO
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 7. RETORNA PARA O REACT SE DEU CERTO OU ERRADO
if ($http_code == 200 || $http_code == 201) {
    http_response_code(200);
    echo json_encode(['sucesso' => true, 'mensagem' => 'E-mail enviado com sucesso.']);
} else {
    http_response_code(500);
    echo json_encode(['erro' => 'Falha ao enviar e-mail', 'detalhes' => json_decode($response)]);
}
?>