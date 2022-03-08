import {MongoClient} from 'mongodb';

import apiKey from '../api-key';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(`mongodb+srv://${apiKey.usename}:${apiKey.password}@cluster0.pba9l.mongodb.net/meetups?retryWrites=true&w=majority`);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({message: 'message inserted'});

  }
}

export default handler