import Layout from "../components/Layout/Layout";
import ViewPortfolio from "../components/Views/Portfolio/Portfolio";

export default function Portfolio() {
	return (
		<Layout size="full" title="Portfolio">
			<h1>Portfolio</h1>
			<ViewPortfolio />
		</Layout>
	);
}
