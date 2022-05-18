// SPDX-License-Identifier: MIT

/**
 * Process commands.
 * @param { import("discord.js").Client } client - bot client
 * @param { import("discord.js").Message } message - received message
 * @param { string } prefix - command prefix
 */
module.exports = async function (client, message, prefix) {
  message.reply("仕返しメンション！");
};
