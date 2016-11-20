function readEmoteFunction(message)
{
	var emoteArray = ["4Head","AMPEnergy","AMPEnergyCherry","AMPTropPunch","ANELE","ArgieB8","ArsonNoSexy","AsianGlow","BabyRage","BatChest","BCouch","BCWarrior","BibleThump","BigBrother","BlargNaut","bleedPurple","BloodTrail","BrainSlug","BrokeBack","BudBlast","BuddhaBar","BudStar","ChefFrank","cmonBruh","CoolCat","CoolStoryBob","copyThis","CorgiDerp","CurseLit","DAESuppy","DansGame","DatSheffy","DBstyle","deIlluminati","DendiFace","DogFace","DoritosChip","duDudu","DxAbomb","DxCat","EagleEye","EleGiggle","FailFish","FPSMarksman","FrankerZ","FreakinStinkin","FUNgineer","FunRun","FutureMan","GingerPower","GivePLZ","GOWSkull","GrammarKing","HassaanChop","HassanChop","HeyGuys","HotPokket","HumbleLife","imGlitch","Jebaited","JKanStyle","JonCarnage","KAPOW","Kappa","KappaClaus","KappaPride","KappaRoss","KappaWealth","Keepo","KevinTurtle","Kippa","Kreygasm","Mau5","mcaT","MikeHogu","MingLee","MrDestructoid","MVGame","NerfBlueBlaster","NerfRedBlaster","NervousMonkey","NinjaTroll","NomNom","NoNoSpot","NotATK","NotLikeThis","OhMyDog","OMGScoots","OneHand","OpieOP","OptimizePrime","OSfrog","OSkomodo","OSsloth","panicBasket","PanicVis","PartyTime","pastaThat","PeoplesChamp","PermaSmug","PeteZaroll","PeteZarollTie","PicoMause","PipeHype","PJSalt","PJSugar","PMSTwin","PogChamp","Poooound","PraiseIt","PRChase","PrimeMe","PunchTrees","PuppeyFace","RaccAttack","RalpherZ","RedCoat","ResidentSleeper","riPepperonis","RitzMitz","RuleFive","SeemsGood","SGlemon","SGmouth","SGrasp","ShadyLulu","ShazBotstix","SmoocherZ","SMOrc","SoBayed","SoonerLater","SSSsss","StinkyCheese","StoneLightning","StrawBeary","SuperVinlin","SwiftRage","TakeNRG","TBCheesePull","TBTacoLeft","TBTacoRight","TF2John","TheRinger","TheTarFu","TheThing","ThunBeast","TinyFace","TooSpicy","TriHard","TTours","twitchRaid","TwitchRPG","UleetBackup","UncleNox","UnSane","VoHiYo","VoteNay","VoteYea","WholeWheat","WTRuck","WutFace","YouWHY"];
	var emoteCountArray = [162];
	var temp_string;

	for(int i = 0; i < message.length; i++)
	{
		if(message[i] != ' ' || message[i] != ',' || message[i] != '.')
			temp_string += message[i];
		
		for(int j = 0; j < emoteArray; j++)
		{
			if(emoteArray[j] == temp_string)
			{
				emoteCountArray[j]++;
			}
		}
	}
}

