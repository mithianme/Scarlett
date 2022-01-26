const Discord = require("discord.js");
const googleTTS = require('google-tts-api');

exports.run = async (client, message, args) => {
    message.delete()

    let ttsMessage = args.join(" ")
    if(!ttsMessage)return message.channel.send(":x: Please enter the message you want to send in text to speech format.")

    googleTTS(ttsMessage, 'en', 1)  
    .then(function (url) {
        const ttsAttachment = new Discord.MessageAttachment(url).setName('tts.mp3')
        message.channel.send(ttsAttachment), ('.mp3')
    })
    .catch(function (err) {
      console.error(err.stack);
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "tts",
    category: "Misc",
    description: "TTS",
    usage: "tts"
  };