import * as React from 'react';
import { SocialList } from './Social.style';

export interface ISocialProps { }

export default class Social extends React.Component<ISocialProps, any> {
  public render() {
    return (
      <SocialList>
        <ul className="home-social">
          <li>
            <a href="mailto:hello@madlab.design">
              <i className="far fa-envelope" aria-hidden="true" />
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a
              href="linkedin.com/in/blaine-lingard-55247436"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/MadLabDesign"
              title="Dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dribbble" aria-hidden="true" />
              <span>Dribbble</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MadLabDesign"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true" />
              <span>Github</span>
            </a>
          </li>
        </ul>
        <div className="home-content__line" />
      </SocialList>
    );
  }
}
