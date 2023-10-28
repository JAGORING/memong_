import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import PIcon1 from '../assets/images/share_p_1.png';
import PIcon2 from '../assets/images/share_p_2.png';
import PIcon3 from '../assets/images/share_p_3.png';
import PIcon4 from '../assets/images/share_p_4.png';
import CIcon1 from '../assets/images/share_c_1.png';
import CIcon2 from '../assets/images/share_c_2.png';
import CIcon3 from '../assets/images/share_c_3.png';
import CIcon4 from '../assets/images/share_c_4.png';
import CIcon5 from '../assets/images/share_c_5.png';

import { breakpoints } from '../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SharePortfolioSection = () => {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(swiperRef.current?.swiper.activeIndex || 0);
  return (
    <Section>
      <Title>
        <h1 className="title1">초상권 계약하고</h1>
        <h1 className="title2">포트폴리오 만들기까지</h1>
        <h1 className="grd-text">단 10초로 끝내기</h1>
        <p>
          아직도 종이에 사인하고 직접 보관하시나요?
          <br />
          전자서명으로 손쉽고 빠르게 초상권 계약해 보세요!
        </p>
      </Title>
      <div className="items">
        {['포트폴리오 공유', '초상권 계약'].map((item, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current.swiper.slideTo(index)}
            className={`item ${index === currentSlideIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <div>
        <SwiperContent>
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            navigation={true}
            pagination={{
              el: '.swiper-custom-pagination-share',
            }}
            onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex % 2)}
          >
            <SwiperSlide>
              <div className="content-title">
                <p>포트폴리오 만들기</p>
                <h3>포트폴리오 공유하는 법</h3>
                <h3>
                  시술 후 촬영한 <span>사진을 업로드</span>해주세요.
                </h3>
              </div>
              <div className="content-steps">
                <div className="vertical-line port"></div>
                <div className="row port">
                  <img src={PIcon1} alt="icon1" />
                  <div className="text">
                    <p>STEP 1</p>
                    <h4>미몽에 회원가입하기</h4>
                  </div>
                </div>
                <div className="row port">
                  <img src={PIcon2} alt="icon1" />
                  <div className="text">
                    <p>STEP 2</p>
                    <h4>약속된 일정에 모델과 시술 실행</h4>
                  </div>
                </div>
                <div className="row port">
                  <img src={PIcon3} alt="icon1" />
                  <div className="text">
                    <p>STEP 3</p>
                    <h4>시술된 사진 촬영 및 업로드</h4>
                  </div>
                </div>
                <div className="row port">
                  <img src={PIcon4} alt="icon1" />
                  <div className="text">
                    <p>STEP 4</p>
                    <h4 style={{ color: '#368DED' }}>포트폴리오 공유</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content-title">
                <p>모델과 계약하기</p>
                <h3>모델과 계약하는 법</h3>
                <h3>
                  견적을 제안하여 <span>초상권 계약</span>진행 해주세요.
                </h3>
              </div>
              <div className="content-steps">
                <div className="vertical-line cont"></div>
                <div className="row cont">
                  <img src={CIcon1} alt="icon1" />
                  <div className="text">
                    <h4>Step1. 모델조회 및 선택하기!</h4>
                    <p>
                      추천 모델 또는 내 입맛에 딱 맞는 모델을
                      <br /> 선택해 주세요
                    </p>
                  </div>
                </div>
                <div className="row cont">
                  <img src={CIcon2} alt="icon2" />
                  <div className="text">
                    <h4>Step2. 견적 산출하기</h4>
                    <p>계약 신청에 필요한 예상 가격을 입력해 주세요</p>
                  </div>
                </div>
                <div className="row cont">
                  <img src={CIcon3} alt="icon3" />
                  <div className="text">
                    <h4>Step3. 초상권 계약하기</h4>
                    <p>
                      채팅을 통해 모델과 이야기를 나누고
                      <br /> 초상권 계약서를 전송합니다.
                    </p>
                  </div>
                </div>
                <div className="row cont">
                  <img src={CIcon4} alt="icon4" />
                  <div className="text">
                    <h4>Step4. 계약서 사인하기</h4>
                    <p>
                      초상권 계약을 요청 받은 모델이 사인을 하여
                      <br /> 계약서를 제출합니다.
                    </p>
                  </div>
                </div>
                <div className="row cont">
                  <img src={CIcon5} alt="icon5" />
                  <div className="text">
                    <h4>Step5. 계약 완료!</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </SwiperContent>
        <div className="swiper-custom-pagination-share flex-row" />
      </div>
    </Section>
  );
};
export default SharePortfolioSection;

const Section = styled.section`
  background-color: ${(props) => props.theme.whiteColor};
  padding: 100px 20px 50px;
  display: flex;
  justify-content: center;
  gap: 15%;
  align-items: base-line;

  .swiper-custom-pagination-share {
    margin-top: 30px;
    width: 100%;
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

  .items {
    display: none;
  }
  ${breakpoints.small} {
    flex-direction: column;
    padding: 80px 20px;
    flex-direction: column;
    .items {
      margin: 30px auto;
      display: flex;
      align-items: center;
      width: 200px;
      height: 40px;
      border-radius: 20px;
      background-color: #f8f9fc;

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 300;
        font-size: 0.75rem;
        color: #666666;
        width: 100%;
        &.active {
          font-weight: 700;
          color: ${(props) => props.theme.whiteColor};
          background-color: ${(props) => props.theme.UserViewPurpleColor};
          height: 100%;
          border-radius: 20px;
        }
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  h1 {
    font-weight: 900;
    font-size: 3.75rem;
    line-height: 80px;
    &.title1 {
      color: ${(props) => props.theme.StoryGrayColor};
    }
    &.title2 {
      color: ${(props) => props.theme.CarouselCardColor};
    }
    &.grd-text {
      ${(props) => props.theme.grdText}
    }
  }

  p {
    color: ${(props) => props.theme.StoryGray3Color};
    margin-top: 10px;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
  }
  ${breakpoints.medium} {
    h1 {
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 38px;
    }
    p {
      font-size: 1rem;
      line-height: 28px;
    }
  }
  ${breakpoints.small} {
    h1 {
      font-weight: 700;
      font-size: 1.625rem;
      line-height: 31px;
      &.grd-text {
        font-weight: 800;
      }
    }
    p {
      margin-top: 10px;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;

const SwiperContent = styled.div`
  background-color: ${(props) => props.theme.whiteColor};
  display: flex;
  justify-content: center;
  align-items: base-line;
  width: 400px;

  ${breakpoints.small} {
  width: 100%;
  .content-title {
  display:none;
  }
  }

  .swiper-slide {
    width: 100%;
    .content-title {
      margin-bottom: 20px;
      p {
        font-weight: 300;
        font-size: 0.875rem;
        color: #565c63;
        margin-bottom: 10px;
      }
      h3 {
        font-weight: 500;
        font-size: 1.25rem;
        color: #121619;
        line-height: 25px;
        
        span {
          font-weight: 600;
          color: #368ded;
        }
      }
    }
    
    .content-steps {
      background-color: ${(props) => props.theme.CarouselBackgroudColor};
      height: 550px;
      border-radius: 12px;
      padding: 30px 20px;

      position: relative;
      .vertical-line {
        position: absolute;
        width: 0.57px;
        background-color: #c4c4c4;
        top: 35px;
        &.port{
          left: 48px;
          height: 270px;
        }
        &.cont{
          left: 55px;
          height:400px;
        }
      }
      .row {
        display: flex;
        align-items: center;
        &:not(:last-of-type) {
          margin-bottom: 20px;
        }

        &.port {
          img {
            width: 56px;
            height: 56px;
            margin-right: 10px;
            z-index: 1;
          }
          .text {
            font-weight: 500;
            p {
              font-size: 0.75rem;
              color: #808892;
            }
            h4 {
              margin-top: 8px;
              font-size: 1rem;
              color: #343a3f;
            }
          }
        }

      &.cont {
        img {
          width: 73px;
          height: 73px;
          margin-right: 10px;
          z-index: 1;
        }
        .text {
          color:#21272A;
          h4 {
            font-weight: 500;
            font-size: 1rem;
          }
          p {
            margin-top: 10px;
          font-weight: 300;
            font-size: 0.875rem;
            br {
              display: none;
            }
          }
        }
      }
    }
    }
    }
  }

  .swiper-button-prev {
    display:none;
  }
  .swiper-button-next {
    display:none;
  }
`;
