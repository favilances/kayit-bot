const Discord = require('discord.js')
let talkedRecently = new Set();

module.exports = message => {

  const db = require("quick.db");

  let client = message.client;

  if (message.author.bot) return;

  if (!message.content.startsWith(client.ayarlar.prefix)) return;

    if (talkedRecently.has(message.author.id)) {

    return;

  }

  talkedRecently.add(message.author.id);

  setTimeout(() => {

    talkedRecently.delete(message.author.id);

  }, 2350);

  let command = message.content.split(" ")[0].slice(client.ayarlar.prefix.length);
if(!client.commands.has(command)){
    var e = require('quick.db').fetch(`055`)
    if(!e) return;
    var mesajcik = e
    .replace("{command}", `${command}`)
    .replace("{command}", `${command}`)
    .replace("{command}", `${command}`)
  message.channel.send(`${mesajcik}`)
    }
  let params = message.content.split(" ").slice(1);

  let perms = client.elevation(message);

  let cmd;

  if (client.commands.has(command)) {

    cmd = client.commands.get(command);

  } else if (client.aliases.has(command)) {

    cmd = client.commands.get(client.aliases.get(command));

  }

  if (cmd) {

    if (perms < cmd.conf.permLevel) return;

    cmd.run(client, message, params, perms);

  }

};