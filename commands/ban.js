const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete();

  if (!message.guild)
    return message.channel.send(
      "💢 This command can only be used inside a server."
    );

  let permission1Embed = new Discord.MessageEmbed()
    .setAuthor("💢 YOU DO NOT HAVE PERMISSION TO DO THAT COMMAND OR YOU CANT BAN THEM!")
    .setDescription(
      "If you feel that this is an error, please feel free to contact an Administrator."
    )
    .setColor(`#00FFFF`);
  
  var banMention =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  
    if (!banMention)
    return message.channel.send(":anger: Please enter a user to ban!");
  if (banMention.id == message.guild.ownerID)
    return message.channel.send(
      "You cannot ban the **OWNER** of the **SERVER**"
    );

  if (banMention.id == message.author.id)
    return message.channel.send(
      "<a:689758037275181137:709814512391290881> You cannot ban yourself!"
    );

  if (!message.member.hasPermission("BAN_MEMBERS") || !banMention.bannable)
    return message.channel.send(permission1Embed);
  let permission2Embed = new Discord.MessageEmbed()
    .setAuthor("⚠️ I DO NOT HAVE PERMISSION TO DO THAT COMMAND")
    .setDescription("PLEASE GIVE ME THE REQUIRED PERMISSIONS (BAN_MEMBERS)!")
    .setColor(`#00FFFF`);
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send(permission2Embed);

  var banReason = args.slice(1).join(" ");

  let banEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("**MEMBER HAS BEEN BANNED**")
    .addField("Banned Member:", `${banMention.user.tag}`)
    .addField("Ban Author:", message.author.tag)
    .addField("Reasoning:", `${banReason || "No reason"}`)
    .addField("Date & Time:", message.createdAt.toLocaleString())
    .setFooter(
      "To prevent yourself from being banned, muted or kicked in the future please follow take time to revise the rules that can be found in #rules or on our website: https://mithian.xyz/"
    )
    .setTimestamp()
    .setColor(`#00FFFF`);

  banMention.send(banEmbed).then(() => {
    banMention.ban(banMention, { days: 900, reason: banReason || "No reason" });
  });
  message.channel.send(banEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "ban",
  category: "Moderation",
  description: "Bans a specific user from the server.",
  usage: "ban {@username}",
};
