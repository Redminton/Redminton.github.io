<?php
$porta = "COM5"; // Ajuste conforme necessário (ex: COM5, /dev/ttyUSB0 para Linux)
$baud = "115200";

// Abre a conexão serial
$serial = fopen($porta, "w+");

if (!$serial) {
    echo json_encode(["error" => "Erro ao abrir a porta serial"]);
    exit;
}

// Envia comando para pegar RPM
fwrite($serial, "010C\r");
sleep(1);
$resposta = fread($serial, 128);
fclose($serial);

// Processa resposta OBD2 (exemplo: "41 0C 1A F8")
preg_match('/41 0C ([0-9A-F]{2}) ([0-9A-F]{2})/', $resposta, $matches);

if ($matches) {
    $rpm = (hexdec($matches[1]) * 256 + hexdec($matches[2])) / 4;
    echo json_encode(["rpm" => $rpm]);
} else {
    echo json_encode(["error" => "Dados inválidos"]);
}
