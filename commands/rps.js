const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {

    message.delete()

    var rock_paper_scissors = [

        "**ROCK**",
        "**PAPER**",
        "**SCISSORS**",
    ]

    var rps = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)];

    if (talkedRecently.has(message.author.id)) {
        message.reply(
          "please wait 10 seconds before using this command again, thank you!"
        );
      } else {

        let rpsEmbed = new Discord.MessageEmbed()
        .setAuthor(client.user.tag, client.user.avatarURL())
        .setDescription(`${message.author.tag} has thrown ` + rps)
        .setTimestamp()
        .setColor(`#00FFFF`);
        
        message.channel.send(rpsEmbed);
      }
    
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rockpaperscissor", "rockpaperscissors"],
};

exports.help = {
  name: "rps",
  category: "Misc",
  description: "Rock, paper, scissors",
  usage: "rps",
};