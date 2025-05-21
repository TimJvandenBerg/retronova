// pages/api/postgres.js
import { Pool } from "pg";

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
	try {
		const client = await pool.connect();
		const result = await client.query("SELECT * FROM users");
		client.release();

		res.status(200).json(result.rows);
	} catch (error) {
		console.error("Database error:", error);
		res.status(500).json({ error: "Failed to fetch data from the database." });
	}
}
