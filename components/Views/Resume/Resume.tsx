import React from "react";
import styles from "./Resume.module.scss";

import ResumeItem from "../../Elements/ResumeItem/ResumeItem";

const Resume: React.FC = () => {
	return (
		<div className={styles.resume}>
			<section>
				<h2>Work Experience</h2>
				<ResumeItem
					main="Blue Laser Digital"
					position="Lead Developer"
					date="Oct 2016 - Current"
					location="Columbus, Ohio"
				>
					<ul>
						<li>
							Scope, plan and execute full-stack web solutions to meet clients’
							digital marketing goals
						</li>
						<li>
							Developed over 50 websites using a variety of platforms, technologies
							and APIs
						</li>
						<li>Perform website performance audits and remedy performance issues</li>
						<li>Improved development process through custom tooling</li>
						<li>
							Collaborated with design and SEO teams to effectively execute website
							projects
						</li>
					</ul>
				</ResumeItem>
			</section>
			<section>
				<h2>Technical Skills</h2>
				<ul className="no-bullet">
					<li>
						<strong>Languages:</strong> JavaScript/Typescript, HTML, CSS, PHP
					</li>
					<li>
						<strong>Frameworks/Libraries:</strong> React, Next.js, Jest, Gatsby,
						Tailwind, Svelte
					</li>
					<li>
						<strong>APIs:</strong> SendGrid, Twilio, Google Analytics, PayPal, Stripe
					</li>
					<li>
						<strong>Other:</strong> Node, GraphQL, Sentry, Serverless, Git, CI/CD,
						Firebase, Github, Bitbucket, Sass, Google Cloud Platform, Postman
					</li>
				</ul>
			</section>
			<section>
				<h2>Education</h2>
				<ResumeItem
					main="Rotterdam School of Management at Erasmus University"
					position="Masters in Finance & Investments"
					date="Sept 2012 – Sept 2013"
					location="Rotterdam, The Netherlands"
				/>
				<ResumeItem
					main="Fisher College of Business at The Ohio State University"
					position="Bachelor of Science in Business Administration"
					date="Sept 2007 - Dec 2011"
					location="Columbus, Ohio"
				>
					<ul>
						<li>
							<i>Specialization</i>: Finance and International Business
						</li>
					</ul>
				</ResumeItem>
			</section>
		</div>
	);
};

export default Resume;
