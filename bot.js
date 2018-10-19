const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment")

client.on('ready', () => {

console.log('iiFireGame');

client.user.setGame(`FireShop`,'https://www.twitch.tv/TEST-Broadcast');
	
client.on('guildMemberAdd', member=> {
  member.addRole(member.guild.roles.find("name","Fire"));
  });

});

client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
            let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
        message.reply (' ')
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(message.guild.roles.find('name', 'Muted')); 
    const embed500 = new Discord.RichEmbed()
      .setTitle(":x: | تمت معاقبتك")
            .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
      .addField(`Flip`,`Bot`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL) 
        .setFooter(`${message.guild.name} Server`)
     message.channel.send(embed500) 
    
        
    }
    }
});

const fs = require('fs');
const suck = JSON.parse(fs.readFileSync('./suck.json', 'utf8'));
const prefix = "!";
// By M7MD
client.on("message", message => {
    fs.writeFile('./suck.json', JSON.stringify(suck));
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.forEach(g => {
            if (suck[g.id]) {
                if (suck[g.id].role) {
                    var role = g.roles.get(suck[g.id].role);
                    if (role) {
                        role.edit({color : "RANDOM"});
                    };
                };
            };
        });
    }, 1500);
});
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.channel.type !== "text") return message.reply("This Command Is Only Allowed In Servers");
    var args = message.content.split(" ");
    var command = args[0].slice(prefix.length);
    switch(command) {
        case "rainbow" :
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("no no");
        message.guild.createRole({name : "FireShop | Rainbow", color : "RANDOM"}).then(r => {
            r.edit({color : "RANDOM"});
            suck[message.guild.id] = {role : r.id};
        });
    };
});

client.login("NDkxNzI4Mzg0NjI0Mjk1OTU1.DqVMaA.3JqUhStqE7ahwfzc5MDbkdq2oVU");
