<?php
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Required files are missing']);
    exit();
}

require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Validate JSON data
if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit();
}

// Extract the required fields from JSON data
$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$phone = $data['phone'] ?? null;
$from = $data['from'] ?? null;
$to = $data['to'] ?? null;
$date = $data['date'] ?? null;
$bustype = $data['bustype'] ?? null;
$tickets = $data['tickets'] ?? null;  // ✅ Fixed missing variable
$price = $data['price'] ?? null;
$payment = $data['payment'] ?? null;
$status = $data['status'] ?? null;

// Ensure required fields are present
if (!$from || !$to || !$date || !$bustype || !$tickets) {  
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
    
}


$obj = new Post();

// Insert data
$result = $obj->busbook($name, $phone, $email, $from, $to, $date, $bustype, $tickets, $price, $payment, $status);

// Handle errors
if ($result === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
    exit();
}

// Send response
echo json_encode($result);
?>
