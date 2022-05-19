// SPDX-License-Identifier: MIT

const dotenv = require("dotenv");
const { Client, Intents, User } = require("discord.js");

const command = require("./command.js");

// prepare

dotenv.config();
if (process.env.HTTP_SERVER) {
  const express = require("express");
  const server = express();
  server.get("/", (req, res) =>
    res.send(
      '<center><h1><a href="//github.com/TwoSquirrels/CombineBot#readme">' +
        "CombineBOT</a> は起動しています</h1></center>"
    )
  );
  server.listen(3000, () => console.log("Express ready!"));
}

// bot

(async () => {
  // start bot

  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_WEBHOOKS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.DIRECT_MESSAGES,
    ],
  });

  // wait init
  await new Promise((resolve) => {
    client.once("ready", () => resolve(undefined));
    client.login(process.env.DISCORD_TOKEN);
  });
  console.log("BOT ready!");

  // register events

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (message.mentions.users.has(String(client.user?.id)))
      await command(client, message);
  });
})().catch(console.error);
