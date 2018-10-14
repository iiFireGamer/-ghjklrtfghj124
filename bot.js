const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {

console.log('iiFireGame');

client.user.setGame(`FireShop`,'https://www.twitch.tv/TEST-Broadcast');
	
client.on('guildMemberAdd', member=> {
  member.addRole(member.guild.roles.find("name","Fire"));
  });

});

client.login("NDkxNzI4Mzg0NjI0Mjk1OTU1.DqVMaA.3JqUhStqE7ahwfzc5MDbkdq2oVU");
