let Confirm = require("prompt-confirm");
let prompt = new Confirm("Are you sure you want the drop the database?");
let mongoClient = require("./../client");
let config = require("./../config");

mongoClient.connect(async (err, client) => {
	let answer = await prompt.run();
	
	if(answer) {
		await client.db(config.database).dropDatabase();
		
		client.close();
		console.log("Database dropped");
	}
})