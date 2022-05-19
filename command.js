// SPDX-License-Identifier: MIT

/**
 * Process commands.
 * @param { import("discord.js").Client } client - bot client
 * @param { import("discord.js").Message } message - received message
 */
module.exports = async function (client, message) {
  const mentionedUsers = message.mentions.users.toJSON().filter(user => user.id !== client.user?.id && user.id !== message.author?.id);
  if (mentionedUsers.length >= 1) {
    // combine
    if (mentionedUsers.length > 1) {
      message.reply("エラー: 合体は１人とまでしかできません！ごめんね！");
      return;
    }
    //await combine(client, message.author, mentionedUsers[0]);
    return;
  }
  //if (message.) // TODO: check reply
};
