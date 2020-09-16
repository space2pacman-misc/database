let mongoClient = require("./../client");
let config = require("./../config");

mongoClient.connect(async (err, client) => {
	let listDatabases = await client.db().admin().listDatabases();
	let database = listDatabases.databases.find(database => database.name === config.database);

	if(!database) {
		let db = client.db(config.database);

		for(let collection of config.collections) {
			await db.createCollection(collection);
		}

		console.log("Database created");
	} else {
		console.log("Database already exists");
	}

	client.close();
})