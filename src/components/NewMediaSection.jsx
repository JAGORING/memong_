import React, { useRef } from 'react';
import styled from 'styled-components';

import Panel1 from '../assets/images/pannel_01.png';
import Panel2 from '../assets/images/pannel_02.png';
import Panel3 from '../assets/images/pannel_03.png';

import { breakpoints } from '../styles/theme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewMediaSection = () => {
  const swiperRef = useRef(null);

  return (
    <Section>
      <Title>
        <h1>
          최신 기능.
          <br /> <span className="grd-text">따끈따끈 한 뉴미디어</span> <span className="black-text">이야기.</span>
        </h1>
        <p>
          꿀팁 가득 한 블로그와 영상이 여기있어요! 당신의 <span>스킬을 업!</span> 해주는 디딤돌이 될거예요!
          <br />
          <span>이제 인증된 미용실의 구인공고만 큐레이션 해드릴게요</span>
        </p>
      </Title>
      <div className="confirm-btn">튜토리얼 확인하기</div>

      <SwiperContent className="flex-row">
        <div className="previous-btn" onClick={() => swiperRef.current.swiper.slidePrev()} />
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1.2}
          modules={[Pagination, Navigation]}
          breakpoints={{
            767: {
              spaceBetween: 0,
              slidesPerView: 2,
            },
            1200: {
              spaceBetween: 0,
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.previous-btn',
          }}
          pagination={{
            el: '.swiper-custom-pagination-media',
          }}
        >
          <SwiperSlide>
            <img src={Panel1} alt="Panel1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Panel2} alt="Panel2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Panel3} alt="Panel3" />
          </SwiperSlide>
        </Swiper>
        <div className="next-btn" onClick={() => swiperRef.current.swiper.slideNext()} />
      </SwiperContent>
      <div className="swiper-custom-pagination-media flex-row" />
    </Section>
  );
};
export default NewMediaSection;

const Section = styled.section`
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .confirm-btn {
    margin-top: 30px;
    border: 1.5px solid #d9d9d9;
    border-radius: 36px;
    padding: 20px 30px;

    font-weight: 700;
    font-size: 1.68rem;
    color: ${(props) => props.theme.blackColor};
  }

  .swiper-custom-pagination-media {
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
  ${breakpoints.small} {
    padding: 80px 0;
    .confirm-btn {
      background-color: #eaeded;
      border: none;
      margin-top: 20px;
      border-radius: 36px;
      font-size: 1rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 800;
    font-size: 3.75rem;
    color: ${(props) => props.theme.StoryGrayColor};
    .grd-text {
      ${(props) => props.theme.grdText}
    }
    .black-text {
      color: ${(props) => props.theme.CarouselCardColor};
    }
    margin-bottom: 20px;
    br {
      display: none;
    }
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 36px;
    color: ${(props) => props.theme.StoryGray3Color};
    span {
      font-weight: 700;
    }
  }
  ${breakpoints.medium} {
    padding: 0 20px;
    align-items: start;

    h1 {
      font-size: 2.7rem;
      br {
        display: block;
      }
    }
    p {
      text-align: left;
      font-size: 1.2rem;
      line-height: 21px;
    }
  }
  ${breakpoints.small} {
    h1 {
      font-weight: 700;
      font-size: 1.625rem;
      br {
        display: block;
      }
      .grd-text,
      .black-text {
        font-weight: 800;
      }
    }
    p {
      font-size: 0.875rem;
      line-height: 21px;
      br {
        display: none;
      }
    }
  }
`;

const SwiperContent = styled.div`
  width: 1200px;
  margin-top: 50px;
  .swiper-slide {
    img {
      width: 320px;
    }
  }
  .previous-btn {
    ${(props) => props.theme.onlyPC}
    background-image: url('images/arrow_ML.png');
    background-size: contain;
    background-position: 50% 60%;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  }
  .next-btn {
    ${(props) => props.theme.onlyPC}
    background-image: url('images/arrow_MR.png');
    background-size: contain;
    background-position: 50% 60%;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
  }
  ${breakpoints.medium} {
    width: 700px;
  }
  ${breakpoints.small} {
    width: 320px;
    .swiper-slide {
      img {
        width: 250px;
      }
    }
  }
`;
