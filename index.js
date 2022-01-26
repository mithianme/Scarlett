// Glitch required
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://scarlett-discord.glitch.me/`);
}, 280000);

// Discord Bot
const Discord = require("discord.js");
const Enmap = require("enmap");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const client = new Discord.Client({ disableMentions: 'everyone' });
client.config = require("./config.js");

client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);

client.commands = new Enmap();
client.aliases = new Enmap();

client.settings = new Enmap({ name: "settings" });

const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.logger.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach((f) => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });

  const evtFiles = await readdir("./events/");
  client.logger.log(`Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach((file) => {
    const eventName = file.split(".")[0];
    client.logger.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
  });

  client.login(client.config.token);
};

init();
