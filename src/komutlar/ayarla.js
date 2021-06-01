exports.run = async(client, message, args) => {
   const { Discord, MessageEmbed, discord } =require('discord.js')
   const db = client.db
      const yetkiembed = new MessageEmbed()
      .setColor('RED')
      .setTitle('___**HATA**___')
      .setDescription('**Yönetici** Yetkin Yok!')
      .setImage('https://s4.gifyu.com/images/yonetic.gif')
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(yetkiembed); 
        let command = args[0];
       const embed = new MessageEmbed()
       .setDescription("Bir seçenek belirt! \n `yetkili`, `log`, `erkek`, `kız`, `kanal`, `alınacak-rol`, `tag`")
       .setColor(client.embed.renk)
       .setFooter(client.embed.footer)
       if(!command) return message.channel.send(embed)
        if(command.toLowerCase() === "log") {
          let  kanal = message.mentions.channels.first()
          if(!kanal) return message.channel.send(new MessageEmbed().setDescription(`Bir Kanal Belirt!`).setColor(client.embed.renk).setFooter(client.embed.footer))
          db.set(`kayıtlog_${message.guild.id}`,kanal.id)
          const ayarlandı = new MessageEmbed()
          .setAuthor(client.user.username, client.user.avatarURL())  
          .setTitle(`${client.user.username} - Kayıt Log Ayarlandı `)
          .setColor(client.embed.color)
          .setDescription(`Kayıt Log Kanalı Başarıyla ${kanal} Olarak Ayarlandı ! `)
          .setThumbnail(client.user.avatarURL())
          .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
          message.channel.send(ayarlandı)       
         }
      if(command.toLowerCase() === "yetkili") {
        let rol = message.mentions.roles.first();   
        if (!rol) {
          const ayarlanmadı = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())  
        .setTitle(`${client.user.username} - Kayıtçı Rol Ayarla `)
        .setColor(client.embed.color)
        .setDescription(`Ayarlayacağınız Kayıtçı Rolü Belirtiniz ! `)
        .setThumbnail(client.user.avatarURL())
        .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
        message.channel.send(ayarlanmadı)
        }
        const ayarlandı = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())  
        .setTitle(`${client.user.username} - Kayıtçı Rol Ayarlandı `)
        .setColor(client.embed.color)
        .setDescription(`Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
        .setThumbnail(client.user.avatarURL())
        .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
        db.set(`kayıtçırol_${message.guild.id}`, rol.id)
        message.channel.send(ayarlandı)
        }
    if(command.toLowerCase() === "kız") {
      let rol = message.mentions.roles.first();   
      if (!rol) {
        const ayarlanmadı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kız Rol Ayarla `)
      .setColor(client.embed.color)
      .setDescription(`Ayarlayacağınız Kız Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      const ayarlandı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kız Rol Ayarlandı `)
      .setColor(client.embed.color)
      .setDescription(`Kayıt Edilecek Kız Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)
      db.set(`kızrol_${message.guild.id}`, rol.id)
        }
    if(command.toLowerCase() === "erkek") {
      let rol = message.mentions.roles.first();   
      if (!rol) {
        const ayarlanmadı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Erkek Rol Ayarla `)
      .setColor(client.embed.color)
      .setDescription(`Ayarlayacağınız Erkek Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      const ayarlandı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Erkek Rol Ayarlandı `)
      .setColor(client.embed.color)
      .setDescription(`Kayıt Edilecek Erkek Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)
      db.set(`erkekrol_${message.guild.id}`, rol.id)
    }
    if(command.toLowerCase() === "kanal") {
      let  kanal = message.mentions.channels.first()
      if(!kanal) return message.channel.send(new MessageEmbed().setDescription(`Bir Kayıt Kanal Belirt!`).setColor(client.embed.renk).setFooter(client.embed.footer))
      db.set(`kayıtkanal_${message.guild.id}`,kanal.id)
      const ayarlandı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Kayıt Kanalı Ayarlandı `)
      .setColor(client.embed.color)
      .setDescription(`Kayıt Kanalı Başarıyla ${kanal} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)       
    }
    if(command.toLowerCase() === "alınacak-rol") {
      let rol = message.mentions.roles.first();   
      if (!rol) {
        const ayarlanmadı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Alınacak Rol Ayarla `)
      .setColor(client.embed.color)
      .setDescription(`Ayarlayacağınız Alınacak  Rolü Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      const ayarlandı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Alınacak Rol Ayarlandı `)
      .setColor(client.embed.color)
      .setDescription(`Kayıt Edilecek Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)
      db.set(`alınacakrol_${message.guild.id}`, rol.id)      
    }
    if(command.toLowerCase() === "tag") {
      let tag = args[1]  
      if (!tag) {
        const ayarlanmadı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Tag Ayarla `)
      .setColor(client.embed.color)
      .setDescription(`Ayarlayacağınız Tag'ı Belirtiniz ! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlanmadı)
      }
      const ayarlandı = new MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())  
      .setTitle(`${client.user.username} - Tag Ayarla `)
      .setColor(client.embed.color)
      .setDescription(`Tag Başarıyla ${tag} olarak ayarlandı!! `)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
      message.channel.send(ayarlandı)
      db.set(`tag_${message.guild.id}`, tag)      
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kur"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'setup',
    description: 'Test komutu',
    usage: 'prefix+test'
  };