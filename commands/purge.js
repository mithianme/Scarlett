const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  const amount = parseInt(args[0]);

  if (!message.guild)
    return message.channel.send(
      "💢 This command can only be used inside a server."
    );

  let permission1Embed = new Discord.MessageEmbed()
    .setAuthor("💢 YOU DO NOT HAVE PERMISSION TO DO THAT COMMAND!")
    .setDescription(
      "If you feel that this is an error, please feel free to contact an Administrator."
    )
    .setColor(`#00FFFF`);
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(permission1Embed);
  let permission2Embed = new Discord.MessageEmbed()
    .setAuthor("⚠️ I DO NOT HAVE PERMISSION TO DO THAT COMMAND")
    .setDescription(
      "PLEASE GIVE ME THE REQUIRED PERMISSIONS (MANAGE_MESSAGES)!"
    )
    .setColor(`#00FFFF`);
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(permission2Embed);

  //^^ USERS/BOT DOESNT HAVE PERMISSIONS

  let purgeEmbed2 = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(
      "You need to input a number between 1 == 100 for this command to work anything above or under will cancel the command."
    )
    .setTimestamp();

  let purgeEmbed = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(
      "It looks like you have not entered a valid number, please try again here is an example: >purge {number}. The purge event has been and is waiting for new instructions."
    )
    .setTimestamp();
  if (isNaN(amount)) {
    return message.channel.send(purgeEmbed);
  } else if (amount <= 0 || amount >= 101) {
    return message.channel.send(purgeEmbed2);
  }

  message.channel.bulkDelete(amount, true).then((chan) => {
    let purge3Embed = new Discord.MessageEmbed()
      .setTitle(":warning: MESSAGES HAVE BEEN PURGED")
      .setDescription(
        `${chan.size} messages have been purged, this could be for various different reasons you may continue chatting, however, please make sure you revise the rules as breaking them will result in a nuke/purge + punishment!`
      )
      .setColor("#00FFFF")
      .setTimestamp();
    message.channel.send(purge3Embed);

    // message.channel.send("There was an error whilst trying to purge messages for this channel.")
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "purge",
  category: "Moderation",
  description: "Purges a specific number of messages, will go off what number is provided.",
  usage: "purge {amount}",
};
