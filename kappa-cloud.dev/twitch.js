$(document).ready(function(){
    var ws = new WebSocket('ws://irc-ws.chat.twitch.tv:80');
    var pass = 'oauth:q3yx09tynhaoqu744w9hm3kpree7cs';
    var nick = 'temporarily_terrible';
    var channel = 'saltybet';
    var chatCommand = "PRIVMSG";
    ws.onopen = function open() {
        //ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
        ws.send('PASS ' + pass);
        ws.send('NICK ' + nick);
        ws.send('JOIN #' + channel);
        setInterval(function() {
            pong();
            console.log("PONG sent");
        }, 30000)
    };

    //show messages
    ws.onmessage = function(data){
        var message = data['data'];
        var msgIndex = message.indexOf(':', 1) + 1;
        if (msgIndex > 0 && message.includes(chatCommand)){
            message = message.substring(msgIndex);
            console.log(message);
        }
    };

    function pong(){
        ws.send('PONG :tmi.twitch.tv');
    }

    // ws.onmessage = function(data){
    //     if (data.lastIndexOf('PING', 0) === 0) {
    //         ws.send('PONG :tmi.twitch.tv');
    //         console.log('PONG Sent\r\n');
    //     }
    // }

    // $.ajax({
    //     method: 'GET',
    //     url: 'ajax.php',
    //     data: {

    //         'function': 'connect',
    //         'server': 'irc.chat.twitch.tv',
    //         'port': '6667',
    //         'channel': '#esl_lol',
    //         'name': 'temporarily_terrible',
    //         'pass': 'oauth:q3yx09tynhaoqu744w9hm3kpree7cs'

    //     },
    //     success: function(result){
    //         console.log(result);
    //         console.log($.parseJSON(result));
    //         //location.replace('...');
    //     }
    // });

});