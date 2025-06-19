"use client";

import { useState } from "react";
import {
	CheckIcon,
	QuestionMarkCircleIcon,
	StarIcon,
} from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const product = {
	name: "RETRONOVA",
	href: "#",
	price: "",
	description:
		"RetroNova is a retro gaming website that offers a wide range of retro games, including Sim CityYour Portal to Pixelated Perfection!",
	imageSrc: "",
	imageAlt: "",
	breadcrumbs: [
		{ id: 1, name: "", href: "#" },
		{ id: 2, name: "", href: "#" },
	],
	sizes: [
		{ name: "", description: "" },
		{ name: "", description: "" },
	],
};
const reviews = { average: null, totalCount: null };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
				{/* Product details */}
				{/* <div className="lg:max-w-lg lg:self-end"> */}
				<nav aria-label="Breadcrumb">
					<ol role="list" className="flex items-center space-x-2">
						{product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
							<li key={breadcrumb.id}>
								<div className="flex items-center text-sm">
									<a
										href={breadcrumb.href}
										className="font-medium text-gray-500 hover:text-gray-900"
									>
										{breadcrumb.name}
									</a>
									{/* {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
										<svg
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
											className="ml-2 size-5 shrink-0 text-gray-300"
										>
											<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
										</svg>
									) : null} */}
								</div>
							</li>
						))}
					</ol>
				</nav>

				<div className="mt-4">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{product.name}
					</h1>
				</div>

				<section aria-labelledby="information-heading" className="mt-4">
					<h2 id="information-heading" className="sr-only"></h2>

					{/* <div className="flex items-center"> */}
					<p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>

					{/* <div className="ml-4 border-l border-gray-300 pl-4"> */}
					{/* <h2 className="sr-only">Reviews</h2> */}
					{/* <div className="flex items-center"> */}
					<div>
						{/* <div className="flex items-center">
							{[0, 1, 2, 3, 4].map((rating) => (
								<StarIcon
									key={rating}
									aria-hidden="true"
									className={classNames(
										reviews.average > rating
											? "text-yellow-400"
											: "text-gray-300",
										"size-5 shrink-0"
									)}
								/>
							))}
							{/* </div> 
							<p className="sr-only">{reviews.average} </p>
						</div> */}
						<p className="ml-2 text-sm text-gray-500">{reviews.totalCount}</p>
					</div>
					{/* </div> */}

					<div className="mt-4 space-y-6">
						<p className="text-base text-gray-500">{product.description}</p>
					</div>

					<div className="mt-6 flex items-center">
						<p className="ml-2 text-sm text-gray-500"></p>
					</div>
				</section>
			</div>

			{/* Product image */}
			<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center"></div>

			{/* Product form */}
			<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
				<section aria-labelledby="options-heading">
					<h2 id="options-heading" className="sr-only"></h2>

					<form>
						<div className="sm:flex sm:justify-between">
							{/* Size selector */}
							<fieldset>
								{/* 								<RadioGroup
										value={selectedSize}
										onChange={setSelectedSize}
										className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
									>
										{product.sizes.map((size) => (
											<Radio
												key={size.name}
												as="div"
												value={size}
												aria-label={size.name}
												aria-description={size.description}
												className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500"
											>
												<p className="text-base font-medium text-gray-900">
													{size.name}
												</p>
												<p className="mt-1 text-sm text-gray-500">
													{size.description}
												</p>
												<div
													aria-hidden="true"
													className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
												/>
											</Radio>
										))}
									</RadioGroup> */}
							</fieldset>
						</div>
						<div className="mt-4">
							<a
								href="#"
								className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
							>
								<span></span>
							</a>
						</div>
						<div className="mt-10"></div>
						<div className="mt-6 text-center">
							<a href="#" className="group inline-flex text-base font-medium">
								<span className="text-gray-500 hover:text-gray-700"></span>
							</a>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
}
