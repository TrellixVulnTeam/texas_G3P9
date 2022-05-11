module.exports = {
	Bot: {
		token: process.env.TOKEN,
		prefix: "$",
		intents: "all",
    database : {
      db : require("aoi.db"),
      type : "aoi.db",
      path : "./database/",
      tables : ["main"],
      extraOptions : { 
        dbType : "KeyValue",
        dbOptions :{ 
          encryptOptions : { 
            securitykey : process.env.SECURITYKEY,
            enabled : true
          }
        }
      }
    }
  }
}