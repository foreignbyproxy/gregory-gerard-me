declare module "*.svg" {
	import type React from "react";
	const SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default SVGComponent;
}
