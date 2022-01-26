const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const user =
    message.mentions.users.first() ||
    client.users.cache.find((user) => user.username === args[0]) ||
    client.users.cache.get(args[0]) ||
    message.author;

  const gUser = message.guild.member(user);

  var status = user.presence.status;

  let userStatus = {
    online: ":cherries: Online",
    dnd: ":underage: Do Not Disturb",
    idle: ":sushi: Away",
    offline: ":white_heart: Invisible",
  };

  const MentionEmbed = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setThumbnail(user.displayAvatarURL({ format: "png", dynamic: true }))
    .setTitle("DISPLAYING INFORMATION...")
    .addField("Username: ", `${user.tag} \nUser ID: ${user.id}`, true)
    .addField("Nickname: ", `${user.displayName || "No nickname set"}`, false)
    .addField("Current Status: ", `${userStatus[status]}`, false)
    .addField(
      "Role(s): ",
      `${gUser.roles.cache.map((roles) => roles.toString()).join(" ")}`
    )
    .addField("Highest Role Assigned: ", gUser.roles.highest.toString())
    .addField("Joined Server: ", gUser.joinedAt.toDateString(), true)
    .addField("Joined Discord: ", user.createdAt.toDateString(), true)
    .setFooter(
      user.username,
      user.displayAvatarURL({ format: "png", dynamic: true })
    )
    .setTimestamp();
  message.channel.send(MentionEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["whois", "who", "profile"],
};

exports.help = {
  name: "userinfo",
  category: "Misc",
  description: "Gives information regarding a specific user or yourself depending on the usage.",
  usage: "userinfo {@username} || userinfo",
};
