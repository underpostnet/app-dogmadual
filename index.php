<?php

include 'C:/xampp/htdocs/nexodev/modules/path0.php';
$str_data = file_get_contents('C:/xampp/htdocs/nexodev/http/dogmadual/data.json');
$uri = $_SERVER['REQUEST_URI'];
renderPath($uri, $str_data, 0);

 ?>
