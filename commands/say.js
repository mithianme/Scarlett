const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  let permission1Embed = new Discord.MessageEmbed()
    .setAuthor("⚠️ YOU DO NOT HAVE PERMISSION TO DO THAT COMMAND")
    .setDescription("YOU NEED ADMINISTRATOR!")
    .setColor(`#00FFFF`);
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(permission1Embed);

  let permission2Embed = new Discord.MessageEmbed()
    .setAuthor("⚠️ WARNING")
    .setColor(`#00FFFF`);
  if (args.length < 0)
    return message.channel.send(permission2Embed).then(m => m.delete(5000));

  if (args[0] === "sayEmbed") {
    let sayEmbed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setDescription(args.slice(1).join(" "));

    message.channel.send(sayEmbed);
  } else {
    message.channel.send(args.join(" "));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: []
};

exports.help = {
  name: "say",
  category: "Misc",
  description: "Makes the bot say whatever you want it to say.",
  usage: "say {message}"
};
