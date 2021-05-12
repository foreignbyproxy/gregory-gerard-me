import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import Navigation from "../Elements/Navigation/Navigation";
// import Social from "../Elements/Social/Social";

import styles from "./Layout.module.scss";

export interface Props {
	size?: "full" | "narrow";
	title?: string;
}

const Layout: React.FC<Props> = ({ children, size = "narrow", title = "Home" }) => {
	const containerClasses = classnames([styles.container, styles[size]]);

	return (
		<>
			<Head>
				<title>{title} | Greg Gerard</title>
				<meta
					name="description"
					content="Greg Gerard is a web developer from Columbus, OH."
				/>

				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/favicon.ico"></link>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&family=Permanent+Marker&display=swap"
					rel="stylesheet"
				></link>

				<meta name="robots" content="noindex" />
			</Head>

			<main className={styles.main}>
				<aside className={styles.sidebar}>
					<p className={styles.title}>Greg Gerard</p>
					{/* <Social className={styles.social} /> */}
					<Navigation className={styles.navigation} />
				</aside>
				<div className={styles.content}>
					<div className={containerClasses}>{children}</div>
					<Link href="/privacy">
						<a className={styles.privacy}>Privacy</a>
					</Link>
				</div>
			</main>
		</>
	);
};

export default Layout;
