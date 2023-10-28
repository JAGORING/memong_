import React from 'react';
import styled from 'styled-components';

import FindIcon from '../assets/images/btn_현위치.png';
import Circle1 from '../assets/images/banner-circle-1.png';
import Circle2 from '../assets/images/banner-circle-2.png';
import Circle3 from '../assets/images/banner-circle-3.png';
import ModelList from '../assets/images/banner-model-list.png';

import { breakpoints } from '../styles/theme';

const Banner1 = () => {
  return (
    <Box className="flex-row">
      <Title>
        <h1>
          당신에게 알맞은 <span>Model</span>
          은?
        </h1>
        <p>언제 어디든지 맞춤형 모델을 추천해드립니다.</p>

        <div className="find-btn flex-row">
          <img src={FindIcon} alt="Find Icon" />
          <h4>현 위치로 모델 찾기</h4>
        </div>
      </Title>

      <ImgBox>
        <img src={Circle1} alt="Circle" className="c1" />
        <img src={Circle3} alt="Circle" className="c3" />
        <img src={ModelList} alt="ModelList" className="model-list" />
        <img src={Circle2} alt="Circle" className="c2" />
      </ImgBox>
    </Box>
  );
};
export default Banner1;

const Box = styled.div`
  background-color: #c8d3e1;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  h1 {
    font-weight: 700;
    font-size: 3.75rem;
    color: ${(props) => props.theme.whiteColor};

    span {
      background: linear-gradient(to top, #007aff4d 30%, transparent 40%);
      color: ${(props) => props.theme.CarouselCardColor};
      position: relative;
      display: inline-block;
    }
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${(props) => props.theme.BannerGrayColor};
  }

  .find-btn {
    margin-top: 30px;
    width: 320px;
    height: 72px;
    background-color: ${(props) => props.theme.whiteColor};
    border: 1.5px solid #d9d9d9;
    border-radius: 36px;

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 5px;
    }

    h4 {
      color: ${(props) => props.theme.blackColor};
      font-weight: 700;
      font-size: 1.75rem;
    }
  }
  ${breakpoints.medium} {
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1.1rem;
      margin-top: 10px;
    }
    .find-btn {
      width: 220px;
      height: 45px;
      border: 1px solid #d9d9d9;

      img {
        width: 1.6rem;
        height: 1.6rem;
      }

      h4 {
        font-size: 1.2rem;
      }
    }
  }
  ${breakpoints.small} {
    h1 {
      font-size: 1.125rem;
      span {
        background: linear-gradient(to top, #007aff4d 40%, transparent 40%);
      }
    }
    p {
      font-size: 0.68rem;
      margin-top: 5px;
    }

    .find-btn {
      margin-top: 20px;
      width: 120px;
      height: 28px;
      border: 0.58px solid #d9d9d9;
      border-radius: 4px;

      img {
        width: 1rem;
        height: 1rem;
        margin-right: 3px;
      }

      h4 {
        font-size: 0.625rem;
      }
    }
  }
`;
const ImgBox = styled.div`
  margin-left: 100px;
  position: relative;
  width: 400px;
  height: 400px;

  img {
    position: absolute;

    &.c1 {
      bottom: 25%;
    }
    &.c2 {
      bottom: 38%;
      left: 12.5%;
    }
    &.c3 {
      top: 25%;
      right: 10%;
    }
    &.model-list {
      margin: auto;
      width: 236px;
      height: 240px;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  ${breakpoints.medium} {
    margin-left: 20px;
    width: 300px;
    height: 300px;

    img {
      &.c1 {
        bottom: 8%;
        left: -15%;
      }
      &.c2 {
        bottom: 26%;
        left: 0%;
      }
      &.c3 {
        top: 10%;
        right: 0%;
      }
      &.model-list {
        margin: auto;
        width: 236px;
        height: 240px;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  ${breakpoints.small} {
    margin-left: 0px;
    position: relative;
    width: 140px;
    height: 120px;
    img {
      &.c1 {
        top: 66%;
        left: -4%;
        width: 60px;
        height: 60px;
      }
      &.c2 {
        top: 80%;
        left: 7%;
        width: 26px;
        height: 26px;
      }
      &.c3 {
        top: 20%;
        right: 10%;
        width: 22px;
        height: 22px;
      }
      &.model-list {
        z-index: 1;
        width: 100px;
        height: 100px;

        top: 70%;
        left: 50%;
      }
    }
  }
`;
