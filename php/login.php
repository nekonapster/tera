<?php
require '../vendor/autoload.php';

$conn = (new MongoDB\Client)->gdc->userscups_auto;
$user = $_POST['userLogin'];
$pass = $_POST['passLogin'];

// $searchUsers = $conn->find(['NIF' => "sberdun@ingebau.com"]);
// header("Location: ../index.html");
echo $user;
exit();
