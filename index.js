// SPDX-License-Identifier: MIT

const dotenv = require("dotenv");
const { Client, Intents } = require("discord.js");

// prepare

dotenv.config();
if (process.env.HTTP_SERVER) {
  const express = require("express");
  const server = express();
  server.get("/", (req, res) =>
    res.send(
      '<center><h1><a href="//github.com/TwoSquirrels/CombineBot#readme">' +
        "合体 BOT</a> は起動しています</h1></center>"
    )
  );
  server.listen(3000, () => console.log("Express ready!"));
}

// bot

const bot = new Client({
  intents: [
    "GUILDS",
    "GUILD_WEBHOOKS",
    "GUILD_MESSAGES",
    "DIRECT_MESSAGES",
  ].map((intent_id) => Intents.FLAGS[intent_id]),
});

// register events

bot.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content === "ping") await message.reply("pong");
});

bot.once("ready", () => console.log("BOT ready!"));

// login
bot.login(process.env.DISCORD_TOKEN);
