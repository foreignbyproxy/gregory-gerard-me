"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
		label: "Resume",
		href: "/resume/",
	},
];

function Navigation({ className }: Props) {
	const pathname = usePathname();
	const mainClasses = classnames([styles.navigation, className]);

	return (
		<nav className={mainClasses}>
			<ul>
				{links.map((link) => {
					const linkClass = classnames([
						styles.link,
						pathname === link.href ? styles.active : "",
					]);

					return (
						<li key={link.label}>
							<Link href={link.href} className={linkClass}>
								{link.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navigation;
