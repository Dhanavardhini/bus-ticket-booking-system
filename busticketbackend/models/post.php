<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;
    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    public function Register($username,$email,$password)
    {
         $insert = "INSERT INTO register(username,email,password)  VALUES (?,?, ?)";
         $stmt = mysqli_prepare($this->conn, $insert);
 
         if (!$stmt) {
             return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
         }
 
         mysqli_stmt_bind_param($stmt, "sss", $username,$email,$password);
         $result = mysqli_stmt_execute($stmt);
 
         if ($result) {
             return ["message" => "User Register successfully"];
         } else {
             return ["message" => "Product insertion failed"];
         }
    }
   
   
    public function busbook($name, $phone, $email, $from, $to, $date, $bustype, $tickets, $price, $payment, $status)
{
    $insert = "INSERT INTO busbook (name, phone, email, `from`, `to`, date, bustype, tickets, price, payment, status) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = mysqli_prepare($this->conn, $insert);

    if (!$stmt) {
        return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    }

    // Now the number of placeholders (11) matches the number of values (11)
    mysqli_stmt_bind_param($stmt, "sssssssssss", $name, $phone, $email, $from, $to, $date, $bustype, $tickets, $price, $payment, $status);

    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        return ["message" => "Plan added successfully"];
    } else {
        return ["message" => "Plan addition failed: " . mysqli_error($this->conn)];
    }
}


public function busimg($bus_name, $from, $to, $date, $bus_type, $price, $file)
{
    $advertisementQuery = "INSERT INTO busimg (bus_name, `from`, `to`, `date`, bus_type, price, file) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);

    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement: " . mysqli_error($this->conn);
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'sssssss', $bus_name, $from, $to, $date, $bus_type, $price, $file);

    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);
    mysqli_stmt_close($stmtadvertisement);

    if ($advertisementExec) {
        return "Data added successfully";
    } else {
        return "Failed to insert data into database: " . mysqli_error($this->conn);
    }
}






}
?> 
