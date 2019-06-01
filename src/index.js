import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import Home from './pages/home/App';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  render() {
    const { loading } = this.state;
    return (
      <Loader loading={loading}>
        <Router>
          <Header />
          <Home />
        </Router>
      </Loader>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
