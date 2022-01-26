const Discord = require("discord.js");
const giveMeAJoke = require('give-me-a-joke');

exports.run = async (client, message, args) => {

    message.delete()
   
    giveMeAJoke.getRandomDadJoke(function(joke) {
        message.channel.send(joke)
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jokes"],
};

exports.help = {
  name: "joke",
  category: "Misc",
  description: "Random joke",
  usage: "joke",
};