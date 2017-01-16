import React from 'react';
import { render } from 'react-dom';
import styles from './style.css';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc'
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('receive');
    this.setState({
      text: nextProps.a
    });
  }

	render() {
    console.log('render');
		return (
			<div className={styles.test}>
				{this.state.text}
			</div>
		);
	}
}

export default Test;