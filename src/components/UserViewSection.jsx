import React, { useState } from 'react';
import styled from 'styled-components';

import PointHand from '../assets/images/point-hand.png';
import CheckMark from '../assets/images/check-mark.png';

import { breakpoints } from '../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const UserViewSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex % 3);
  };
  return (
    <Section className="flex-column">
      <div className="title flex-row">사용자 화면</div>
      <div className="sub-title flex-row">
        <img src={PointHand} alt="title icon" />
        <h3>
          기록관리가 쉽다! <span>부담없이 빠져들다</span>
        </h3>
      </div>
      <SlidePoints>
        <div className="point-slide">
          <Swiper
            direction={'vertical'}
            loop={true}
            centeredSlides={true}
            spaceBetween={15}
            slidesPerView={2.3}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide className="flex-row">
              <div className="point-item flex-row">
                <span>1</span> 시술이 끝난 후에 이어지는 대화와 기록
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex-row">
              <div className="point-item flex-row">
                <span>2</span> 포트폴리오 관리와 자랑을 한번에
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex-row">
              <div className="point-item flex-row">
                <span>3</span> Tap 한번으로 시작되는 모델 지원
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <ul className="point-desc-ul">
          {pointDescArr.map((item, index) => (
            <li key={index} className={`point-desc ${index === currentSlideIndex ? 'active' : 'none'}`}>
              <div className="point-desc-title flex-row start">
                <img src={CheckMark} alt="check mark" />
                <div className="flex-column start">
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SlidePoints>
    </Section>
  );
};
export default UserViewSection;

const Section = styled.section`
  background: ${(props) => props.theme.UserViewBackGrdgroudColor};
  padding: 80px 0;

  .title {
    width: 240px;
    height: 72px;
    background-color: ${(props) => props.theme.UserViewDarkGrayColor};
    color: ${(props) => props.theme.whiteColor};
    font-size: 1.75rem;
    font-weight: 700;
    opacity: 0.9;

    border-radius: 35px;
    margin-bottom: 40px;
    ${breakpoints.medium} {
      width: 165px;
      height: 51px;
      font-size: 1.3rem;
    }
    ${breakpoints.small} {
      width: 90px;
      height: 30px;
      font-size: 0.875rem;
    }
  }

  .sub-title {
    margin-bottom: 40px;
    gap: 20px;
    img {
      width: 2.7rem;
      height: 3rem;
    }
    h3 {
      font-size: 3.75rem;
      font-weight: 900;
      color: ${(props) => props.theme.mainH1GrayColor};
      span {
        color: ${(props) => props.theme.whiteColor};
      }
    }
    ${breakpoints.medium} {
      img {
        width: 2.7rem;
        height: 3rem;
      }
      h3 {
        font-size: 2.5rem;
        font-weight: 700;
      }
    }
    ${breakpoints.small} {
      img {
        width: 1.3rem;
        height: 1.625rem;
      }
      h3 {
        font-size: 1.25rem;
        font-weight: 900;
      }
    }
  }
`;

const SlidePoints = styled.div`
  .swiper {
    width: 600px;
    height: 300px;
    ${breakpoints.medium} {
      width: 460px;
      height: 225px;
    }
    ${breakpoints.small} {
      width: 320px;
      height: 150px;
    }
  }
  .swiper-slide {
    text-align: center;
    box-shadow: 0px 3.8500001430511475px 11.550000190734863px 0px #0000001a;
    border-radius: 15px;

    opacity: 0.6;
    filter: blur(2px);
    transition: 0.3s;

    &.swiper-slide-prev {
      background: linear-gradient(180deg, rgba(255, 255, 255, 7e-5) 13.33%, rgba(255, 255, 255, 0.7) 91.11%);
    }
    &.swiper-slide-next {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 8.89%, rgba(255, 255, 255, 7e-5) 86.67%);
    }
    &.swiper-slide-active {
      background-color: ${(props) => props.theme.whiteColor};
      opacity: 1;
      filter: none;
    }

    .point-item {
      span {
        font-size: 2.375rem;
        font-weight: 700;
        color: ${(props) => props.theme.UserViewPurpleColor};
        margin-right: 20px;
      }
      font-size: 1.875rem;
      font-weight: 500;
      color: ${(props) => props.theme.mainH1GrayColor};
      ${breakpoints.medium} {
        span {
          font-size: 1.8rem;
        }
        font-size: 1.4rem;
      }
      ${breakpoints.small} {
        span {
          font-size: 1.25rem;
          font-weight: 700;
          margin-right: 10px;
        }
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .point-desc-ul {
    margin-top: 60px;
    .point-desc {
      padding-left: 40px;
      &:not(:first-of-type) {
        margin-top: 40px;
      }
      &.active {
        width: 760px;
        height: 100%;

        border-radius: 20px;
        padding: 30px 40px;
        box-shadow: 0px 10px 20px 0px #6b66e33d;
        background-color: #ffffff33;
        .point-desc-title {
          font-weight: 700;
        }
      }
      color: ${(props) => props.theme.whiteColor};

      .point-desc-title {
        gap: 15px;
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
        font-size: 2.25rem;
        font-weight: 500;
        p {
          display: none;
          margin: 15px 0 0;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 30px;
        }
      }
      &.active p {
        display: block;
      }
    }
    ${breakpoints.medium} {
    margin-top: 40px;
    &.active {
      width: 540px;          
      height: 100%;

      .point-desc-title {
        font-weight: 700;
        gap: 15px;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
        font-size: 1.4rem;
        p {
          display: none;
          font-weight: 400;
          font-size: 1.3rem;
          line-height: 30px;
        }
      }
    }
    
    }
    ${breakpoints.small} {
      .point-desc {
        width: 320px !important;

        padding-left: 20px;
        &:not(:first-of-type) {
          margin-top: 20px;
        }
          box-shadow: 0px 10px 20px 0px #6b66e33d;
          background-color: #ffffff33;
          
          height: 100%;
          border-radius: 10px !important;
          padding: 10px 20px !important;
          .point-desc-title {
            font-weight: 700;
          }
        .point-desc-title {
          gap:5px;
          img {
            width: 0.9rem;
            height: 0.9rem;
          }
          font-size: 0.9rem;
          font-weight: 700;
          p {
              display: block;
            margin: 5px 0 0;
            font-size: 0.56rem;
            line-height: 13px;
          }
        }
      }
        
        
  }
`;

const pointDescArr = [
  {
    title: '히스토리를 대화와 기록으로 확인해요',
    description:
      '깔끔한 채팅 경험을 제공하고, 채팅 목록을 통해 이전 기록을 확인 할 수 있어요! 클릭하면 떠오르는 모델과의 대화! 그 어떤 것도 놓치지 않아요',
  },
  {
    title: '내 포트폴리오를 뿜뿜 뽐내봐요',
    description:
      '나의 노하우가 담긴 시술과 사진들을 포트폴리오에 차곡 차곡 모아보세요. 마이페이지에서 내 포트폴리오를 공개하여 내 콘테츠를 전시할 수 있습니다.',
  },
  {
    title: '모델과의 즐거운 소통이 시작됩니다',
    description:
      '찾으시는 스타일링, 머리 길이, 머리 색을 한 번의 클릭으로 설정할 수 있어요. 간편한 온 오프 설정으로 모집 공고를 쉽게 올리고 내리죠!',
  },
];
