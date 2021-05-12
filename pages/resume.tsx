import Layout from "../components/Layout/Layout";
import ViewResume from "../components/Views/Resume/Resume";

export default function Resume() {
	return (
		<Layout size="narrow" title="Resume">
			<h1>Resume</h1>
			<ViewResume />
		</Layout>
	);
}
