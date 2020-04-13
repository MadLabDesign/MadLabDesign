import React, { FunctionComponent } from 'react';
import {
  AboutContainer,
  AboutRight,
  AboutLeft,
  ProfileImage,
} from './About.style';
import { SubTitle } from '../../lib/theme/Global.styles';
import { Button } from '../../components/buttons/Button';



interface IAboutProps {
}

const About: FunctionComponent<IAboutProps> = (props) => {
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
          <br />
          <br />
          <div className="columns is-gapless">
            <div className="column">
              <p>
                <span className="first-letter">B</span>laine Lingard started
                  his career about 12 years ago as a{' '}
                <strong>graffiti artist</strong> which lead him to study{' '}
                <strong>graphic and web design</strong> at Cape College.
                </p>
            </div>
          </div>

          <div className="columns ">
            <div className="column">
              <p>
                So a little bit about me… I love everything Design from Web
                design, development, Graphic design, Packaging, Industrial
                design and understanding what we do and how it should be done.
                </p>
              <p>
                I’m always improving myself by going the extra mile and
                learning from others. My efforts have made me understand what
                I do and what needs to be done as the trends of design and
                code evolves in our industry.
                </p>
            </div>
            <div className="column is-one-third">
              <ProfileImage />
            </div>
          </div>
          <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
            <div className="column">
              <p>
                What I know about myself... I love working with people and
                learning what I can do to improve my skills in all aspects of
                design and development. My thoughts on my position: You should
                know or try to understand all areas of design, so that you
                don’t stop the flow of work, and help everyone involved in the
                project.
                </p>
            </div>
            <div className="column ">
              <p>
                If you don’t know something… ASK or Research, never sit
                quietly and hope for the best, learning and finding out where
                you can improve yourself, helps you and the company grow
                </p>
              <Button className="ripple">Resumé</Button>
            </div>
          </div>

          <br />
          <br />
        </>
      </AboutRight>
    </AboutContainer>
  );
};

export default About;
