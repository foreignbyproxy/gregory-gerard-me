import Layout from "../components/Layout/Layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import ViewPortfolio from "../components/Views/Portfolio/Portfolio";

import AllPortfolio from "../.dev/portfolio";

export default function Portfolio({
	feature,
	other,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout size="full" title="Portfolio">
			<h1>Portfolio</h1>
			<ViewPortfolio feature={feature} other={other} />
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
	const enabledItems = AllPortfolio.filter((item) => !item?.disabled);
	const feature = enabledItems
		.filter((item) => item?.type === "feature")
		.sort((a, b) => {
			if (a.order < b.order) {
				return -1;
			}
			if (a.order > b.order) {
				return 1;
			}
			// a must be equal to b
			return 0;
		});
	const other = enabledItems.filter((item) => item?.type !== "feature");

	return {
		props: {
			feature,
			other,
		},
	};
};
