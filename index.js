const { Client, GatewayIntentBits } = require('discord.js');

require('dotenv').config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.author.id === '346260232550350848') {
        message.react('🤡');
    }
});

client.login(process.env.DISCORD_TOKEN);
