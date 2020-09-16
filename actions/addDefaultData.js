let mongoClient = require("./../client");
let config = require("./../config");
let user = {
	login: "test",
	password: "test",
	email: {
		address: "test@test.com",
		confirmed: false,
		notification: true
	},
	verified: false,
	userpic: "public/images/users/default.png",
	socialNetworks: [
		{
			name: "github",
			icon: "fab fa-github",
			link: "http://github.com/test"
		}
	],
	country: "Россия",
	accessLevel: 0,
	tasks: {
		solved: []
	},
	level: "middle",
	points: 0,
	likes: {
		solutions: []
	}
}
let taskList = [
	{
		id: 0,
		caption: "Перевернуть строку",
		description: "Напишите функцию по развороту строки",
		level: 1,
		author: "kek",
		func: {
			name: "reverseString",
			body: "function reverseString(str) { return str.split('').reverse().join('') }"
		},
		company: false,
		language: "javascript",
		tests: [
			{
				input: {
					value: "olleH",
					type: "String"
				},
				output: {
					value: "Hello",
					type: "String"
				}
			},
			{
				input: {
					value: "elppa",
					type: "String"
				},
				output: {
					value: "apple",
					type: "String"
				}
			},
			{
				input: {
					value: "tpircsavaJ evol I",
					type: "String"
				},
				output: {
					value: "I love Javascript",
					type: "String"
				}
			}
		]
	},
	{
		id: 1,
		caption: "Факториал",
		description: "Напишите функцию по подсчету факториалаи",
		level: 2,
		author: "Google",
		func: {
			name: "fact",
			body: "function fact(n) { return 120 }"
		},
		company: true,
		language: "php",
		tests: [
			{
				input: {
					value: 5,
					type: "Number"
				},
				output: {
					value: 120,
					type: "Number"
				}
			},
			{
				input: {
					value: 6,
					type: "Number"
				},
				output: {
					value: 720,
					type: "Number"
				}
			},
			{
				input: {
					value: 7,
					type: "Number"
				},
				output: {
					value: 5040,
					type: "Number"
				}
			},
			{
				input: {
					value: 8,
					type: "Number"
				},
				output: {
					value: 40320,
					type: "Number"
				}
			},
			{
				input: {
					value: 9,
					type: "Number"
				},
				output: {
					value: 362880,
					type: "Number"
				}
			}
		]
	},
	{
		id: 2,
		caption: "CaMeLcAsE",
		description: "Напишите функцию для перевода строки в CaMeLcAsE нотацию",
		level: 3,
		author: "Yandex",
		func: {
			name: "getCamelCase",
			body: "function getCamelCase(n) { }"
		},
		company: true,
		language: "vue",
		tests: [
			{
				input: {
					value: "Hello world",
					type: "String"
				},
				output: {
					value: "HeLlO WoRlD",
					type: "String"
				}
			},
			{
				input: {
					value: "Верните мне мой две тысячи седьмой",
					type: "String"
				},
				output: {
					value: "ВеРнИтЕ МнЕ МоЙ ДвЕ ТыСяЧи СеДьМоЙ",
					type: "String"
				}
			},
			{
				input: {
					value: "Напиши мне в icq",
					type: "String"
				},
				output: {
					value: "НаПиШи МнЕ В IcQ",
					type: "String"
				}
			}
		]
	}
];

mongoClient.connect(async (err, client) => {
	let users = client.db(config.database).collection("users");
	let tasks = client.db(config.database).collection("tasks");

	await users.insertOne(user);
	await tasks.insertMany(taskList);
	
	client.close();
	console.log("Data added");
})