const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const region = {
    brazil: ":flag_br: Brazil",
    europe: ":flag_eu: Europe",
    singapore: ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    sydney: ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    hongkong: ":flag_hk: Hong Kong",
    russia: ":flag_ru: Russia",
    southafrica: ":flag_za:  South Africa",
  };

  message.delete();

  const serverEmbed = new Discord.MessageEmbed()

    .setAuthor("SERVER INFORMATION")
    .setImage(message.guild.iconURL({ format: "png", dynamic: true }))
    .setDescription(
      `Server Name: ${message.guild.name}\nServer ID: ${message.guild.id}\nServer Owner: ${message.guild.owner ? message.guild.owner.user.tag : message.guild.ownerID }`
    )
    .addField("Member Count:", `${message.guild.memberCount}`, true)
    .addField(
      "Member(s) Online:",
      `${
        message.guild.members.cache.filter(
          (m) => m.presence.status != "offline"
        ).size
      }`,
      true
    )
    .addField("Server Region:", region[message.guild.region], false)
    .addField(
      "Server Created:",
      message.guild.createdAt.toLocaleString(),
      false
    )
    .addField(
      "Text Channels",
      message.guild.channels.cache.filter(
        (textChan) => textChan.type === "text"
      ).size,
      true
    )
    .addField(
      "Voice Channels",
      message.guild.channels.cache.filter(
        (voiceChan) => voiceChan.type === "voice"
      ).size,
      true
    )
    .addField("Role Count", message.guild.roles.cache.size, true)
    .setColor("#00FFFF")
    .setTimestamp();

  message.channel.send(serverEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "serverinfo",
  category: "Misc",
  description: "Gives information about the Discord Server.",
  usage: "serverinfo",
};