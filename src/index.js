import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';

import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

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
          <Route
            render={({ location }) => {
              return (
                <PageContainer>
                  <TransitionGroup component={null}>
                    <Header />
                    <CSSTransition
                      timeout={300}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route path="/menu" component={Menu} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </PageContainer>
              );
            }}
          />
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
