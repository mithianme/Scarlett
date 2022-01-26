const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  const roles = new Discord.MessageEmbed()

    .setTitle("ALL SERVER ROLES")
    .setDescription(
      message.guild.roles.cache.map((roles) => roles.toString()).join(" ")
    )
    .setFooter(
      "This command displays all roles that are currently in the server, please be aware that they will not display in order and may randomize on use of the command."
    )
    .setTimestamp();

  message.channel.send(roles);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "roles",
  category: "Misc",
  description: "Gives a list of all roles in the Discord Server.",
  usage: "roles",
};
