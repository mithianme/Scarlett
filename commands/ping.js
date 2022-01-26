const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let start = Date.now();
  message.channel.send("fuck off Im awake you stupid cunt").then((message) => {
    let diff = Date.now() - start;
    let API = Math.floor(Math.random(client.ws.ping));
    message.edit(`My latency is ${diff}ms and my ping to the API is ${API}ms`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "ping",
  category: "Misc",
  description: "pong",
  usage: "ping",
};
