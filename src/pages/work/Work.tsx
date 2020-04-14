import React, { FunctionComponent } from 'react';
import { WorkContainer, WorkLeft } from './Work.style';
import { AboutRight } from '../about/About.style';

interface Props {
}

const Work: FunctionComponent<Props> = (props) => {
  return (
    <WorkContainer>
      <WorkLeft className="animated slideInLeft delay-0.3s">
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
      </WorkLeft>
      <AboutRight className="animated slideInRight delay-0.8s">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title">Vertical...</p>
                  <p className="subtitle">Top tile</p>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="title">...tiles</p>
                  <p className="subtitle">Bottom tile</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <p className="title">Middle tile</p>
                  <p className="subtitle">With an image</p>
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/640x480.png"
                      alt="text"
                    />
                  </figure>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">Wide tile</p>
                <p className="subtitle">Aligned with the right tile</p>
                <div className="content">sss</div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Tall tile</p>
                <p className="subtitle">With even more content</p>
                <div className="content">dfghj</div>
              </div>
            </article>
          </div>
        </div>

      </AboutRight>
    </WorkContainer>
  );
};

export default Work;
