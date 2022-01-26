const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let botStatus = {
    online: ":cherries: Online",
    dnd: ":underage: Do Not Disturb",
    idle: ":sushi: Away",
    invisible: ":white_heart: Invisible",
  };

  var status = client.presence.status;

  let botEmbed = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .addField("Bot Status: ", `${botStatus[status]}`);

  message.channel.send(botEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "botstatus",
  category: "Misc",
  description: "Shows the bots status.",
  usage: "botstatus",
};
