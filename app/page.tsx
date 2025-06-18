"use client";

import Index from "../app/pages/index";
import Menu from "../app/pages/menu";
import Landing from "../app/pages/landing";

export default function Home() {
	return (
		<div>
			<Menu />
			<Landing />
			<Index />
		</div>
	);
}
