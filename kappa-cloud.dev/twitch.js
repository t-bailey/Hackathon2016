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

});