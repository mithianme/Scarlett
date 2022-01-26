const Discord = require("discord.js");

module.exports = async (client, guild) => {
  let joinMessageChannel = guild.channels.cache.find(
    (channel) =>
      channel.type === "text" &&
      channel.permissionsFor(client.user).has("SEND_MESSAGES")
  );
  if (!joinMessageChannel)
    return console.log(`I have joined ${guild.name} but can't send messages`);

  let guildEmbed = new Discord.MessageEmbed()

    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle(
      "<a:689758038319693824:709814481760288848> THANK YOU FOR ADDING SCARLETT TO YOUR SERVER"
    )
    .setDescription(
      "Hello there, thank you for adding 'Scarlett' to your Disord server. To begin with, we recommend using the command '>help', this will then display all the commands that you are able to use. Once you understand all the commands you will then be able to use the bot to its full potential, thank you for taking the time to read this, have fun using Scarlett =)"
    )
    .setFooter(
      "'Scarlett' was created by mithian#6666, con#1337,  Udxr#6191, Syfe#6969, if you need any support or have any questions we recommend you join our support server that can be found here: https://discord.gg/WZcCDkE."
    )
    .setTimestamp()
    .setColor("#87CEEB");

  guild.owner.send(guildEmbed);

  joinMessageChannel.send(guildEmbed);
};
