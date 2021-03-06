import React from "react";
import Image from "next/image";
import styles from "./Portfolio.module.scss";

import { portfolio, other } from "../../../.dev/portfolio";

function Portfolio() {
	return (
		<div className={styles.portfolio}>
			<p>
				I&apos;ve got tons of website and other projects under my belt. Here are some of the most
				recent ones.
			</p>
			<h2>Featured</h2>
			<div className={styles.features}>
				{portfolio &&
					portfolio.map((item) => {
						return (
							<div key={item.name} className={styles.feature}>
								<a href={item.url} target="_blank" rel="noreferrer">
									<div className={styles.featureImage}>
										<Image
											src={`/images/${item.img}`}
											alt={`${item.name} website`}
											loading="lazy"
											width="500"
											height="200"
											layout="fill"
										/>
									</div>

									<div className={styles.content}>
										<p className={`${styles.title} highlight`}>{item.name}</p>

										{item.description && (
											<p className={styles.description}>{item.description}</p>
										)}

										{item?.listItems && item.listItems.length > 0 && (
											<ul className={styles.lineItems}>
												{item.listItems.map((item, idx) => (
													<li key={`item-${idx}`}>{item}</li>
												))}
											</ul>
										)}

										{item?.keywords && (
											<p className={styles.keywords}>
												{item.keywords.join(", ")}
											</p>
										)}
									</div>
								</a>
							</div>
						);
					})}
			</div>
			<h2>Other Projects</h2>
			<div className={styles.others}>
				{other &&
					other.map((item) => {
						return (
							<div key={item.name} className={styles.other}>
								<a href={item.url} target="_blank" rel="noreferrer">
									<div className={styles.content}>
										<p className={`${styles.title} highlight`}>{item.name}</p>
										{item.description && (
											<p className={styles.description}>{item.description}</p>
										)}
										{item?.keywords && (
											<p className={styles.keywords}>
												{item.keywords.join(", ")}
											</p>
										)}
									</div>
								</a>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Portfolio;
