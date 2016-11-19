<?php
require('functions.php');

$function = $_GET['function'];
switch ($function){
    case 'connect':
        $config = [
            'server'  => $_GET['server'],
            'port'    => $_GET['port'],
            'channel' => $_GET['channel'],
            'name'    => $_GET['name'],
            'pass'    => $_GET['pass']
        ];
        $results = connect($config);
        exit(json_encode($results));
        break;
}



?>