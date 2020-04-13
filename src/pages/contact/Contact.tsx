import React, { FunctionComponent } from 'react';
import { ContactContainer } from './Contact.style';

interface IContactProps {
}

const Contact: FunctionComponent<IContactProps> = (props) => {
  return (
    <ContactContainer>
      <h1>Contact me</h1>
    </ContactContainer>
  );
};

export default Contact;
