const Discord = require('discord.js');



var bot = new Discord.Client({});

var random;



var promises = ["Játsz a hypixelen :D", "survivaloz", "Győzdle zf_HHG_2-őt", "A commandblock az király! :D", "A redstone az király!", "A HIVE MC az jó.", "Minecraft.net", "Ne ragelj mert vesztettél a Minecraftban! ", "Mögötted egy Creeper!!!", "100% hogy hogy ezt elolvastad mert benne van az a szó ,hogy Minecraft!", "Májnkráft"];



bot.on("ready", function () {

    console.log("Ready");

});



bot.on("message", function (message) {

    if (message.author.equals(bot.user)) return;

	

	if (message.content == "!kellakutya") {

		random = Math.floor((Math.random() * 10) + 0);

		message.channel.send(promises[random]);

	}

});



bot.login(process.env.TOKEN);
