<?php
require './vendor/autoload.php';
//coleccion a la que accedo
$conn = (new MongoDB\Client)->gdc->tickets;
//valor que recojo del js
$cups = $_POST['cups'];

//llamada dinamica que hago con el post que recibo del js
$searchUsers = $conn->find(['cups' => $cups]);
//array vacio que usare para añadir los documentos de la busqueda
  $codecom = [];
//recorrido de los objetos de la busqueda
foreach ($searchUsers as $show) {
  // añado los documentos de la busqueda al array
 array_push($codecom, $show);
}
//mando los datos del array encodeado al js
echo json_encode($codecom);

 