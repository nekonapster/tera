<?php
require '../vendor/autoload.php';

$valueFromIndexJs = isset($_POST['cups']) ? $_POST['cups'] : "sin datos recibidos";
$tipoConsulta = isset($_POST['consulta']) ? $_POST['consulta'] : "";

$connContracts = (new MongoDB\Client)->gdc->contracts;
$connInvoices_ext = (new MongoDB\Client)->gdc->invoices_ext;

switch ($tipoConsulta) {
  case "datosDelSelect":
    // me traigo una collection en concreto filtrado por 'clave' => 'valor' y lo meto en un puntero, una para contracts y otra para invoices_ext
    $pointerContracts = $connContracts->find(['codecom' => 'BOLSILLO SOLAR']);
    $pointerInvoices_ext = $connInvoices_ext->find(['codecom' => 'BOLSILLO SOLAR']);

    // inicializo los arrays con cero datos
    $allDataFromContracts = [];
    $allDataFromInvoices_ext = [];

    // con el foreach voy metiendo los datos que rescato de mi collection con los criterios de busqueda establecidos en cups y code
    foreach ($pointerContracts as $show) {
      array_push($allDataFromContracts, $show);
    }
    foreach ($pointerInvoices_ext as $show) {
      array_push($allDataFromInvoices_ext, $show);
    }

    // Combino los dos arrays en uno solo asociativo //devuelve un array asociativo de dos posiciones
    $allDataFromContractsAndInvoices_ext = ["contracts" => $allDataFromContracts, "invoices_ext" => $allDataFromInvoices_ext];

    // convierto el array en un string c/formato json con JSON_FORCE_OBJECT, sino lo tuviera se enviaria un string de array.//devuelve un string de json
    $allDataFromIndex =  json_encode($allDataFromContractsAndInvoices_ext);
    break;
  case "cups":
    $dataFromCups = [];
    // $pointerContracts = $connContracts->find(['$and' => [['codecom' => 'BOLSILLO SOLAR'],['cups.code' => $valueFromIndexJs]]]);
    $pointerContracts = $connContracts->find(['cups.code' => $valueFromIndexJs, 'codecom' => 'BOLSILLO SOLAR']);

    foreach ($pointerContracts as $show) {
      array_push($dataFromCups, $show);
    }
    $allDataFromIndex =  json_encode($dataFromCups);
    break;

  default:
    break;
}

echo $allDataFromIndex;
