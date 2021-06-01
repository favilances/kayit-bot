const Discord = require('discord.js');
const efdb = require("efdb");
const db = new efdb({
  "databaseName": "database",
  "databaseFolder": "databases",
  "autoFile": true,
  "seperator":".",
  "ignoreWarns":true,
  "deletingBlankData":true
});

const client = new Discord.Client({
  disableMentions: "everyone", 
  ws: { 
    intents: ["GUILD_MEMBERS", "GUILD_WEBHOOKS", "GUILD_VOICE_STATES", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING", "GUILDS", "GUILD_BANS", "GUILD_EMOJIS", "GUILD_INTEGRATIONS", "GUILD_INVITES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING"] 
  },
  autoReconnect: true,
  restTimeOffset: 0,
  messageEditHistoryMaxSize: 200,
  messageCacheMaxSize: 200,
  messageSweepInterval: 180,
  messageCacheLifetime: 180,
  partials: ['MESSAGE', 'REACTION', 'CHANNEL']
})
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./src/util/eventLoader')(client);
const log = message => {
  console.log(`Yüklenen Komut; ${message}`);
};
client.ayarlar = {
  token: "TOKEN",
  prefix: "PREFİX",
  sahip: ["id"]
}
client.embed = {
  renk : "",
  footer: "",
  icon : "",
  resim : ""
}

let prefix = client.ayarlar.prefix;
client.db = db;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./src/komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut kullanım için hazırlanıyor.`);
  files.forEach(f => {
    let props = require(`./src/komutlar/${f}`);
    log(`${props.help.name} komutu kullanıma hazır.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./src/komutlar/${command}`)];
      let cmd = require(`./src/komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./src/komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./src/komutlar/${command}`)];
      let cmd = require(`./src/komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === client.ayarlar.sahip) permlvl = 4;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.login(client.ayarlar.token);
