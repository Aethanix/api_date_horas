<?php
header('Content-Type: application/json');

echo json_encode([
    'data' => date('Y-m-d'),
    'hora' => date('H:i:s'),
    'timezone' => date_default_timezone_get()
]);
