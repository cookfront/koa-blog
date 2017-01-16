import React from 'react';
import { render } from 'react-dom';
import styles from './style.css';
import Test from './test';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      text: 'abc'
    };
  }

  componentDidMount() {
    this.setState({
      text: 'something'
    });
  }

  render() {
    return (
      <div className={styles.test}>
        <Test a={this.state.text} />
      </div>
    );
  }
}

render((
	<App />
), document.getElementById('container'));
