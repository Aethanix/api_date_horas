<?php
header('Content-Type: application/json');

date_default_timezone_set('America/Sao_Paulo'); // Altere conforme necessário

$response = [
    'date' => date('Y-m-d'),
    'time' => date('H:i:s'),
    'datetime' => date('c'),
    'timestamp' => time()
];

echo json_encode($response);
