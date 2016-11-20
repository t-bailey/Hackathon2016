$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: 'ajax.php',
        data: {

            'function': 'connect',
            'server': 'irc.chat.twitch.tv',
            'port': '6667',
            'channel': '#esl_lol',
            'name': 'temporarily_terrible',
            'pass': 'oauth:q3yx09tynhaoqu744w9hm3kpree7cs'

        },
        success: function(result){
            console.log(result);
            console.log($.parseJSON(result));
            //location.replace('...');
        }
    });

});