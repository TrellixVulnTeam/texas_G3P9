module.exports = {
	Bot: {
		token: process.env.TOKEN,
		prefix: "$",
		intents: "all",
		database: {
      db: require('aoi.mongo'),
      type: "aoi.mongo",
      path: process.env.CLUSTER
    }
	}
}