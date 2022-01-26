const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  //>bot
  //responds bot information (author, creation date, invite url & synposis)

  const botEmbed = new Discord.MessageEmbed()
    .setColor("#D8BFD8")
    .setTitle("**BOT INFORMATION**")
    .setURL("https://mithian.xyz")
    .setTimestamp()
    .setDescription(
      "**SUMMARY**\n\nAuthor(s): mithian#6666 | con#1337 | Udxr#6191 | Syfe#6969\nCreation Date: 1st June 2020\nVersion: v0.0.1\n\n**BOT INVITE URL [:tada:](https://discord.com/api/oauth2/authorize?client_id=716133221288640583&permissions=8&scope=bot)**\nTo invite the bot to your server please click on the :tada: emoji provided above, once you've done that proceed to invite it into your server and give the bot the required permissions, thank you! 😃"
    );

  message.channel.send(botEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "bot",
  category: "Misc",
  description: "Information regarding the bot",
  usage: "bot",
};
