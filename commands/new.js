const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const settings = (message.settings = client.getSettings(message.guild));
  message.delete();

  let supportRole = message.guild.roles.cache.find(r => r.name === "Support Team");
  if (!supportRole) return message.channel.send("There is no `Support Team` role! Please tell an admin to create this role!");

  let reason = args.join(" ");
  if (!reason) return message.channel.send(`Missing arguments. ${settings.prefix}new <subject>`);

  let user = message.author;
  if (message.guild.channels.cache.find(c => c.topic == user.id)) return message.channel.send("You already have an opened ticket!");

  let categoricalChannel = message.guild.channels.cache.find(x => x.name === "Tickets" && x.type === "category");
  if(!categoricalChannel) return message.channel.send("Please tell an admin to create a category called `Tickets`")
  message.guild.channels.create(`ticket-${user.username}`, { type: 'text' })
  .then(c => {
      c.setParent(categoricalChannel.id);
      c.setTopic(user.id);

      let everyoneRole = message.guild.roles.cache.find(r => r.name == "@everyone");
      c.createOverwrite(everyoneRole, {
          SEND_MESSAGES: false,
          VIEW_CHANNEL: false
      });

      c.createOverwrite(supportRole, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      });

      c.createOverwrite(message.author, {
          SEND_MESSAGES: true,
          VIEW_CHANNEL: true
      });

      let Embed = new Discord.MessageEmbed()
      .setTitle('You have successfully created a ticket!')
      .setDescription(`<#${c.id}>`)
      .setColor('#00FFFF')
      .setFooter(client.user.tag, client.user.displayAvatarURL())
      .setTimestamp()
      message.channel.send(Embed);
    
      let embed = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .addField(`${message.author.username}'s ticket`, `Hello <@${message.author.id}>! While you are waiting for our staff, please explain what you need help with.\n\n**Subject:** \`${reason}\``)
      .setFooter(`Ticket created by ${user.tag}`, user.avatarURL())
      .setTimestamp();

      c.send(embed);
  })
  .catch(e => {
      console.log(e);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticket", "newticket"],
};

exports.help = {
  name: "new",
  category: "Moderation",
  description: "Creates a private ticket.",
  usage: "new <subject of ticket>",
};
