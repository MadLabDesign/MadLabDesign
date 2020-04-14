import React, { FunctionComponent } from 'react';

import ContactOptions from './ContactOptions';
import { ContactContainer } from './Contact.style';

interface Props { }

const Contact: FunctionComponent<Props> = prop => {

  return (
    <ContactContainer>
      <ContactOptions />
    </ContactContainer>

  );
};

export default Contact;
