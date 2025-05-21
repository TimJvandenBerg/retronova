import { useEffect, useState } from "react";

export default function Home() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetch data from the API route
		fetch("/api/postgresql")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => {
				setUsers(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h1>User List from PostgreSQL</h1>
			<ul>
				{users.map((user, index) => (
					<li key={user.id}>
						<strong>{user.name}</strong> - {user.email}
					</li>
				))}
			</ul>
		</div>
	);
}
