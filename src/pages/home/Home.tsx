import React, { FunctionComponent } from 'react';
import { HomePage, HomeLeftContainer, HomeRightContainer } from './Home.style';
import Social from '../../components/social/Social';
import { SubTitle } from '../../lib/theme/Global.styles';
import Animate from '../../components/animate/animate';

interface IHomeProps { }

const Home: FunctionComponent<IHomeProps> = props => {
  return (
      <HomePage>

        <HomeLeftContainer>
          <div>
            <SubTitle className={"animated slideInLeft delay-0.3s"}>
              Welcome to madlab design
            </SubTitle>
            <h2 className="content__title animated slideInUp delay-0.3s">
              UX to Development & everything in between<span>.</span>
            </h2>
          </div>
        </HomeLeftContainer>
        <HomeRightContainer className="animated fadeInRight delay-0.3s">
          <div>
            <p className="title-blurb">
              MadLab is just one crazy guy, <br />called Blaine Lingard and this is
              his story.
            </p>
            <p className="desc">
              The idea to give back to the web community, with open source, code
              snippets, related articles on the best practices with web
              development & links to resources.
            </p>
          </div>
        </HomeRightContainer>
        <Social />
        <Animate />
      </HomePage>
  );
};

export default Home;
