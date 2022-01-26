const Discord = require('discord.js')
const request = require('request-promise')
const talkedRecently = new Set();

exports.run = async (client, message, args) => {

    var colors = [
        "css", "yaml", "fix"
    ]
    
    var asciiMessage = args.join(" ")
    if(!asciiMessage)return message.channel.send(`Please provide the message you want to convert to ascii.`)
    if(asciiMessage.length > 2000)return message.channel.send(`Please provide a message that is lower than 2000 characters.`)

    

    var color = colors[Math.floor(Math.random() * colors.length)];

  
    request({
        uri: `http://artii.herokuapp.com/make?text=${asciiMessage}`,
        json: true
    }).then(data => {
        if(data.length > 2000)return message.channel.send(`I cannot send messages that are over 2000 characters long.`)
        message.channel.send(`<a:Loading:718975222337765417> Loading...`).then((msg) => {
            setTimeout(() => {
                msg.edit("```" + color + "\n" + data + "\n" + "```")
            }, 3000);
        })
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "ascii",
  category: "Misc",
  description: "Sends the given message in ascii format.",
  usage: "ascii {message}",
};
