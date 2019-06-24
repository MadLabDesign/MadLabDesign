import * as React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-height: 150px;
`;
export interface ICardProps {}

export default class ProfileCard extends React.Component<ICardProps, any> {
  public render() {
    return (
      <CardContainer>
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
              <a href="#">#responsive</a>
              <br />
            </div>
          </div>
        </div>
      </CardContainer>
    );
  }
}
