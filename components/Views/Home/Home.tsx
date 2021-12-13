import React from "react";
import Link from "next/link";

import styles from "./Home.module.scss";

function Home() {
	return (
		<>
			<p className={styles.title}>Heyyo!</p>
			<p>Thanks for dropping by.</p>
			<h2>About Me</h2>
			<p>
				I&apos;ve been programming since early 2010s, but didn&apos;t start my web
				development career until 2016. In the beginning, I was programming VBA macros in
				Excel to keep track of my investments and programming and training bots in Diablo 3
				using C#. Since then, my career has been focused around web technologies.
			</p>

			<p>
				Outside of work, I&apos;m a gamer. I&apos;m a cyclist with a goal to cycle 2,500
				miles this year. I&apos;m a glutton for good food and always in the mood to whip up
				a meal. I like to be outside hiking and hands-on in my garden. I like to travel and
				kitesurf when I can.
			</p>

			<h2>What has my attention</h2>
			<ul>
				<li>
					<strong className="highlight">Crypto and DeFi</strong> - As a programmer with a
					finance degree, the crypto and DeFi space has me hooked. Currently, I&apos;m
					spending most of my free time diving into Ethereum, learning Solidity and
					testing out some alternative investments.
				</li>
				<li>
					<strong className="highlight">Performance and monitoring</strong> - At BLD, we
					implement SEO strategies to help our clients improve their rank in SERPs. Since
					Google will be incorporating performance metrics into their ranking, we&apos;ve
					been busy making sure our client metrics are optimized and developing a product
					to help monitor and remediate their performance issues.
				</li>
				<li>
					<strong className="highlight">Next.js</strong> - Recently, I&apos;ve been
					migrating all my websites over to Next.js. I&apos;m also planning a static
					website product at BLD using Next.js for clients who need a simple, static
					solution for their website.
				</li>
			</ul>
			<h2>Current Situation</h2>
			<p>
				I&apos;m the lead developer at Blue Laser Digital. BLD is a digital marketing agency
				in Columbus, OH that builds digital strategies and solutions for our clients.
				I&apos;ve been at the company for about 5 years.
			</p>
			<p>
				I wear many hats at the company and there is no typical day for me at BLD. I&apos;m
				responsible for scoping new projects, communicating and collaborating with our sales
				and design teams, executing and developing our clients&apos; websites, supporting
				our internal processes and marketing efforts and developing our product offerings.
			</p>
			<p>
				Because our solutions are tailored to our clients, every project is different. As a
				result, I&apos;ve implemented many different solutions across the tech stack.
				I&apos;ve done everything from building and launching responsive websites and
				developing progressive web apps using modern Javascript frameworks to helping
				clients make their website perform better through accessibility and performance
				audits. I&apos;ve helped implement SEO and digital marketing strategies with custom
				analytics tracking and I&apos;ve launched e-commerce solutions using a variety of
				platforms.
			</p>
			<p>
				Check out my{" "}
				<Link href="/portfolio">
					<a className="highlight">portfolio</a>
				</Link>{" "}
				for a list of projects I&apos;ve been involved with.
			</p>
			<h2>What I&apos;m reading</h2>
			<ul>
				<li>Ramen Obsession: The Ultimate Bible For Mastering Japanese Ramen</li>
				<li>Options as a Strategic Investment</li>
			</ul>
		</>
	);
}

export default Home;
