<?php
require '../vendor/autoload.php';

$connContracts = (new MongoDB\Client)->gdc->contracts;

$pointerContracs = $connContracts->find(
  ['codecom' => 'BOLSILLO SOLAR'],
  ['projection' =>
  [
    'details' => 0,
    'sips' => 0,
    'crm' => 0,
    'erp' => 0,
    'Comisiones' => 0
  ]]
);

$soloCups = [];

foreach ($pointerContracs as $show) {
  array_push($soloCups, $show);
};

$soloCupsEncode = json_encode($soloCups);

echo($soloCupsEncode);
