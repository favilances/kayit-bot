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
        .setDescription("Bir seçenek belirt! \n `yetkili`, `log`, `erkek`, `kız`, `kanal`, `alınacak-rol`, `tag`,`hepsi`")
        .setColor(client.embed.renk)
        .setFooter(client.embed.footer)
        if(!command) return message.channel.send(embed)
         if(command.toLowerCase() === "log") {
            message.channel.send("Başarıyla Silindi!")
            client.db.delete(`kayıtlog_${message.guild.id}`)
                  }
       if(command.toLowerCase() === "yetkili") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`kayıtçırol_${message.guild.id}`)
         }
     if(command.toLowerCase() === "kız") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`kızrol_${message.guild.id}`) 
         }
     if(command.toLowerCase() === "erkek") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`erkekrol_${message.guild.id}`)   
     }
     if(command.toLowerCase() === "kanal") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`kayıtkanal_${message.guild.id}`)   
     }
     if(command.toLowerCase() === "alınacak-rol") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`alınacakrol_${message.guild.id}`)    
     }
     if(command.toLowerCase() === "tag") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`tag_${message.guild.id}`)
     }     if(command.toLowerCase() === "hepsi") {
        message.channel.send("Başarıyla Silindi!")
        client.db.delete(`tag_${message.guild.id}`)
        client.db.delete(`alınacakrol_${message.guild.id}`)    
        client.db.delete(`kayıtkanal_${message.guild.id}`)   
        client.db.delete(`erkekrol_${message.guild.id}`)  
        client.db.delete(`kızrol_${message.guild.id}`) 
        client.db.delete(`kayıtçırol_${message.guild.id}`)
        client.db.delete(`kayıtlog_${message.guild.id}`)




     }
 };
 exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: ["delete"],
     permLevel: 0
   };
   
   exports.help = {
     name: 'sıfırla',
     description: 'Test komutu',
     usage: 'prefix+test'
   };