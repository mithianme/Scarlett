const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let rolecheck = args[0];
  if (!rolecheck)
    return message.channel.send(
      `Please add a valid role to the arguments (>roleinfo {name}}.`
    );

  let guild = client.guilds.cache.get(message.guild.id);
  let role = message.guild.roles.cache.find((r) => r.name === rolecheck);

  // let role = message.guild.cache.get(message.guild.id).roles.find('name', rolecheck);
  if (!role)
    return message.channel.send(
      "Sorry, this role was not found in the server, please re-enter the role name... (>roleinfo {name})"
    );

  const roleEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle("ROLE INFORMATION")
    .setColor(`#00FFFF`)
    .addField("Role name:", `${role.name}`, true)
    .addField("Role ID:", `${role.id}`, true)
    .addField("Role Created at:", role.createdAt.toDateString())
    .addField("Is this role mentionable: ", role.mentionable ? "Yes" : "No");

  message.channel.send(roleEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
};

exports.help = {
  name: "roleinfo",
  category: "Misc",
  description: "Gives information regarding the mentioned role.",
  usage: "roleinfo {role}",
};
