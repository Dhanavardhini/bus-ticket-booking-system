<?php
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';

// Function to handle errors and send JSON response
function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    exit();
}

// Check if required files exist
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
}

// Include necessary files
require_once $modelsPath;
require_once $headersPath;

// Decode incoming JSON data
$input = file_get_contents('php://input');
$data = json_decode($input);

if (!$data) {
    handleResponse(400, "Invalid JSON format");
}

// Required fields list
$requiredFields = ['name', 'phone', 'email', 'from', 'to', 'date', 'bustype', 'tickets', 'price', 'payment', 'status'];
foreach ($requiredFields as $field) {
    if (!property_exists($data, $field) || empty($data->$field)) {
        handleResponse(400, "Missing required field: $field");
    }
}

// Check if the Put class exists
if (!class_exists('Put')) {
    handleResponse(500, "Class 'Put' not found");
}

// Initialize the Put object
$obj = new Put();

// Call the method with the provided data
$result = $obj->busbook(
    (int)$data->id,        
    $data->name,
    $data->phone,
    $data->email,
    $data->from,
    $data->to,   
    $data->date, 
    $data->bustype, 
    $data->tickets,  
    $data->price,
    $data->payment,
    $data->status
);

// Send the result as a JSON response
header('Content-Type: application/json');
echo json_encode($result, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
?>