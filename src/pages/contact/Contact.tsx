import * as React from 'react';
import { ContactContainer } from './Contact.style';

export interface IContactProps {}

export default class Contact extends React.Component<IContactProps, any> {
  public render() {
    return (
      <ContactContainer>
        <h1>Contact me</h1>
      </ContactContainer>
    );
  }
}
