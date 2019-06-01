import * as React from 'react';
import { AboutContainer } from './About.style';

export interface IAboutProps {}

export default class About extends React.Component<IAboutProps, any> {
  public render() {
    return (
      <AboutContainer>
        <h1>About me</h1>
      </AboutContainer>
    );
  }
}
