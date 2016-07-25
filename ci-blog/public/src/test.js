import React from 'react';
import { render } from 'react-dom';
import styles from './style.css';

class Test extends React.Component {
	render() {
		return (
			<div className={styles.test}>
				xxxxx
			</div>
		);
	}
}

render((
	<Test />
), document.getElementById('container'));
