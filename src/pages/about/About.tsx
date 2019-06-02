import * as React from 'react';
import { AboutContainer, AboutRight, AboutLeft } from './About.style';

export interface IAboutProps {}

export default class About extends React.Component<IAboutProps, any> {
  public render() {
    return (
      <AboutContainer>
        {/* <div className="container is-fluid">
          <div className="columns ">
            <div className="column is-one-third ">
              <h1 className="animated slideInLeft delay-0.3s">About me</h1>
              <p className="intro animated slideInUp delay-0.3s">
                I'm a product designer based in sunny Cape Town, South Africa
              </p>
              <p>
                Sed sit amet malesuada urna. Donec pellentesque mauris et ante
                sollicitudin vestibulum. In convallis nibh sed ultricies
                convallis. Nullam ultrices ex eget nulla dignissim consequat.
                Aliquam vitae euismod eros, eu euismod sem. Nulla erat nunc,
                egestas nec hendrerit sit amet, iaculis quis enim. Nam non
                consequat justo, a bibendum mi.
              </p>
            </div>
            <div className="column ">
              <p>First column</p>
            </div>
          </div>
        </div> */}

        <AboutLeft>
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
        <AboutRight>right</AboutRight>
      </AboutContainer>
    );
  }
}
