<?php

include 'C:/xampp/htdocs/nexodev/modules/dogmadual.php';
$str_data = file_get_contents('C:/xampp/htdocs/nexodev/draft/json/dogmadual.json');
$uri = $_SERVER['REQUEST_URI'];
renderPath($uri, $str_data, 0);

 ?>
