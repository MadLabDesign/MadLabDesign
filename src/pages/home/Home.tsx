import * as React from 'react';
import { HomePage } from './Home.style';
import Intro from '../Intro/Intro';
import Social from '../../components/social/Social';
import Scroller from '../../components/scroller/Scroller';

class Home extends React.Component<any> {
  public render() {
    return (
      <>
        <HomePage>
          <div className="columns is-vcentered">
            <div className="column">
              <h3 className="animated slideInLeft delay-0.3s">
                Welcome to madlab design
              </h3>
              <h2 className="content__title animated slideInUp delay-0.3s">
                UX to Development & everything in between.
              </h2>
            </div>
            <div className="column is-7">
              <p>First column</p>
            </div>
          </div>
          <Scroller />
          <div className="background" />
          <Social />
        </HomePage>
        <Intro />
      </>
    );
  }
}

export default Home;
