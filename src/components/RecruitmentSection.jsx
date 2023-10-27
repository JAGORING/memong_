import React from 'react';
import styled from 'styled-components';

import One from '../assets/images/number_1.png';
import Two from '../assets/images/number_2.png';
import Three from '../assets/images/number_3.png';

import FindModel from '../assets/images/find-model.png';
import OnOffModel from '../assets/images/onoff-model.png';
import DetailModel from '../assets/images/detail-model.png';

import { breakpoints } from '../styles/theme';

const RecruitmentSection = () => {
  return (
    <Section className="flex-column">
      <Title className="flex-column">
        <h1>다양한 시술법, 다양한 헤어 상태!</h1>
        <h1>
          <span className="grd-text">상시 모집</span>도 자유롭게.
        </h1>

        <p>헤어스타일부터 머리길이, 색상까지 구체적으로 원하는 모델을 찾을 수 있습니다</p>
      </Title>

      <Content className="flex-row">
        <div className="content-box flex-column">
          <div className="content-title flex-row">
            <img src={One} alt="One" />
            <h4>
              <span className="grd-text">내 입맛대로</span> 선택하기
            </h4>
          </div>
          <div className="content-img ">
            <img src={FindModel} alt="FindModel" style={{ paddingTop: '17px' }} />
          </div>
        </div>
        <div className="flex-column">
          <div className="content-title flex-row">
            <img src={Two} alt="Two" />
            <h4>
              <span className="grd-text">간단하게 온오프</span> 설정!
            </h4>
          </div>
          <div className="content-img">
            <img src={OnOffModel} alt="FindModel" />
          </div>
        </div>
        <div className="flex-column">
          <div className="content-title flex-row">
            <img src={Three} alt="Three" />
            <h4>
              <span className="grd-text">더 디테일한</span> 내용으로
            </h4>
          </div>
          <div className="content-img">
            <img src={DetailModel} alt="FindModel" />
          </div>
        </div>
        <div className="overlay"></div>
      </Content>
    </Section>
  );
};
export default RecruitmentSection;

const Section = styled.section`
  padding: 100px 0 0;

  .grd-text {
    ${(props) => props.theme.grdText}
  }
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
  }
`;

const Title = styled.div`
  h1 {
    font-weight: 800;
    font-size: 3.75rem;
    line-height: 90px;
    color: ${(props) => props.theme.StoryGrayColor};

    &:nth-child(2) {
      color: ${(props) => props.theme.mainH1GrayColor};
    }
  }
  p {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.StoryGray3Color};
  }
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
  }
`;

const Content = styled.div`
  margin-top: 50px;
  padding-top: 60px;
  background-color: ${(props) => props.theme.StoryBoxBackgroudColor};
  width: 1200px;

  border-radius: 20px;

  .content-box {
    margin: 0 auto;
  }
  .content-title {
    display: flex;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 15px;
    }
    h4 {
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
  .content-img {
    overflow-y: hidden;
    img {
      max-height: 550px;
      max-width: 100%;
      object-fit: cover;
    }
  }

  position: relative;
  .overlay {
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.0001) 0%, #ffffff 74.13%);
    width: 1200px;
    height: 230px;
    rotate: -180deg;
  }

  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
  }
`;
