module.exports = {
	Bot: {
		token: process.env.TOKEN,
		prefix: "$",
		intents: "all",
    database : {
  db : require("aoi.db"),
  type : "aoi.db",
  path : "wss://aoidb-reciever-tests.usersatoshi.repl.co:443",
  tables : ["main"],
  extraOptions : { 
    dbType : "Transmitter",
    dbOptions :{ 
      databaseType: "KeyValue",
        dbOptions: {
          path: "./database/",
          encryptOption: {
            securitykey: "a-32-characters-long-string-here",
            enabled: true,
          },
        },
      name: "guest101",
      pass: "user1234",
      flags: "readWrite",
    }
  }
}
	}
}