import * as React from 'react';
import { HomePage } from './Home.style';
import Intro from '../Intro/Intro';
import Social from '../../components/social/Social';

class Home extends React.Component<any> {
  public render() {
    return (
      <>
        <HomePage>
          <div className="columns is-vcentered">
            <div className="column">
              <h3>Welcom to madlab design</h3>
              <h2 className="content__title">
                UX to Development & everything in between.
              </h2>
            </div>
            <div className="column is-7">
              <p className="bd-notification is-primary">First column</p>
            </div>
          </div>

          <div className="background" />
          <Social />
        </HomePage>
        <Intro />
      </>
    );
  }
}

export default Home;
