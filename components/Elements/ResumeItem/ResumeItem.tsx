import React from 'react';
import styles from './ResumeItem.module.scss';

interface Props {
	main: string
	date?: string
	position?: string
	location?: string
}

const ResumeItem: React.FC<Props> = ({ main, date, position, location, children }) => {
	return (
		<div className={styles['ResumeItem']}>
			<div className={styles['row']}>
				<h3 className={styles['main']}>{main}</h3>
				{date && <p className={styles['date']}>{date}</p>}
			</div>
			<div className={styles['row']}>
				{position && <p className={styles['position']}>{position}</p>}
				{location && <p className={styles['location']}>{location}</p>}
			</div>
			<div className={styles['content']}>
				{children}
			</div>
		</div>
	);
}

export default ResumeItem;
