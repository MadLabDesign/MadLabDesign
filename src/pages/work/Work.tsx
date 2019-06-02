import * as React from 'react';
import { WorkContainer } from './Work.style';
import { AboutLeft, AboutRight } from '../about/About.style';

export interface IContactProps {}

export default class Work extends React.Component<IContactProps, any> {
  public render() {
    return (
      <WorkContainer>
        <AboutLeft className="animated slideInLeft delay-0.3s">
          <h1 className="animated slideInLeft delay-0.3s">Work</h1>
          <br />
          <p className="intro animated slideInUp delay-0.3s">
            Keep evolving baby!
          </p>
          <p>
            Doing things right is awesome, but being on first-line to explain
            why and how we did it is even better. How often did you face the
            actual people involved in your project for an effective and straight
            explanation of the accomplished work? Not often hu?
          </p>
        </AboutLeft>
        <AboutRight className="animated slideInRight delay-0.8s">
          right
        </AboutRight>
      </WorkContainer>
    );
  }
}
