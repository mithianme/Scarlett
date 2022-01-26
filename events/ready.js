const Discord = require("discord.js");
module.exports = async (client) => {
  client.snipe = new Discord.Collection();
  client.logger.log(
    `
  -------------------
  ~~ Scarlett ~~ 
  Logged into account ${client.user.tag}
  -------------------
  `,
    "ready"
  );
  client.user.setActivity(">help", {
    type: "STREAMING",
    url: "https://twitch.tv/mithianme",
  });
  setTimeout(function () {
    client.user.setActivity(">help", {
      type: "STREAMING",
      url: "https://twitch.tv/mithianme",
    });
  }, 60000);
};
