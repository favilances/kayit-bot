const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  let yetkili = client.db.fetch(`kayıtçırol_${message.guild.id}`)
  let kayıtkanal = client.db.fetch(`kayıtkanal_${message.guild.id}`)
  let kızrol = client.db.fetch(`kızrol_${message.guild.id}`)
  let log1 = client.db.fetch(`kayıtlog_${message.guild.id}`)
  let alınacakrol = client.db.fetch(`alınacakrol_${message.guild.id}`)
  let tag = client.db.fetch(`tag_${message.guild.id}`)
  if(!yetkili) return message.channel.send("Yetkili Ayarlanmamış!");
  if(!kayıtkanal) return message.channel.send("Kayıt Kanalı Ayarlanmamış!");
  if(!kızrol) return message.channel.send("Erkek Rol Ayarlanmamış");
  if(!log1) return message.channel.send("Log Kanalı Ayarlanmamış!");
  if(!alınacakrol) return message.channel.send("Alıanacak Rol Ayarlanmamış");
  if(!tag) return message.channel.send("Tag Ayarlanmamış!")
    if(!message.member.roles.cache.has(yetkili)) return message.channel.send(
        new Discord.MessageEmbed()
        .setColor(client.embed.renk)
        .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Bu komutu kullanmak için <@&${yetkili}> rolüne sahip olmalısın!`)
        .setFooter(client.embed.footer)
        )
          if (message.channel.id !== kayıtkanal) return message.channel.send(`Kayıt Kanalı <#${kayıtkanal}> Suan Burda`);
          let user = message.mentions.members.first();
          if (!user) return message.channel.send(`Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `)
          let guild = message.guild
  let isim = args[1]
  let yas = args[2]
  if (!isim) return message.channel.send(`İsmini girmelisin.`)
  if (!yas) return message.channel.send(`Yaşını girmelisin.`)
  user.setNickname(`${tag} ${isim} | ${yas}`)
  user.roles.remove(alınacakrol)
  user.roles.add(kızrol)
   const d = new Discord.MessageEmbed()
  .setDescription(`
  
  Kayıt Başarıyla Tamamlandı.
  Gerekli Bilgiler Kayıt Log Kanalına Gönderildi
  `)  
  .setColor(client.embed.renk)
  .setFooter(`${client.user.username} | Kayıt Sistem`)
    message.channel.send(d)
      let log = message.channel.guild.channels.cache.get(log1);
      const başarılı = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kız `)
      .setColor(client.embed.color)
      .setDescription(`Kız Olarak Kayıt Edilen Kullanıcı: ${user} \n Kız Olarak Kayıt Eden Yetkili: <@!${message.author.id}> `)
      .addField(`Kullanıcının İsmi;`, `${isim}`, true)
      .addField(`Kullanıcının Yaşı;`, `${yas}`, true)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
    log.send(başarılı)
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
  usage: 'k @etiket <isim> <yaş>'
}