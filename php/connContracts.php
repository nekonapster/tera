<?php
require '../vendor/autoload.php';

$conn = (new MongoDB\Client)->gdc->contracts;

$searchUsers = $conn->find(['code' => "AGI20000514Z"]);


foreach ($searchUsers as $show) {

    print_r($show);

    $cupsNumber = $show["code"];


    echo "<strong style='color:red;'>$cupsNumber</strong>";
}
