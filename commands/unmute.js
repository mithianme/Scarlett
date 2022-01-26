const Discord = require("discord.js");

exports.run = async (client, message, args) => {
const settings = (message.settings = client.getSettings(message.guild));

if (!message.guild)
    return message.channel.send("This command can only be used inside a server.");

  let permission1Embed = new Discord.MessageEmbed()
    .setTitle("You don't have permissions to do that.")
    .setDescription("You need `MANAGE_MESSAGES` permissions to unmute.")
    .setColor(`#00FFFF`);
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(permission1Embed);
  let permission2Embed = new Discord.MessageEmbed()
    .setTitle("I don't have permissions to do that.")
    .setDescription("Please give me `MANAGE_MESSAGES` permissions to unmute.")
    .setColor(`#00FFFF`);
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(permission2Embed);


let mutedRole = message.guild.roles.cache.find(r => r.name == "Restricted Retard")

let muted = message.mentions.members.first()
let embed3 = new Discord.MessageEmbed()
.setDescription("Please mention a user to unmute.")
.setColor("#00FFFF")
.setFooter(client.user.tag, client.user.displayAvatarURL())

if(!muted) return message.channel.send(embed3)

muted.roles.remove(mutedRole.id)
muted.roles.add("884714843901423636")
let embed4 = new Discord.MessageEmbed()
.setDescription(`${muted} isn't muted or has already been unmuted.`)
.setColor("#00FFFF")
.setFooter(client.user.tag, client.user.displayAvatarURL())

if(!muted.roles.cache.has(mutedRole.id)) return message.channel.send(embed4)

let embed2 = new Discord.MessageEmbed()
.setDescription(`Successfully unmuted ${muted}`)
.setColor("#00FFFF")
.setFooter(client.user.tag, client.user.displayAvatarURL())
message.channel.send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "unmute",
  category: "Moderation",
  description: "Unmutes the mentioned user",
  usage: `unmute <mention user>`,
};