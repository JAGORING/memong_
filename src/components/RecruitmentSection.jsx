import React from 'react';
import styled from 'styled-components';

import One from '../assets/images/number_1.png';
import Two from '../assets/images/number_2.png';
import Three from '../assets/images/number_3.png';

import FindModel from '../assets/images/find-model.png';
import OnOffModel from '../assets/images/onoff-model.png';
import DetailModel from '../assets/images/detail-model.png';

import { breakpoints } from '../styles/theme';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RecruitmentSection = () => {
  return (
    <Section>
      <Title>
        <h1>다양한 시술법, 다양한 헤어 상태!</h1>
        <h1>
          <span className="grd-text">상시 모집</span>도 자유롭게.
        </h1>

        <p>
          헤어스타일부터 머리길이, 색상까지 구체적으로 원하는
          <br /> 모델을 찾을 수 있습니다
        </p>
      </Title>

      <Content>
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

      <SwiperContent>
        <Swiper spaceBetween={0} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2.4, spaceBetween: 0 } }}>
          <SwiperSlide className="flex-column">
            <div className="content-title flex-row">
              <img src={One} alt="One" />
              <h4>
                <span className="grd-text">내 입맛대로</span> 선택하기
              </h4>
            </div>
            <div className="content-img flex-row">
              <img src={FindModel} alt="FindModel" style={{ paddingTop: '17px' }} />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-column">
            <div className="content-title flex-row">
              <img src={Two} alt="Two" />
              <h4>
                <span className="grd-text">간단하게 온오프</span> 설정!
              </h4>
            </div>
            <div className="content-img flex-row">
              <img src={OnOffModel} alt="FindModel" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex-column">
            <div className="content-title flex-row">
              <img src={Three} alt="Three" />
              <h4>
                <span className="grd-text">더 디테일한</span> 내용으로
              </h4>
            </div>
            <div className="content-img flex-row">
              <img src={DetailModel} alt="FindModel" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="overlay"></div>
      </SwiperContent>
    </Section>
  );
};
export default RecruitmentSection;

const Section = styled.section`
  padding: 100px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .grd-text {
    ${(props) => props.theme.grdText}
  }
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
    padding: 100px 0 0 20px;
    justify-content: left;
    align-items: start;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  br {
    display: none;
  }
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
    justify-content: left;
    align-items: start;
    h1 {
      font-weight: 700;
      font-size: 1.625rem;
      line-height: 30px;
    }
    p {
      margin-top: 10px;
      font-size: 0.875rem;
      line-height: 20px;
      br {
        display: inline-block;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 100%;
    height: 230px;
    rotate: -180deg;
  }
  ${breakpoints.medium} {
    display: none;
  }
`;

const SwiperContent = styled.div`
  display: none;
  ${breakpoints.medium} {
    display: block;
    background-color: ${(props) => props.theme.StoryBoxBackgroudColor};
    width: 90%;
    border-radius: 10px;
    margin-top: 50px;
    .swiper-slide {
      .content-title {
        padding: 25px 0 10px;
        img {
          width: 2.2rem;
          height: 2.2rem;
          margin-right: 10px;
        }
        h4 {
          font-weight: 800;
          font-size: 1.3rem;
        }
      }
      .content-img {
        width: 90%;
        overflow-y: hidden;
        img {
          max-width: 100%;
          object-fit: contain;
        }
      }
    }

    position: relative;
    .overlay {
      position: absolute;
      bottom: 0;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.0001) 0%, #ffffff 74.13%);
      width: 100%;
      height: 150px;
      rotate: -180deg;
      z-index: 1;
    }
  }

  ${breakpoints.small} {
    margin: 30px auto 0;
    width: 100%;
    max-width: 600px;
    .swiper-slide {
      .content-title {
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
        h4 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;
