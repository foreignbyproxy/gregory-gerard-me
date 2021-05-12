import React from "react";
import styles from "./Blog.module.scss";

export interface Props {}

const Blog: React.FC<Props> = () => {
	return (
		<div>
			<p>
				I'm currently writing some blog posts that will be added here soon. Here are some of
				the topics that I'll be covering:
			</p>
			<ul>
				<li>Understand the impact of Basic Attention Token (BAT)</li>
				<li>Lending capital with Compound (COMP)</li>
				<li>Providing liquidity with Uniswap</li>
				<li>Ad hoc infrastructure for privacy</li>
				<li>Setting up a Golem (GLM) machine</li>
				<li>Automating an indoor garden with an Arduino</li>
				<li>Learning Solidity</li>
				<li>Making digital art and selling it</li>
			</ul>
		</div>
	);
};

export default Blog;
