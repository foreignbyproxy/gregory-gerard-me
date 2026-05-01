import type { Metadata } from "next";
import Layout from "../../components/Layout/Layout";
import ViewResume from "../../components/Views/Resume/Resume";
import DownloadIcon from "./download.svg";
import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "Resume",
};

export default function Resume() {
	return (
		<Layout size="narrow">
			<h1 className={styles.heading}>
				Resume
				<a
					className={styles.downloadLink}
					href="/resume.pdf"
					download="gregory-gerard-resume.pdf"
					aria-label="Download resume PDF"
				>
					<DownloadIcon width={18} height={18} />
				</a>
			</h1>
			<ViewResume />
		</Layout>
	);
}
