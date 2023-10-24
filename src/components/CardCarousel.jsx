import React from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Portfolio from '../assets/images/img_포트폴리오.png';
import Model from '../assets/images/img_모델매칭.png';
import Media from '../assets/images/img_미디어.png';
import Contract from '../assets/images/img_계약서.png';
import Calendar from '../assets/images/img_calendar.png';
import Slider from 'react-slick';
import { breakpoints } from '../styles/theme';
import { _setScreenSize } from '../App';
const CardCarousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    autoplay: true,
    centerPadding: window.innerWidth <= 767 ? '130px' : '90px',
    slidesToShow: window.innerWidth <= 767 ? 1 : window.innerWidth <= 1200 ? 2 : 3,
    autoplaySpeed: 3000,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {contentDatas.map((content, index) => (
          <Card className="card" key={index}>
            <h4>{content.isFunc ? '신규 기능' : '신규 업데이트'}</h4>
            <h2>{content.label}</h2>
            <div>
              <img src={content.url} alt={content.label} />
            </div>
          </Card>
        ))}
      </Slider>
    </CarouselContainer>
  );
};
export default CardCarousel;

const CarouselContainer = styled.div`
  .slick-slider {
    display: flex;
    justify-content: space-evenly;
  }
  margin-top: 40px;
  background-color: ${(props) => props.theme.CarouselBackgroudColor};
  padding: 50px 0;
  .center {
    .slick-center .card {
      ${breakpoints.large} {
        width: 500px !important;
        height: 600px !important;
      }
      ${breakpoints.medium} {
        width: 400px !important;
        height: 480px !important;
      }
      ${breakpoints.small} {
        width: 200px !important;
        height: 200px !important;
      }
    }
    .slick-slide:not(.slick-center) .card {
      ${breakpoints.large} {
        width: 500px !important;
        height: 500px !important;
      }
      ${breakpoints.medium} {
        width: 400px !important;
        height: 400px !important;
      }
      ${breakpoints.small} {
        width: 160px !important;
        height: 160px !important;
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
  margin: 0 20px;
  ${breakpoints.large} {
    padding: 0 50px;
    width: 500px !important;
    height: 500px !important;
  }
  ${breakpoints.medium} {
    padding: 0 30px;
    width: 400px !important;
    height: 400px !important;
  }
  ${breakpoints.small} {
    padding: 0 20px;
    width: 160px !important;
    height: 160px !important;
  }

  h4 {
    text-align: left;
    padding-top: 4rem;
    font-size: 1.4rem;
    color: #ffffffb2;
    ${breakpoints.medium} {
      font-size: 1.2rem;
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
      font-size: 2rem;
    }
    ${breakpoints.small} {
      padding-top: 15px;
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
      margin-top: 30px;
      height: 200px;
    }
    ${breakpoints.small} {
      margin-top: 10px;
      height: 60px;
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
