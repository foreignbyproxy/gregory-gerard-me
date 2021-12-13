import React from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import Navigation from "../Elements/Navigation/Navigation";
import Social from "../Elements/Social/Social";

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
			</Head>

			<main className={styles.main}>
				<aside className={styles.sidebar}>
					<Navigation className={styles.navigation} />
					<Social className={styles.social} />
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
