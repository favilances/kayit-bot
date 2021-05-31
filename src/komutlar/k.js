const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    if(!message.member.roles.cache.has(client.kayıt.yetkili)) return message.channel.send(
        new Discord.MessageEmbed()
        .setColor(client.embed.renk)
        .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanmak için <@&${yetkilick.id}> rolüne sahip olmalısın!`)
        .setFooter(client.embed.footer)
        )
          if (message.channel.id !== client.kayıt.kanal) return message.channel.send(`Kayıt Kanalı <#${client.kayıt.kanal}> Suan Burda`);
          let user = message.mentions.members.first();
          if (!user) return message.channel.send(`Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
          let guild = message.guild
  let isim = args[1]
  let yas = args[2]
  if (!isim) return message.channel.send(`İsmini girmelisin.`)
  if (!yas) return message.channel.send(`Yaşını girmelisin.`)
  user.setNickname(`${client.kayıt.tag} ${isim} | ${yas}`)
  user.roles.add(client.kayıt.kız)
  message.channel.send(`${user} **Sunucuya Kayıt Oldun İyi Eğlenceler**`)
  let log = message.channel.guild.channels.cache.get(client.kayıt.log);
 log.send(`${user} **Adlı Kullanıcı Başarılı Şekilde Kayıt Oldu** ✅ `);


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kız"],
  permLevel: 0,
  kategori: "Kayıt"
}

exports.help = {
  name: 'k',
  description: "Sunucuya Kız Olarak kayıtolmaya yarar",
  usage: 'k <etiket> <isim> <yaş>'
}