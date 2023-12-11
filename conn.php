<?php
require 'vendor/autoload.php';

$conn = (new MongoDB\Client)->gdc->users;

// $gdc = $conn->gdc;
// $users = $gdc->users;

// $in concatena datos de busqueda
// $searchUsers = $conn->find(['user_name' => ['$in' =>["sberdun@ingebau.com", "arainfo@aramarketing.com"]]]);
$searchUsers = $conn->find(['user_name' => "sberdun@ingebau.com"]);


foreach ($searchUsers as $show) {
    // $usuariosMongo = json_encode($show, JSON_PRETTY_PRINT);
    // echo $usuariosMongo;

    $adminOne = $show["_id"];
    $adminTwo = $show["role"];
    $adminThree = $show["address"];

    echo "<strong>$adminOne</strong>" . "<br>" ;
    echo "<strong>$adminTwo</strong>" . "<br>";
    echo "<strong>$adminThree</strong>" . "<br><br>";
}