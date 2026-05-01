import type { Metadata } from "next";
import Layout from "../../components/Layout/Layout";
import ViewResume from "../../components/Views/Resume/Resume";

export const metadata: Metadata = {
	title: "Resume",
};

export default function Resume() {
	return (
		<Layout size="narrow">
			<h1>Resume</h1>
			<ViewResume />
		</Layout>
	);
}
