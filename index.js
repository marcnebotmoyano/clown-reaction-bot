const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error('Token not found. Ensure DISCORD_TOKEN is set in environment variables.');
    process.exit(1);
}

client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.author.id === '346260232550350848') {
        message.react('🤡');
    }
});

client.login(token);
