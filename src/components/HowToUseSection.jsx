import React from 'react';
import styled from 'styled-components';

import Coin from '../assets/images/Coin.png';
import Gift from '../assets/images/gift.png';
import Bulb from '../assets/images/bulb.png';

import { breakpoints } from '../styles/theme';

const HowToUseSection = () => {
  return (
    <Section className="flex-column">
      <Title className="flex-row">
        <img src={Coin} alt="title coin icon" /> <h2>미몽을 더욱 더 잘 활용하는 법</h2>
      </Title>
      <div className="plan-cards-wrap">
        <PlanCard className="free">
          <div className="content">
            <div className="title">
              <img src={Gift} alt="free Gift icon" /> <h4>무료 플랜</h4>
            </div>
            <p className="sub-title">구독 없이도 미몽을 이용 할 수 있어요</p>
            <ul className="plan-list">
              <li>채팅 기능</li>
              <li>계약 전송 및 관리</li>
              <li>무료 미디어 링크, 영상 콘텐츠 제공</li>
              <li>채널톡으로 언제, 어디서든 고객 지원</li>
            </ul>
          </div>
          <p className="price">무료</p>
        </PlanCard>

        <PlanCard className="pay">
          <div className="content">
            <div className="title">
              <img src={Bulb} alt="pay Bulb icon" /> <h4>유료 플랜</h4>
            </div>
            <p className="sub-title">구독해서 단골을 효과적으로 관리하세요</p>

            <ul className="plan-list">
              <li>채팅 기능</li>
              <li>계약 전송 및 관리</li>
              <li>무료 미디어 링크, 영상 콘텐츠 제공</li>
              <li>채널톡으로 언제, 어디서든 고객 지원</li>
            </ul>

            <ul className="plan-list designer">
              <span>디자이너</span>
              <li>포트폴리오 100개 이상 업로드 및 관리</li>
              <li>유료 미디어 링크, 영상 콘텐츠를 무제한 확인 가능</li>
            </ul>
          </div>
          <p className="price">
            9,500 <span>원</span>
          </p>
        </PlanCard>
      </div>
    </Section>
  );
};
export default HowToUseSection;

const Section = styled.section`
  background: linear-gradient(
    116.1deg,
    #ffffff 26.19%,
    rgba(113, 163, 255, 0.7) 77.74%,
    rgba(124, 100, 250, 0.8) 86.97%
  );

  padding: 100px 0 200px;

  .plan-cards-wrap {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  ${breakpoints.medium} {
    padding: 70px;
    .plan-cards-wrap {
      width: 100%;
      flex-direction: column;
    }
  }
  ${breakpoints.small} {
    padding: 40px;
  }
`;

const Title = styled.div`
  gap: 15px;
  margin-bottom: 80px;
  img {
    width: 3rem;
    height: 3rem;
  }
  h2 {
    font-weight: 700;
    font-size: 3.75rem;
    color: ${(props) => props.theme.CarouselCardColor};
  }
  ${breakpoints.medium} {
    margin-bottom: 60px;
    img {
      width: 2.25rem;
      height: 2.25rem;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
  ${breakpoints.small} {
    margin-bottom: 40px;
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    h2 {
      font-size: 1.25rem;
    }
  }
`;
const PlanCard = styled.div`
  box-shadow: 6px 3px 20px 0px #00000014;

  width: 580px;
  height: 454px;
  border-radius: 16px;

  background-color: ${(props) => props.theme.whiteColor};
  .content {
    padding: 30px 40px;

    .title {
      img {
        width: 2rem;
        height: 2rem;
      }
      h4 {
        background: linear-gradient(91.18deg, #71a3ff 10%, #7c64fa 20%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 900;
        font-size: 2.25rem;
      }
    }

    .sub-title {
      color: ${(props) => props.theme.mainH4GrayColor};
      font-weight: 700;
      font-size: 1.25rem;
      margin-top: 15px;
    }

    .plan-list {
      padding: 0 20px;
      color: ${(props) => props.theme.mainH4GrayColor};
      list-style: disc;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 20px;
      margin-top: 30px;

      &.designer {
        color: ${(props) => props.theme.mainH1GrayColor};
        font-weight: 500;
        font-size: 1rem;
        line-height: 24px;
        span {
          margin-left: -20px;
          color: ${(props) => props.theme.mainH1GrayColor};
          font-weight: 700;
          font-size: 1.125rem;
        }
      }
    }
  }
  position: relative;

  .price {
    color: ${(props) => props.theme.mainH1GrayColor};
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 2px solid #dedbdb;
    text-align: right;
    padding: 15px 30px 20px 0;
    font-weight: 900;
    font-size: 1.75rem;
    span {
      font-weight: 500;
      font-size: 1rem;
      color: #979797;
    }
  }

  ${breakpoints.medium} {
    width: 580px;
    height: 450px;

    .title {
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      h4 {
        font-size: 1.75rem;
      }
      .sub-title {
        font-size: 1rem;
      }
    }
    .plan-list {
      font-size: 0.7rem;

      &.designer {
        font-weight: 400;
        font-size: 0.75rem;
        span {
          font-size: 0.875rem;
        }
      }
    }
    .price {
      padding: 15px 20px;
      font-size: 1.4rem;
      span {
        font-size: 0.75rem;
      }
    }
  }
  ${breakpoints.small} {
    width: 100%;
    max-width: 580px;
    min-height: 280px;
    max-height: 300px;
    border-radius: 9px;

    .content {
      padding: 20px 30px;

      .title {
        img {
          width: 1.1rem;
          height: 1.1rem;
        }
        h4 {
          font-size: 1.25rem;
        }
        .sub-title {
          font-size: 0.75rem;
        }
      }
      .plan-list {
        padding: 0 20px;
        font-weight: 400;
        font-size: 0.56rem;
        line-height: 14px;
        margin-top: 10px;

        &.designer {
          font-weight: 400;
          font-size: 0.48rem;
          line-height: 11px;
          span {
            margin-left: -20px;
            font-size: 0.625rem;
          }
        }
      }
    }
    .price {
      border-top: 1.1px solid #dedbdb;
      padding: 15px;
      font-size: 1rem;
      span {
        font-weight: 400;
        font-size: 0.5rem;
        color: #9ea8aa;
      }
    }
  }
`;
