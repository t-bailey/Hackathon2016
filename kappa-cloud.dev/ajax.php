<?php
require('functions.php');

$function = $_GET['function'];
switch ($function){
    case 'connect':
        global $config;
        $config = [
            'server'  => $_GET['server'],
            'port'    => $_GET['port'],
            'channel' => $_GET['channel'],
            'name'    => $_GET['name'],
            'pass'    => $_GET['pass']
        ];

        $result = connect($config);
        exit(json_encode($result));
        break;

    case 'getChat':
        $server = $_GET['server'];
        if(isset($server['connect'])){
            $result = getData($config['server']);
            exit(json_encode($result));
        }
        else exit(json_encode('sadness'));
        break;
}



?>