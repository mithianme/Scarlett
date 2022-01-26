const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!client.settings.has(message.guild.id))
    client.settings.set(message.guild.id, {});

  if (args.length >= 1) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return client.embedCreator(
        message.channel,
        "You do not have permission to do that, make sure you have Administrator permissions!"
      );

    const joinedArgs = args.join(" ");

    client.settings.set(message.guild.id, joinedArgs, "prefix");

    client.embedCreator(message.channel, `Prefix set to ${joinedArgs}`);
  } else {
    client.embedCreator(message.channel,`Prefix is currently ${client.settings.get(message.guild.id, "prefix") || ">"}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "prefix",
  category: "Moderation",
  description: "Changes guilds prefix for Scarlett.",
  usage: "prefix {new_prefix}",
};
