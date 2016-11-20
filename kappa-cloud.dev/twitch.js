$(document).ready(function(){
    var ws = new WebSocket('ws://irc-ws.chat.twitch.tv:80');
    var pass = 'oauth:q3yx09tynhaoqu744w9hm3kpree7cs';
    var nick = 'temporarily_terrible';
    var channel = 'c9sneaky';
    var chatCommand = "PRIVMSG";

    var emoteArray = ["4Head","AMPEnergy","AMPEnergyCherry","AMPTropPunch","ANELE","ArgieB8","ArsonNoSexy","AsianGlow","BabyRage","BatChest","BCouch","BCWarrior","BibleThump","BigBrother","BlargNaut","bleedPurple","BloodTrail","BrainSlug","BrokeBack","BudBlast","BuddhaBar","BudStar","ChefFrank","cmonBruh","CoolCat","CoolStoryBob","copyThis","CorgiDerp","CurseLit","DAESuppy","DansGame","DatSheffy","DBstyle","deIlluminati","DendiFace","DogFace","DoritosChip","duDudu","DxAbomb","DxCat","EagleEye","EleGiggle","FailFish","FPSMarksman","FrankerZ","FreakinStinkin","FUNgineer","FunRun","FutureMan","GingerPower","GivePLZ","GOWSkull","GrammarKing","HassaanChop","HassanChop","HeyGuys","HotPokket","HumbleLife","imGlitch","Jebaited","JKanStyle","JonCarnage","KAPOW","Kappa","KappaClaus","KappaPride","KappaRoss","KappaWealth","Keepo","KevinTurtle","Kippa","Kreygasm","Mau5","mcaT","MikeHogu","MingLee","MrDestructoid","MVGame","NerfBlueBlaster","NerfRedBlaster","NervousMonkey","NinjaTroll","NomNom","NoNoSpot","NotATK","NotLikeThis","OhMyDog","OMGScoots","OneHand","OpieOP","OptimizePrime","OSfrog","OSkomodo","OSsloth","panicBasket","PanicVis","PartyTime","pastaThat","PeoplesChamp","PermaSmug","PeteZaroll","PeteZarollTie","PicoMause","PipeHype","PJSalt","PJSugar","PMSTwin","PogChamp","Poooound","PraiseIt","PRChase","PrimeMe","PunchTrees","PuppeyFace","RaccAttack","RalpherZ","RedCoat","ResidentSleeper","riPepperonis","RitzMitz","RuleFive","SeemsGood","SGlemon","SGmouth","SGrasp","ShadyLulu","ShazBotstix","SmoocherZ","SMOrc","SoBayed","SoonerLater","SSSsss","StinkyCheese","StoneLightning","StrawBeary","SuperVinlin","SwiftRage","TakeNRG","TBCheesePull","TBTacoLeft","TBTacoRight","TF2John","TheRinger","TheTarFu","TheThing","ThunBeast","TinyFace","TooSpicy","TriHard","TTours","twitchRaid","TwitchRPG","UleetBackup","UncleNox","UnSane","VoHiYo","VoteNay","VoteYea","WholeWheat","WTRuck","WutFace","YouWHY"];
	var emoteCountArray = Array.apply(null, Array(emoteArray.length)).map(Number.prototype.valueOf,0);

    ws.onopen = function(){
        //ws.send('CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership');
        ws.send('PASS ' + pass);
        ws.send('NICK ' + nick);
        ws.send('JOIN #' + channel);
        setInterval(function() {
            pong();
            //console.log("PONG sent");
            var response =  getTop(40, emoteArray, emoteCountArray);
            //console.log(response[0]);
            //console.log(response[1]);
            drawCloud(response[0], response[1]);

        }, 30000)
    };

    //show messages
    ws.onmessage = function(data){
        var message = data['data'];
        var msgIndex = message.indexOf(':', 1) + 1;
        if (msgIndex > 0 && message.includes(chatCommand)){
            message = message.substring(msgIndex);
           // console.log(message);
            emoteCountArray = readEmoteFunction(message, emoteArray, emoteCountArray);
        }
    };

    function pong(){
        ws.send('PONG :tmi.twitch.tv');
    };
});

function readEmoteFunction(message, emoteArray, emoteCountArray)
{
    for(var i = 0; i < emoteArray.length; i++){
        var msg = message;
        while(msg.includes(emoteArray[i])){
            var index = msg.indexOf(emoteArray[i]);
            msg = msg.substring(index + emoteArray[i].length);
            emoteCountArray[i]++;
        }
    }
    return emoteCountArray;
}


function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function getTop(number, emoteArray, emoteCountArray) {
    var names = new Array();
    var counts = new Array();
    var ea = JSON.parse(JSON.stringify(emoteArray));
    var eca = JSON.parse(JSON.stringify(emoteCountArray));

    for(var i = 0; i < number; i++) {
        var index = indexOfMax(eca);
        if(eca[index] == 0)
            continue;
        else {
            names[i] = ea[index];
            counts[i] = eca[index];
            eca[index] = 0;
        }
    }

    return [names, counts];
}