const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let permissionEmbed = new Discord.MessageEmbed()
    .setAuthor("💢 YOU DO NOT HAVE PERMISSION TO DO THAT COMMAND!")
    .setDescription(
      "If you feel that this is an error, please feel free to contact an Administrator."
    )
    .setColor(`#00FFFF`);
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
    return message.channel.send(permissionEmbed);
  } else {
    let botUsername = args[0];
    if (!botUsername) return message.reply("Please provide a valid username");
    message.guild.members.cache
      .get(`${client.user.id}`)
      .setNickname(botUsername);

    let botEmbed = new Discord.MessageEmbed()
      .setColor(`#00FFFF`)
      .addField(
        "Bot username has been successfully changed!",
        botUsername + " is now the username of the bot :white_check_mark:"
      )
      .setFooter("")
      .setTimestamp();
    message.channel.send(botEmbed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "botnick",
  category: "Misc",
  description: "Changes the bots nickname, Scarlett > {your_input)",
  usage: "botnick {nickname}",
};
