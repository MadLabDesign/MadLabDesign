import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'animate.css/animate.min.css';
import 'bulma/css/bulma.css';
import './index.scss';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';

import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Freebies from './pages/freebies/Freebies';
import Work from './pages/work/Work';

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
        <Suspense fallback={<Loader loading={loading} />}>
          <Router>
            <Route
              render={({ location }) => {
                return (
                  <PageContainer>
                    <TransitionGroup component={null}>
                      <Header />
                      <CSSTransition
                        timeout={0}
                        classNames="page"
                        key={location.key}
                      >
                        <Switch location={location}>
                          <Route exact path="/" component={Home} />
                          <Route path="/menu" component={Menu} />
                          <Route path="/about" component={About} />
                          <Route path="/contact" component={Contact} />
                          <Route path="/freebies" component={Freebies} />
                          <Route path="/work" component={Work} />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </PageContainer>
                );
              }}
            />
          </Router>
        </Suspense>
      </Loader>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
