interface Portfolio {
	name: string;
	description: string;
	keywords: string[];
	url?: string;
	listItems?: string[];
	img?: string;
}

export const portfolio: Portfolio[] = [
	{
		name: "G&J Pepsi PWA",
		url: "https://gjpepsiapp.com/",
		description: "React PWA to distrbute G&J Pepsi coupons",
		listItems: [
			"React front-end with Firebase backend",
			"Git-based CI/CD deployment using Bitbucket pipelines",
		],
		keywords: ["React", "Firebase"],
		img: "gjppwa.jpg",
	},
	{
		name: "Health in Motion Network Map",
		url: "https://health-in-motion-network-map.web.app/",
		description: "A React app to display over 30,000 data points on a Google Map",
		listItems: [
			"Use Canvas to display large number of plot points",
			"Asynchronously load large datasets",
		],
		keywords: ["React", "Firebase", "Google Maps"],
		img: "himnmap.jpg",
	},
	{
		name: "Blue Laser Digital",
		url: "https://www.bluelaserdigital.com",
		description: "Marketing website for BLD",
		listItems: [
			"Complete build and launch",
			"On going performance optimizations and monitoring",
		],
		keywords: ["WordPress"],
		img: "bld.jpg",
	},
	{
		name: "Advance Sign Group",
		url: "https://www.advancesigngroup.com/",
		description: "Marketing website for Advance Sign Group",
		keywords: ["WordPress"],
		img: "asg.jpg",
	},
	{
		name: "Hofbrauhaus",
		url: "https://www.hofbrauhauscolumbus.com/",
		description: "Redesign and support marketing efforts for 3 locations",
		listItems: [
			"Implement redesign for website",
			"Support giveaway by creating QR code-based user sign-up",
		],
		keywords: ["WordPress", "Serverless"],
		img: "hofbrauhaus.jpg",
	},
	{
		name: "Inno-Pak",
		url: "https://www.innopak.com/",
		description: "Redesign and implement feature to create dynamic product sell sheets.",
		listItems: ["Dynamically generate PDFs", "Implement custom integration with MailChimp"],
		keywords: ["WordPress", "Marketing"],
		img: "innopak.jpg",
	},
];

export const other: Portfolio[] = [
	{
		name: "BLD Dev",
		description:
			"A Node CLI to help BLD developers automate new website scafolding and perform common tasks",
		keywords: ["Node", "TypeScript", "CLI"],
	},
	{
		name: "Cryptodono",
		url: "https://github.com/foreignbyproxy/cryptodono",
		description: "A prototype crypto donation platform for content creators.",
		keywords: ["Web3"],
	},
	{
		name: "Image Alt Text Generator",
		description:
			"An React/Electron app with the purpose of using Microsoft Azure Computer Vision and other image recognition software to generate alt text for images.",
		keywords: ["Node", "Electron", "React", "Azure"],
	},
	{
		name: "Hardhat Simulate Tx",
		description:
			"A Hardhat plugin used to simulate Ethereum and ERC-20 token transactions over a local Ethereum network.",
		keywords: ["TypeScript", "Hardhat", "Ethereum", "Web3"],
	},
	{
		name: "Hardhat Deploy ERC-20 Token",
		description:
			"A Hardhat plugin to deploy a standard ERC-20 token over a local Ethereum network.",
		keywords: ["TypeScript", "Hardhat", "Ethereum", "Web3"],
	},

];
