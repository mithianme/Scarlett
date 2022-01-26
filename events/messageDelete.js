const Discord = require('discord.js')
module.exports = (client, message) => {
    if(!message.guild.id) return;
    if(client.snipe.get(`${client.user.id}-${message.guild.id}`)) {
        let embed1 = new Discord.MessageEmbed()
            .setDescription(message.content)
            .setColor("RANDOM")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp(Date.now())
            message.channel.send(embed1)
    }
    client.snipe.set(message.guild.id, { content: message.content, time: Date.now(), author: message.author.id })
}