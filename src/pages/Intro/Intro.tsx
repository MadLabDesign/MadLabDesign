import * as React from 'react';
import { IntroSection, DescriptionBlock } from './Intro.style';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

export interface IintroProps {}

export default class Intro extends React.Component<IintroProps, any> {
  public render() {
    return (
      <>
        <IntroSection>
          <div className="columns is-vcentered" id="section-2">
            <div className="column is-half">
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <DescriptionBlock>
                  <div className="desctiption">
                    <Link to={'/work'} className="effect-underline">
                      <h2>designer</h2>
                      <p>
                        UI/UX Designer with a passion for designing beautiful
                        and functional user experiences.
                      </p>
                    </Link>
                  </div>
                </DescriptionBlock>
              </ScrollAnimation>
            </div>
            <div className="column is-half">
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <DescriptionBlock>
                  <div className="desctiption">
                    <Link to={'/work'} className="effect-underline">
                      <h2>coder</h2>
                      <p>
                        Front End Developer who focuses on writing clean,
                        elegant and efficient code.
                      </p>
                    </Link>
                  </div>
                </DescriptionBlock>
              </ScrollAnimation>
            </div>
          </div>
        </IntroSection>
      </>
    );
  }
}
