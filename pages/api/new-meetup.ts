import { MongoClient } from "mongodb";

export default async function handler(req, res) {
	if (req.method === "POST") {

		try {
			const data = req.body;
	
			const client = await MongoClient.connect("mongodb+srv://user:password@host/nexting?retryWrites=true&w=majority");
			const db = client.db();
	
			const meetupsCollection = db.collection("meetups");
	
			const result = await meetupsCollection.insertOne(data);
	
			console.log(result);
	
			client.close();

			res.status(201).json({ message: "Meetup insterted"});
		} catch(error) {
			throw error;
		}
	}
}
