import React from "react";
import Link from "next/link";

import styles from "./Home.module.scss";

export interface Props {}

const Home: React.FC = () => {
	return (
		<>
			<p className={styles.title}>Heyyo!</p>
			<p>Thanks for dropping by.</p>
			<p>
				I'm Greg, a developer from Columbus, OH. If you're here, that means you're looking
				for more info. Well, you're in the right place, so here we go...
			</p>
			<h2>About Me</h2>
			<p>
				I've been programming since early the early 2010s, but didn't start my web
				development career until 2016. Besides some VBA macros and a super brief period
				programming bots in Diablo 3 using C#, my career is focused around web technologies.
				I work well autonomously and like to learn, experiement, play, build and break
				things.
			</p>

			<p>
				Outside of work, I'm a gamer. I'm a cyclist with a goal to cycle 2,500 miles this
				year. I'm a glutton for good food and always in the mood to whip up a nice meal. I
				like to be outside hiking and hands-on in my garden. I like to travel and kitesurf
				when I can.
			</p>

			<h2>What has my attention</h2>
			<ul>
				<li>
					<strong className="highlight">Crypto and DeFi</strong> - As a programmer with a
					finance degree, the crypto and DeFi space has me hooked. Currently, I'm spending
					most of my free time diving into Ethereum, learning Solidity and testing out
					some alternative investments.
				</li>
				<li>
					<strong className="highlight">Performance and monitoring</strong> - At BLD, we
					implement SEO strategies to help our clients improve their rank in SERPs. Since
					Google will be incorporating performance metrics into their ranking, we've been
					busy making sure our client metrics are optimize and are developing a product to
					help monitor and remediate their performance issues.
				</li>
				<li>
					<strong className="highlight">Next.js</strong> - I've been a bit frustrated with
					the GatsbyJS DX recently so I've been playing and migrating this website over to
					Next.js. I'm also pushing to build a static site product using Next.js at BLD for
					clients who need a simple, static solution for their website.
				</li>
			</ul>
			<h2>Current Situation</h2>
			<p>
				I'm the lead developer at Blue Laser Digital. BLD is digital marketing agency in
				Columbus, OH that builds digital strategies and solutions for our clients. I've been
				at the company for about 5 years.
			</p>
			<p>
				I wear many hats at the company and there is no typical day for me at BLD. I'm
				responsibile for scoping new projects, communicating and collaborating with our
				sales and design teams, executing and developing our clients' websites, supporting
				our internal processes and marketing efforts and developing our product offerings.
			</p>
			<p>
				Becuase our solutions are tailored to our clients, every project is different. As a
				results, I've implemented many different solutions across the tech stack. I've done
				everything from building and launching responsive websites and developing
				progressive web apps using modern Javascript frameworks to helping clients make
				their website perform better through accessibility and performance audits. I've
				helped implemented SEO and digital marketing strategies with custom analytics
				tracking and I've launched e-commerce solutions using different platforms.
			</p>
			<p>
				Check out my{" "}
				<Link href="/portfolio">
					<a className="highlight">portfolio</a>
				</Link>{" "}
				for a list of projects I've been involved with.
			</p>
			<h2>What I'm reading</h2>
			<ul>
				<li>De-coding the Technical Interview Process</li>
				<li>Ramen Obsession: The Ultimate Bible For Mastering Japanese Ramen</li>
				<li>Options as a Strategic Investment</li>
			</ul>
		</>
	);
};

export default Home;
