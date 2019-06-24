import * as React from 'react';
import { HomePage, HomeLeftContainer, HomeRightContainer } from './Home.style';
import Intro from '../Intro/Intro';
import Social from '../../components/social/Social';
import Scroller from '../../components/scroller/Scroller';

class Home extends React.Component<any> {
  public render() {
    return (
      <>
        <HomePage>
          <Scroller />
          <HomeLeftContainer>
            <div>
              <h3 className="animated slideInLeft delay-0.3s">
                Welcome to madlab design
              </h3>
              <h2 className="content__title animated slideInUp delay-0.3s">
                UX to Development & everything in between<span>.</span>
              </h2>
            </div>
          </HomeLeftContainer>
          <HomeRightContainer>
            <div>
              <p className="title-blurb">
                MadLab is just one crazy guy, called Blaine Lingard and this is
                his story.
              </p>
              <p className="desc">
                With years of experience as a Senior Designer, there's no task
                too big for Blaine to take on. Leading his team with endless
                creativity and love and ensuring that all projects are up to the
                highest standards, he is highly experienced in the front-end
                development department and specializes in UX and UI design.
              </p>
            </div>
          </HomeRightContainer>

          <Social />
        </HomePage>
        <Intro />
      </>
    );
  }
}

export default Home;
