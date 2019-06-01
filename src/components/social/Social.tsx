import * as React from 'react';
import { SocialList } from './Social.style';

export interface ISocialProps {}

export default class Social extends React.Component<ISocialProps, any> {
  public render() {
    return (
      <SocialList>
        <ul className="home-social">
          <li>
            <a href="mailto:support@madlab.design">
              <i className="far fa-envelope" aria-hidden="true" />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/MadLabDesign">
              <i className="fab fa-dribbble" aria-hidden="true" />
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
        <div className="home-content__line" />
      </SocialList>
    );
  }
}
