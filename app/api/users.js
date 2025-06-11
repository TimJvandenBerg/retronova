// pages/api/users.js

import pool from "../lib/db";

export default async function handler(req, res) {
	try {
		console.log("Trying database query...");
		const result = await pool.query("SELECT * FROM users");
		console.log("Query result:", result.rows);
		res.status(200).json(result.rows);
	} catch (err) {
		console.error("❌ Database error:", err);
		res.status(500).json({ error: err.message });
	}
}
