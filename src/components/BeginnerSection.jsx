import React from 'react';
import styled from 'styled-components';

import Coins from '../assets/images/Benefit_coin.png';
import Coupon from '../assets/images/Benefit_coupon.png';

import { breakpoints } from '../styles/theme';

const BeginnerSection = () => {
  return (
    <Section>
      <Title>
        <h1>
          특별 할인.
          <br /> <span className="grd-text">입문자</span> <span className="black-text">를 위한 혜택.</span>
        </h1>
      </Title>

      <CardBox>
        <div className="card one">
          <div className="card-text ">
            <h5>미몽 업데이트 기념</h5>
            <h2>
              <span>미몽</span>을 구독하면 무제한
              <br />
              모델매칭+유료영상 무료
            </h2>
            <p>
              <span>미몽</span>과 만들어 나갈 너와 나의 커리어
            </p>
          </div>
          <img src={Coins} alt="Coins" />
        </div>
        <div className="card two">
          <div className="card-text">
            <h5>미몽 업데이트 기념</h5>
            <h2>
              <span>1개월 무료이용권</span> 오늘
              <br />
              부터 프로미용인 시작!
            </h2>
            <p>
              <span>미몽</span>과 만들어 나갈 너와 나의 커리어
            </p>
          </div>
          <img src={Coupon} alt="Coupon" />
        </div>
      </CardBox>
    </Section>
  );
};
export default BeginnerSection;

const Section = styled.section`
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
    padding: 180px 20px 100px;
  }
`;

const Title = styled.div`
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

  ${breakpoints.medium} {
  }
  ${breakpoints.small} {
    align-self: start;
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
  }
`;

const CardBox = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    padding: 0px 33px;
    width: 590px;
    height: 364px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-text {
      h5 {
        font-weight: 500;
        font-size: 1.125rem;
      }
      h2 {
        padding: 15px 0;
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 46px;
        span {
          font-weight: 700;
        }
      }
      p {
        font-weight: 400;
        font-size: 1.25rem;
        span {
          font-weight: 700;
        }
      }
    }

    &.one {
      background-image: url('images/Benefit_coin_bg.png');
      background-size: cover;
      background-position: center;

      img {
        width: 180px;
        height: 237px;
      }

      .card-text {
        h5 {
          color: #898989;
        }
        h2,
        p {
          color: #514c4a;
        }
      }
    }
    &.two {
      background-image: url('images/Benefit_coupon_bg.png');
      background-size: cover;
      background-position: center;

      img {
        width: 156px;
        height: 156px;
      }
      .card-text {
        color: ${(props) => props.theme.whiteColor};
      }
    }
  }
  ${breakpoints.medium} {
    flex-direction: column;
    gap: 30px;
  }
  ${breakpoints.small} {
    margin-top: 40px;

    .card {
      padding: 0px 20px;
      width: 320px;
      height: 200px;
      .card-text {
        h5 {
          font-size: 0.6875rem;
        }
        h2 {
          padding: 15px 0;
          font-weight: 400;
          font-size: 1.18rem;
          line-height: 27px;
          span {
            font-weight: 700;
            font-size: 1.32rem;
          }
        }
        p {
          font-weight: 400;
          font-size: 0.6875rem;
          span {
            font-weight: 700;
          }
        }
      }

      &.one {
        img {
          width: 100px;
          height: 130px;
        }
      }
      &.two {
        img {
          width: 86px;
          height: 86px;
        }
      }
    }
  }
`;
