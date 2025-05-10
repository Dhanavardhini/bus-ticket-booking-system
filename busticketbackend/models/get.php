<?php
include_once '../../../../config/database.php';

class Get
{ 
    public $conn;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

    
    private function handleResponse($statusCode, $message) 
    {
        http_response_code($statusCode);
        echo json_encode(['error' => $message]);
        exit();
    }

    public function register($email, $password) 
    {
        $query = "SELECT * FROM register WHERE email = ? AND password = ?"; 
    
        $stmt = mysqli_prepare($this->conn, $query);
    
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
    
       
        mysqli_stmt_bind_param($stmt, 'ss', $email, $password);
    
     
        mysqli_stmt_execute($stmt);
    
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
    
       
        $result = mysqli_stmt_get_result($stmt);
    
      
        if (mysqli_num_rows($result) > 0) {
           
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return ['success' => 'Login successful'];
        } else {
           
            mysqli_stmt_close($stmt);
            return ['error' => 'Invalid email or password'];
        }
    }


    public function buses() 
    {
        
        $query = "SELECT * FROM busimg";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    } 
    public function busbookget() 
    {
        
        $query = "SELECT * FROM busbook";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    } 
    public function busbookregisterget() 
    {
        
        $query = "SELECT * FROM register";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    } 
    
 
   

  

}

    
    
    
?>

