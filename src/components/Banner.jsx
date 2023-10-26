import React from 'react';
import styled from 'styled-components';

import Note from '../assets/images/image_note.png';

import { breakpoints } from '../styles/theme';

const Banner = () => {
  return <Box></Box>;
};
export default Banner;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
  }
`;
