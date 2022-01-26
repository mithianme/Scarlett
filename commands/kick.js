const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

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
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(permission1Embed);
  let permission2Embed = new Discord.MessageEmbed()
    .setAuthor("⚠️ I DO NOT HAVE PERMISSION TO DO THAT COMMAND!")
    .setDescription("PLEASE GIVE ME THE REQUIRED PERMISSIONS (KICK MEMBERS)!")
    .setColor(`#00FFFF`);
  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.channel.send(permission2Embed);

  var kickMention =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!kickMention)
    return message.channel.send(":anger: Please enter a user to kick!");
  if (kickMention.user.id == message.guild.ownerID)
    return message.channel.send(
      "You cannot kick the **OWNER** of the **SERVER**"
    );

  if (kickMention.user.id == message.author.id)
    return message.channel.send(
      "<a:689758037275181137:709814512391290881> You cannot kick yourself!"
    );

  var kickReason = args.slice(1).join(" ");

  let kickEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("**MEMBER HAS BEEN KICKED**")
    .addField("Member Kicked:", `${kickMention.user.tag}`)
    .addField("Kick Author:", message.author.tag)
    .addField("Reasoning:", `${kickReason || "No reason"}`)
    .addField("Date & Time:", message.createdAt.toLocaleString())
    .setFooter(
      "To prevent yourself from being banned, muted or kicked in the future please follow take time to revise the rules that can be found in #rules or on our website: https://mithian.xyz/"
    )
    .setTimestamp()
    .setColor(`#00FFFF`);

  kickMention.send(kickEmbed).then(() => {
    kickMention.kick();
  });
  message.channel.send(kickEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "kick",
  category: "Moderation",
  description: "Kicks the specific member mentioned from the guild.",
  usage: "kick {@username}",
};