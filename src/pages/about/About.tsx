import * as React from 'react';
import { AboutContainer, AboutRight, AboutLeft } from './About.style';
import { SubTitle } from '../../lib/theme/Global.styles';

export interface IAboutProps {}

export default class About extends React.Component<IAboutProps, any> {
  public render() {
    return (
      <AboutContainer>
        <AboutLeft className="animated slideInLeft delay-0.3s">
          <div>
            <SubTitle className="animated slideInLeft delay-0.3s">
              about this guy...
            </SubTitle>
            <p className="intro animated slideInUp delay-0.3s">
              I'm a Front-end Developer & UX/UI Designer based in sunny Cape
              Town, South Africa.
            </p>
          </div>
        </AboutLeft>
        <AboutRight className="animated slideInRight delay-0.8s">
          <>
            <p>
              Blaine started his career about 12 years ago as a{' '}
              <strong>graffiti artist</strong> which lead him to study{' '}
              <strong>graphic and web design</strong> at Cape College.
            </p>
            <p>
              Through the years he has worked with Playhugelottos, which
              included the creation of Lottostar and LottoRewards. After 5 years
              with PlayHugeLottos, Blaine decided to work as a contract
              freelancer and started his journey of late nights learning and
              improving his skills to further his career as a UI Designer and
              Developer.
            </p>
            <p>
              He worked at Snapscan as there UX engineer and Frontend developer.
              To help with there apps facelift. Still working as a freelancer
              Blaine has been contracted to a few other agencies, such as Ripple
              digital, liquid thought and some other start-up projects.{' '}
            </p>
            <p>
              Well living here in Kenilworth. He enjoys learning from others
              which helps challenge his skill level. In his free time, he loves
              to ride his Fireblade through the Cape Town and surfing with his
              mates in Kommetjie.
            </p>
            <p>
              {' '}
              Besides watching a lot of cartoons, you can mostly find him behind
              his laptop, catching up on new design trends and coding ideology
              or just taking his girlfriend out and catching up with friends
              over a few too many drinks.
            </p>
          </>
        </AboutRight>
      </AboutContainer>
    );
  }
}
