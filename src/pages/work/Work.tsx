import * as React from 'react';
import { WorkContainer } from './Work.style';

export interface IContactProps {}

export default class Work extends React.Component<IContactProps, any> {
  public render() {
    return (
      <WorkContainer>
        <h1>Work</h1>
      </WorkContainer>
    );
  }
}
