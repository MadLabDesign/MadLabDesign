import React, { FunctionComponent } from 'react';
import { FreebiesContainer } from './Freebies.style';

import GridLayout from '../../components/gridLayout/GridLayout';

interface IFreebiesProps { }

const Freebies: FunctionComponent<IFreebiesProps> = props => {
  return (
    <FreebiesContainer>
      <GridLayout />
    </FreebiesContainer>
  );
};

export default Freebies;
