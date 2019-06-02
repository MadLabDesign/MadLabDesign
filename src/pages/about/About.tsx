import * as React from 'react';
import { AboutContainer, AboutRight, AboutLeft } from './About.style';

export interface IAboutProps {}

export default class About extends React.Component<IAboutProps, any> {
  public render() {
    return (
      <AboutContainer>
        <AboutLeft className="animated slideInLeft delay-0.3s">
          <h1 className="animated slideInLeft delay-0.3s">About me</h1>
          <p className="intro animated slideInUp delay-0.3s">
            I'm a product designer based in sunny Cape Town, South Africa
          </p>
          <p>
            Sed sit amet malesuada urna. Donec pellentesque mauris et ante
            sollicitudin vestibulum. In convallis nibh sed ultricies convallis.
            Nullam ultrices ex eget nulla dignissim consequat.
          </p>
        </AboutLeft>
        <AboutRight className="animated slideInRight delay-0.8s">
          right
        </AboutRight>
      </AboutContainer>
    );
  }
}
