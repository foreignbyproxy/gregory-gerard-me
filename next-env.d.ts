/// <reference types="next" />
/// <reference types="next/types/global" />

interface Portfolio {
	name: string;
	type?: "feature" | "mini";
	url?: string;
	description?: string;
	listItems?: string[];
	keywords?: string[];
	img?: string;
	disabled?: boolean;
	order?: number;
}

interface NavLink {
	label: string;
	href: string;
}

declare module "*.svg" {
	const content: any;
	export default content;
}
