import React from 'react';
import styled from 'styled-components';

import Note from '../assets/images/image_note.png';

import { breakpoints } from '../styles/theme';

const Banner2 = () => {
  return <Box className="flex-column"></Box>;
};
export default Banner2;

const Box = styled.div`
  background-color: #c8d3e1;
  height: 300px;
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
  }
`;
