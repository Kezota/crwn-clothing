import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';

const CustumButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustumButton;