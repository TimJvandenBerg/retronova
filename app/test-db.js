import { Pool } from "pg";

const pool = new Pool({
	connectionString:
		"postgresql://retronova:retronova@192.168.178.22:5432/retronova",
});

async function testConnection() {
	try {
		const result = await pool.query("SELECT NOW()");
		console.log("✅ Connected successfully:", result.rows[0]);
		process.exit(0);
	} catch (err) {
		console.error("❌ Connection failed:", err.message);
		process.exit(1);
	}
}

testConnection();
