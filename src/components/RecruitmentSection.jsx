import React from 'react';
import styled from 'styled-components';

import Note from '../assets/images/image_note.png';

import { breakpoints } from '../styles/theme';

const RecruitmentSection = () => {
  return <Section></Section>;
};
export default RecruitmentSection;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
  }
`;
