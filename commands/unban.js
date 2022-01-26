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
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(permission1Embed);
  let permission2Embed = new Discord.MessageEmbed()
    .setAuthor("⚠️ I DO NOT HAVE PERMISSION TO DO THAT COMMAND")
    .setDescription("PLEASE GIVE ME THE REQUIRED PERMISSIONS (BAN_MEMBERS)!")
    .setColor(`#00FFFF`);
  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send(permission2Embed);

  var unbanID = args[0];

  var unbanReason = args.slice(1).join(" ");
  if (!unbanReason)
    return message.channel.send(
      ":clipboard: Please add a reason to your unban!"
    );

  let unbanEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("**MEMBER HAS BEEN UNBANNED**")
    .addField("Member Unbanned:", unbanID)
    .addField("Unban Author:", message.author.tag)
    .addField("Reasoning:", `${unbanReason}`)
    .addField("Date & Time:", message.createdAt.toLocaleString())
    .setFooter(
      "To prevent yourself from being banned, muted or kicked in the future please follow take time to revise the rules that can be found in #rules or on our website: https://mithian.xyz/"
    )
    .setTimestamp()
    .setColor(`#00FFFF`);

  message.guild.members.unban(unbanID, unbanReason).catch(console.error);

  message.channel.send(unbanEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "unban",
  category: "Moderation",
  description: "Unbans the mentioned ID.",
  usage: "unban {user_id}",
};
