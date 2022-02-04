// CONFIG \\
require('dotenv').config()

// MONGO \\
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.URI);
const ObjectId = require('mongodb').ObjectId;

const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

async function startMongo() {
	try {
		await client.connect();
	}catch(e) {
		console.log(e);
	}
}

startMongo().catch(console.error);

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
 
app.get('/', (req, res) => {
	res.send(`API START ON PORT ${config.port}`);
})

app.get('/staff', async (req, res) => {
	await client.db('proiect1')
	  .collection('staff')
	  .find({})
	  .toArray()
	  .then(items => {
		res.send(items);
	  });
});

app.post('/add', async (req, res) => {
	await client.db('proiect1').collection('staff').insertOne({
		name: req.body.name,
		desc: req.body.desc
	});
});

app.post('/delete', async (req, res) => {
	await client.db('proiect1').collection('staff').deleteOne({_id: ObjectId(req.body.id)});
})

app.post('/update', async (req, res) => {
	await client.db('proiect1').collection('staff').updateOne({_id: ObjectId(req.body.id)}, {$set: {desc: req.body.text}});
});

app.listen(process.env.PORT, () => {
	console.info(`Express server started on port ${process.env.PORT}!`);
});
