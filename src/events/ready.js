const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');


module.exports = client => {
  var prefix = client.ayarlar.prefix;
  client.user.setActivity("#Favilances Kayıt BOt'u");
  console.log(`
  ●▬▬▬▬▬▬▬▬ | Discord | ▬▬▬▬▬▬▬▬●
  Kullanıcı Adı : ${client.user.tag}
  Prefix : ${client.ayarlar.prefix}
  ●▬▬▬▬▬▬▬▬ | Discord | ▬▬▬▬▬▬▬▬●

  `);
};