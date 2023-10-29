import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Phone_AppStart from '../assets/images/experience/phone_app_start.png';
import Phone_Estimate from '../assets/images/experience/phone_estimate.png';
import Phone_Chatting from '../assets/images/experience/phone_ chatting.png';
import Phone_Contract from '../assets/images/experience/phone_ contract.png';
import Phone_Profile from '../assets/images/experience/phone_profile.png';

import Phone_AppStart1 from '../assets/images/experience/app_start_1.png';
import Phone_AppStart2_1 from '../assets/images/experience/app_start_2_1.png';
import Phone_AppStart2_2 from '../assets/images/experience/app_start_2_2.png';
import Phone_Estimate1 from '../assets/images/experience/estimate_1.png';
import Phone_Estimate2 from '../assets/images/experience/estimate_2.png';
import Phone_Chatting1 from '../assets/images/experience/chatting_1.png';
import Phone_Chatting2 from '../assets/images/experience/chatting_2.png';
import Phone_Chatting3 from '../assets/images/experience/chatting_3.png';
import Phone_Contract1 from '../assets/images/experience/contract_1.png';
import Phone_Contract2 from '../assets/images/experience/contract_2.png';
import Phone_Profile1 from '../assets/images/experience/profile_1.png';
import Phone_Profile2 from '../assets/images/experience/profile_2.png';

import { breakpoints } from '../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ExperienceSection = () => {
  const [swiper, setSwiper] = useState();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex % 5);
  };
  const handleCategoryClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <Section className="flex-column">
      <TitleBox>
        <h1>빠르고 간편하게</h1>
        <h1>모델과 연결되는 매혹적인 경험</h1>
        <p>
          쉽게 회원 가입하고 쉽게 채팅하시죠
          <br />
          모델을 추천받고 내 위치에 가까운 모델과 연결되고, 채팅으로 시술 및 일정을 잡을 수 있어요.
        </p>
      </TitleBox>
      <Category>
        <div className="new flex-row">NEW</div>
        <div className="items">
          {['간편하게 앱 시작하기', '견적내기', '채팅하기', '계약하기', '프로필 관리'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(index + 1)}
              className={`category ${index + 1 === (currentSlideIndex !== 0 ? currentSlideIndex : 5) ? 'active' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      </Category>
      <SlideContent>
        <div className="flex-row">
          <div className="content-area flex-row left">
            <div className="overlay left"></div>
            {currentSlideIndex === 3 ? (
              <>
                <img className="left-img" src={Phone_Chatting1} />
                <img className="left-img" src={Phone_Chatting2} />
              </>
            ) : (
              <div>
                <img className="left-img" src={leftImageArray[currentSlideIndex]} />
              </div>
            )}
          </div>
          <div className="content-area">
            <Swiper
              ref={swiperRef}
              loop={true}
              modules={[Pagination, Navigation]}
              cssMode={true}
              navigation={true}
              pagination={{
                el: '.swiper-custom-pagination',
              }}
              className="mySwiper"
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              onSwiper={setSwiper}
            >
              <SwiperSlide className="flex-row">
                <div className="point-item flex-row">
                  <img src={Phone_AppStart} alt="App Start" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex-row">
                <div className="point-item flex-row">
                  <img src={Phone_Estimate} alt="Estimate" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex-row">
                <div className="point-item flex-row">
                  <img src={Phone_Chatting} alt="chatting" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex-row">
                <div className="point-item flex-row">
                  <img src={Phone_Contract} alt="contract" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex-row">
                <div className="point-item flex-row">
                  <img src={Phone_Profile} alt="profile" />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="previous-btn" onClick={() => swiperRef.current.swiper.slidePrev()} />
            <div className="next-btn" onClick={() => swiperRef.current.swiper.slideNext()} />
            <div className="swiper-custom-pagination flex-row" />
          </div>
          <div className="content-area right">
            <div className="overlay right"></div>
            {currentSlideIndex === 1 ? (
              <div>
                <img className="right-img" src={Phone_AppStart2_1} />
                <img className="right-img" src={Phone_AppStart2_2} />
              </div>
            ) : (
              <div>
                <img className="right-img" src={rightImageArray[currentSlideIndex]} />
              </div>
            )}
          </div>
        </div>
      </SlideContent>
    </Section>
  );
};
export default ExperienceSection;

const Section = styled.section`
  padding: 100px 15px;
`;
const TitleBox = styled.div`
  h1 {
    font-weight: 900;
    font-size: 3.75rem;
    color: ${(props) => props.theme.StoryGrayColor};
    &:nth-child(2) {
      margin-top: 10px;
      color: ${(props) => props.theme.CarouselCardColor};
    }
  }
  p {
    margin-top: 15px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.StoryGray3Color};
  }
  ${breakpoints.medium} {
    h1 {
      font-weight: 700;
      font-size: 2.7rem;
    }
    p {
      margin-top: 20px;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 24px;
    }
  }
  ${breakpoints.small} {
    h1 {
      font-weight: 700;
      font-size: 1.625rem;
    }
    p {
      margin-top: 20px;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;
const Category = styled.div`
  margin-top: 80px;
  .new {
    margin-bottom: 15px;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background: #d3faff4d;

    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.ExperienceBlueColor};
  }
  .items {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .category {
    cursor: pointer;
    border-radius: 20px;
    padding: 16px 18px;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.ExperienceGrayColor};
    background-color: ${(props) => props.theme.CarouselBackgroudColor};
    &.active {
      background-color: ${(props) => props.theme.purpleBtnColor};
      color: ${(props) => props.theme.whiteColor};
    }
  }
  ${breakpoints.medium} {
    margin-top: 60px;
  }
  ${breakpoints.small} {
    width: 320px;
    margin-top: 40px;

    .new {
      width: 60px;
      height: 24px;
      border-radius: 8px;
      font-size: 0.75rem;
    }
    .items {
      overflow-x: scroll;
      gap: 10px;
    }
    .category {
      font-weight: 500;
      white-space: nowrap;
      font-size: 0.875rem;
      padding: 8px 14px;
    }
  }
`;
const SlideContent = styled.div`
  width: 100%;
  margin-top: 60px;
  .overlay {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.0001) 0%, #ffffff 74.13%);
    position: absolute;
    width: 420px;
    height: 518px;
    &.left {
      left: 0;
      rotate: -180deg;
    }
    &.right {
      right: 0;
    }
  }
  .content-area {
    position: relative;
    overflow-x: hidden;
    flex: 1;
    flex-shrink: 1;
    max-width: 35%;
    ${breakpoints.small} {
      max-width: 50%;
      flex: 3;
    }
    img {
      object-fit: contain;
    }
    &.left {
      display: flex;
      align-items: left;
      justify-content: flex-end;
      padding-right: 20px;
      ${breakpoints.small} {
        flex: 1;
      }
    }
    &.right {
      display: flex;
      flex-direction: column;
      align-items: right;
      justify-content: flex-end;
      padding-left: 20px;
      ${breakpoints.small} {
        flex: 1;
      }
    }
  }
  .swiper {
    max-width: 85%;
    width: 85%;
    min-width: 70%;
    .point-item {
      width: 345px;
      height: 675px;
      img {
        width: 100%;
      }
    }
    ${breakpoints.medium} {
      min-width: 100%;
      width: 100%;
      .point-item {
        width: 270px;
        height: 537px;
      }
    }
    ${breakpoints.small} {
      .point-item {
        width: 200px;
        height: 400px;
      }
    }
  }
  .left-img {
    ${breakpoints.medium} {
      width: 100%;
    }
  }
  .right-img {
    ${breakpoints.medium} {
      width: 100%;
    }
    ${breakpoints.small} {
    }
  }
  .swiper-button-prev {
    ${(props) => props.theme.onlyPC}
    background-image: url('images/arrow_L.png');
    background-size: contain;
    background-position: 50% 60%;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  }
  .swiper-button-next {
    ${(props) => props.theme.onlyPC}
    background-image: url('images/arrow_R.png');
    background-size: contain;
    background-position: 50% 60%;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: '';
  }
  .swiper-custom-pagination {
    ${breakpoints.small} {
      display: none;
    }
    margin-top: 20px;
    height: 10px;
    gap: 5px;
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      opacity: 1;
      background-color: #eaeded;

      &.swiper-pagination-bullet-active {
        width: 10px;
        height: 10px;

        background-color: #80888a;
      }
    }
  }
  ${breakpoints.medium} {
    width: 100%;
    .overlay {
      width: 200px;
      height: 430px;
    }
    .content-area {
      &.left {
        padding-right: 30px;
      }
      &.right {
        padding-left: 30px;
      }
    }
  }
  ${breakpoints.small} {
    margin-top: 40px;
    .overlay {
      width: 70px;
      height: 400px;
    }
  }
`;

const leftImageArray = [
  Phone_Profile1,
  Phone_AppStart1,
  Phone_Estimate1,
  [Phone_Chatting1, Phone_Chatting2],
  Phone_Contract1,
];

const rightImageArray = [
  Phone_Profile2,
  [Phone_AppStart2_1, Phone_AppStart2_2],
  Phone_Estimate2,
  Phone_Chatting3,
  Phone_Contract2,
];
