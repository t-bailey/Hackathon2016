<?php
function connect($config){
    $server = [];
    $server['connect'] = fsockopen($config['server'], $config['port']);
    if($server['connect']){
        SendData($server, "NICK " . $config['name'] . "\r\n");
        SendData($server, "USER " . $config['name'] . "\r\n");
        sendData($server, "PASS " . $config['pass'] . "\r\n");
        sendData($server, "JOIN " . $config['channel'] . "\r\n");
        if(!feof($server['connect']))
        {
            return true;
        }
    }
    
    $chatCommand = "PRIVMSG";
    
    return false;
}

function sendData($server, $command){
    fwrite($server['connect'], $command, strlen($command));
    fflush($server['connect']);
}


?>