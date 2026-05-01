import React from "react";
import classnames from "classnames";

import Navigation from "../Elements/Navigation/Navigation";
import Social from "../Elements/Social/Social";

import styles from "./Layout.module.scss";

export interface Props {
	size?: "full" | "narrow";
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, size = "narrow" }) => {
	const containerClasses = classnames([styles.container, styles[size]]);

	return (
		<main className={styles.main}>
			<aside className={styles.sidebar}>
				<Navigation className={styles.navigation} />
				<Social className={styles.social} />
			</aside>
			<div className={styles.content}>
				<div className={containerClasses}>{children}</div>
			</div>
		</main>
	);
};

export default Layout;
