import React from 'react';
import styled from 'styled-components';

import Letter from '../assets/images/Love_letter.png';

import { breakpoints } from '../styles/theme';

const Banner2 = () => {
  return (
    <Box className="flex-column">
      <div className="flex-row">
        <img src={Letter} alt="Love letter" />
        <h1>
          미몽 <span>구독하고</span> 꿀팁 확인
        </h1>
      </div>
      <div className="start-btn">무료로 시작하기</div>
    </Box>
  );
};
export default Banner2;

const Box = styled.div`
  padding: 100px 0;
  background: linear-gradient(119.05deg, #532fd0 75.25%, #8563fa 110.43%);
  height: 320px;

  img {
    width: 72px;
    height: 72px;
  }

  h1 {
    font-weight: 600;
    font-size: 3.75rem;
    color: ${(props) => props.theme.whiteColor};
    span {
      font-weight: 800;
      background: linear-gradient(94.87deg, #71a3ff 28.31%, rgba(124, 100, 250, 0.7) 87.64%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  .start-btn {
    margin-top: 40px;
    cursor: pointer;
    border: 1.5px solid #d9d9d9;
    background: ${(props) => props.theme.whiteColor};
    padding: 20px 36px;
    border-radius: 36px;

    font-weight: 900;
    font-size: 1.75rem;
    color: #5829fc;
  }
  ${breakpoints.medium} {
    img {
      width: 48px;
      height: 48px;
    }
    h1 {
      font-size: 2.5rem;
    }
  }
  ${breakpoints.small} {
    padding: 70px 0;
    height: 120px;

    img {
      width: 24px;
      height: 24px;
    }

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
    }
    .start-btn {
      margin-top: 20px;
      border: 0.58px solid #d9d9d9;
      padding: 10px;
      border-radius: 15px;

      font-weight: 700;
      font-size: 0.75rem;
    }
  }
`;
