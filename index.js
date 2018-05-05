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
bot.login("NDQyMzY0NDIxOTIzNDA1ODI0.Dc9vkw.fOyf7tC-t1fqQaxMAzg6ZAIyPsI");

/**
 * reponse attendue du bot 
 */
bot.on('message', message =>{
    if(message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes:\n -*help");
  }
});