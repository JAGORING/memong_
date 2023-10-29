import React from 'react';
import styled from 'styled-components';
import Portfolio from '../assets/images/img_포트폴리오.png';
import Model from '../assets/images/img_모델매칭.png';
import Media from '../assets/images/img_미디어.png';
import Contract from '../assets/images/img_계약서.png';
import Calendar from '../assets/images/img_calendar.png';
import { breakpoints } from '../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardCarousel = () => {
  return (
    <CarouselContainer>
      <Swiper
        className="mySwiper"
        loop={true}
        slidesPerView={2.1}
        spaceBetween={0}
        // modules={[Autoplay]}
        // autoplay={{ delay: 500 }}
        centeredSlides={true}
        // speed={2000}
        breakpoints={{
          500: {
            slidesPerView: 2.8,
            spaceBetween: 0,
          },
          767: {
            slidesPerView: 1.8,
            spaceBetween: 0,
          },
          900: {
            slidesPerView: 2.4,
            spaceBetween: 0,
          },
          1200: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1650: {
            slidesPerView: 3.2,
            spaceBetween: 0,
          },
          1800: {
            slidesPerView: 3.4,
            spaceBetween: 0,
          },
          1900: {
            slidesPerView: 3.6,
            spaceBetween: 0,
          },
        }}
      >
        {contentDatas.map((content, index) => (
          <SwiperSlide>
            <Card className="card" key={index}>
              <h4>{content.isFunc ? '신규 기능' : '신규 업데이트'}</h4>
              <h2>{content.label}</h2>
              <div>
                <img src={content.url} alt={content.label} />
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
export default CardCarousel;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  background-color: ${(props) => props.theme.CarouselBackgroudColor};
  padding: 50px 0;
  .swiper-slide {
    display: flex;
    justify-content: center;
    &.swiper-slide-active {
      .card {
        width: 500px;
        height: 600px;
        ${breakpoints.medium} {
          width: 380px;
          height: 400px;
          div {
            max-height: 150px;
            img {
              height: 100%;
            }
          }
        }
        ${breakpoints.small} {
          width: 200px;
          height: 200px;
          div {
            max-height: 100px;
            img {
              height: 100%;
            }
          }
        }
      }
    }
  }
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.CarouselCardColor};
  box-shadow: 4px 4px 16px 0px #00000024;
  border-radius: 10px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  width: 500px;
  height: 500px;
  ${breakpoints.medium} {
    padding: 0 30px;
    width: 350px;
    height: 350px;
  }
  ${breakpoints.small} {
    padding: 0 20px;
    width: 160px;
    height: 160px;
  }

  h4 {
    text-align: left;
    padding-top: 4rem;
    font-size: 1.4rem;
    color: #ffffffb2;
    ${breakpoints.medium} {
      font-size: 1.1rem;
    }
    ${breakpoints.small} {
      padding-top: 35px;
      font-size: 12px;
    }
  }

  h2 {
    text-align: left;
    padding-top: 30px;
    font-size: 2.4rem;
    color: ${(props) => props.theme.whiteColor};
    ${breakpoints.medium} {
      padding-top: 25px;
      font-size: 1.8rem;
    }
    ${breakpoints.small} {
      padding-top: 10px;
      font-size: 16px;
    }
  }

  div {
    margin-top: 40px;
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    img {
      text-align: center;
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
    }
    ${breakpoints.medium} {
      margin-top: 40px;
      max-height: 150px;
      img {
        height: 100%;
      }
    }
    ${breakpoints.small} {
      margin-top: 5px;
      max-height: 60px;
      img {
        height: 100%;
      }
    }
  }
`;

const contentDatas = [
  { isFunc: false, label: '나만의 포트폴리오', url: Portfolio },
  { isFunc: false, label: '특징별 모델 매칭', url: Model },
  { isFunc: true, label: '구인구직 숏터뷰', url: Media },
  { isFunc: false, label: '초상권 계약', url: Contract },
  { isFunc: false, label: '일정 & 제안', url: Calendar },
];
