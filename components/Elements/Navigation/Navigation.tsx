import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./Navigation.module.scss";

interface Props {
	className?: string;
}

interface NavLink {
	label: string;
	href: string;
}

const links: NavLink[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Blog",
		href: "/blog",
	},
	{
		label: "Resume",
		href: "/resume",
	},
	{
		label: "Portfolio",
		href: "/portfolio",
	},
];

function Navigation({ className }: Props) {
	const router = useRouter();
	const mainClasses = classnames([styles.navigation, className]);

	return (
		<nav className={mainClasses}>
			<ul>
				{links.map((link) => {
					const linkClass = classnames([
						styles.link,
						router.pathname === link.href ? styles.active : "",
					]);

					return (
						<li key={link.label}>
							<Link href={link.href}>
								<a className={linkClass}>{link.label}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navigation;
