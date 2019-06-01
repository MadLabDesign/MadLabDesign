import * as React from 'react';
import { IntroSection } from './Intro.style';
import ScrollAnimation from 'react-animate-on-scroll';

export interface IintroProps {}

export default class Intro extends React.Component<IintroProps, any> {
  public render() {
    return (
      <>
        <IntroSection>
          <ScrollAnimation animateIn="fadeIn">
            <h1>Into</h1>
          </ScrollAnimation>
        </IntroSection>
      </>
    );
  }
}
