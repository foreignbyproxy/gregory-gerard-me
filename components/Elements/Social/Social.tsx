import React from "react";
import styles from "./Social.module.scss";
import classnames from "classnames";

import LinkedIn from "./linkedin.svg";
import Github from "./github.svg";

export interface Props {
	className?: string;
}

const Social: React.FC<Props> = ({ className }) => {
	const mainClasses = classnames([styles.social, className]);

	return (
		<div className={mainClasses}>
			<a
				className={styles.link}
				href="https://www.linkedin.com/in/gregory-gerard"
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedIn
					height={30}
					width={30}
					aria-label="Check out my LinkedIn Profile"
				/>
			</a>
			<a
				className={styles.link}
				href="https://github.com/foreignbyproxy"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Github height={30} width={30} aria-label="Github link" />
			</a>
		</div>
	);
};

export default Social;
