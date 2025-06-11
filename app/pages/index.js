// pages/index.js

import { useEffect, useState } from "react";

export default function Home() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/users");
			const data = await response.json();
			setUsers(data);
		}
		fetchData();
	}, []);

	return (
		<div>
			<h1>Users List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
