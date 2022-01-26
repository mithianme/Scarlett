const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  var penis = Math.floor(Math.random() * 20 + 2);
  const member = message.mentions.members.first();

  penismessage = "";

  if (penis < 10) {
    penismessage =
      "Don't worry about your size darling, it's how you use it that matters, trust me :kiss:";
  } else if (penis > 10) {
    penismessage =
      "WOW! that's massive, however, having a big penis isn't always a good thing and you should not bully others regarding their size.";
  }

  if (!member) {
    let penisEmbed = new Discord.MessageEmbed()
      .setAuthor("PENIS SIZE")
      .setDescription(
        `${message.author.tag}'s dick is **${penis}** inches long.\n${penismessage}`
      )
      .setColor("#00FFFF")
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(penisEmbed);
  } else {
    let penis2Embed = new Discord.MessageEmbed()
      .setAuthor("PENIS SIZE")
      .setDescription(
        `${member.user.tag}'s dick is **${penis}** inches long.\n${penismessage}`
      )
      .setColor("#00FFFF")
      .setFooter(member.user.username, member.user.avatarURL());
    message.channel.send(penis2Embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "penis",
  category: "Misc",
  description: "Shows mentioned users penis size or yours depending on usage.",
  usage: "penis {@username} || penis",
};
