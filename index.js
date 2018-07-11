const Discord= require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function(){
    bot.user.setGame("command: *help");
    console.log("connected")
});
/**
 * copier le token du bot 
 */
bot.login("NDQyMzY0NDIxOTIzNDA1ODI0.DibfAg.OWK7tLQzWSZRnRjrdFt0ZnaRNcQ");

/**
 * reponse attendue du bot 
 */
bot.on('message', message =>{
    if(message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes:\n -*help");
  }
});
bot.on('message', message =>{
    if(message.content === "aziz"){
    message.channel.sendMessage("kone aziz karamoko 21 ans nee le 02 juin");
  }
  
});
