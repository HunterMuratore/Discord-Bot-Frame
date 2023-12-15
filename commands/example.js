const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('example')
        .setDescription('sends a test messages'),
    async execute(interaction) {
        await interaction.reply("Testing");
    },
};
