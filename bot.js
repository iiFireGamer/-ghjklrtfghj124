const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {

console.log('iiFireGame');

client.user.setGame(`FireShop`,'https://www.twitch.tv/TEST-Broadcast');
	
client.on('guildMemberAdd', member=> {
  member.addRole(member.guild.roles.find("name","Fire"));
  });

});

client.login("mfa.akrW-GBF5LlZ-ol_v5491TgxHL2q8Rizwytm_Bm4zf9WcFd43nhVJqMRbPenSFJyBEJbg5hkJ1Jb3F84zWL-");
