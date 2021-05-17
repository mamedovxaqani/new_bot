require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  function rand(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const chatId = msg.chat.id;
  const first_name = msg.from.first_name;

  const animalsArray = ["Лев", "Краб", "Зайчик", "Собака"];
  const randomAnimal =
    animalsArray[Math.floor(Math.random() * animalsArray.length)];

  // send a message to the chat acknowledging receipt of their message

  if (first_name == "Eguene") {
    bot.sendMessage(chatId, ` ${first_name}: ${randomAnimal}`);
  } else {
    const randomNumber = rand(1, 100);
    if (randomNumber >= 1 && randomNumber <= 30) {
      bot.sendMessage(chatId, ` ${first_name}: ${randomAnimal}`);
    } else {
      return "";
    }
  }
});
