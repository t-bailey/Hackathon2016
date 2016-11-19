<?php
    set_time_limit(0);
    global $server;
    
    $connected = false; 

?>

<html>
    <head>
        <title>HackOHI/O 2016</title>
        
        <script type="text/javascript" src='jquery-3.1.1.min.js'></script> <!-- jQuery -->
        <script type="text/javascript" src='script.js'></script>
        <script type="text/javascript" src='twitch.js'></script>
    </head>

	<body onload='createCloud()'>
		<canvas id="cloudCanvas" width='800' height='600'></canvas>
	</body>
</html>