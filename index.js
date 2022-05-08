const { Receiver } = require('aoi.db');
const {inspect} = require("util");
const rec = new Receiver({
  logEncrypt: "a-32-characters-long-string-here",
  logPath: "./logs/",
  wsOptions: {
    port: 443,
    clientTracking: true,
  },
  whitelistedIps: "*",
});

rec.connect();
rec.on("connect", () => {
  console.log("connected");
});
rec.on("message", (msg) => {
  console.log(`[RECEIVER] => ${inspect(msg, { depth: null })}`);
});

const keepAlive = require('./server.js');

const aoijs = require('aoi.js'); //We're authorized "aoijs" as our bot in here, you can type anything you want. 
const config = require('./config.js'); //This will be our configuration file. I didn't want your main file be messy. 
const bot = new aoijs.Bot(config.Bot);
const fs = require('fs');

const voice = new aoijs.Voice(bot, {
  soundcloud: {
    clientId: "iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX",
  },//I recommend you to use your own sc token
  cache: {
    cacheType: "Memory",//Disk
    enabled: true,
  }, 
});
//Configs
require('./handler/status')(bot) //This is for bot status file. 
require('./handler/variables')(bot) //This is for bot variables file. 
require('./handler/callbacks')(bot) //This is for bot callbacks file. 


//Loader would be better to used, since I don't recommend you code all your slash commands on your main file. If one command gives error, it will just kill your client. Your commands should be added on "commands" folder. 
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")


//This is for making your console look colorful :)
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["gray", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgRed"],
    type: ["bright", "fgWhite"],
    text: ["bright", "fgBlue"]
  },
 
})


//Don't ever delete this.
keepAlive()