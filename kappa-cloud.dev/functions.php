<?php
function connect($config){
    $server = [];
    $server['connect'] = fsockopen($config['server'], $config['port']);
    if($server['connect']){
        sendData($server, "PASS " . $config['pass'] . "\r\n");
        SendData($server, "NICK " . $config['name'] . "\r\n");
        SendData($server, "USER " . $config['name'] . "\r\n");
        sendData($server, "JOIN " . $config['channel'] . "\r\n");
        fflush($server['connect']);
        if(!feof($server['connect']))
        {
            $vals = [];
            for($i = 0; $i < 15; $i++){
                $vals[$i] = fgets($server['connect']);
            }
            return $vals;
        }
    }
    
    $chatCommand = "PRIVMSG";
    
    return false;
}

function sendData($server, $command){
    fwrite($server['connect'], $command, strlen($command));
}

function getData($server){
    return fgets($server['connect']);
}

?>