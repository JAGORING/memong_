import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/theme';
import Phone_1 from '../assets/images/story_phone1.png';
import Phone_2 from '../assets/images/story_phone2.png';

import StackUpIcon from '../assets/images/icons/icon-stack-up-square-mono.png';
import UserIcon from '../assets/images/icons//icon-user-check-mono.png';
import CoinIcon from '../assets/images/icons/icon-coin-mono.png';
import DocumemtIcon from '../assets/images/icons/icon-document-mono.png';

const StorySection = () => {
  return (
    <SectionBox>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="story-title">
          <h1>세상에 하나뿐인 브랜드</h1>
          <h1>
            <span className="grd_text">자신만의 이야기</span>를 새기다.
          </h1>
        </div>
        <div className="story-box">
          <div className="text-group">
            <h4>나만의 스토리</h4>
            <h4>미몽으로 포트폴리오를</h4>
            <h4>만드는 가장 좋은 방법</h4>
            <p>모델을 구하고, 초상권 계약, 포트폴리오 관리와 모델 관리까지 이 모든 것을 미몽 앱 한 화면에서.</p>
          </div>
          <div className="phone-imgs">
            <div className="front">
              <img src={Phone_1} alt="story Phone 1" />
            </div>
            <div className="back">
              <img src={Phone_2} alt="story Phone 2" />
            </div>
          </div>
        </div>
        <div className="story-points">
          {pointDatas.map((point) => (
            <div className="point">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={point.icon} alt={point.title} />
                <h5>{point.title}</h5>
              </div>
              <p>{point.desc1}</p>
              <p>{point.desc2}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBox>
  );
};
export default StorySection;

const SectionBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  ${breakpoints.medium} {
    padding: 80px 10px;
  }
  .story-title {
    width: 100%;
    margin-left: -80px;

    ${breakpoints.medium} {
      width: 100%;
      padding-left: 1rem;
      margin-left: 0px;
    }
    ${breakpoints.small} {
      padding-left: 10px;
      line-height: 30px;
    }
    h1 {
      font-weight: 900;
      font-size: 3.75rem;
      color: ${(props) => props.theme.StoryGrayColor};
      ${breakpoints.medium} {
        font-size: 2rem;
      }
      ${breakpoints.small} {
        font-size: 1.625rem;
      }
    }
    h1:nth-child(2) {
      color: ${(props) => props.theme.mainH1GrayColor};
    }
    .grd_text {
      ${(props) => props.theme.grdText}}
    }
  }

  .story-box {
    margin-top: 60px;
    background-color: ${(props) => props.theme.StoryBoxBackgroudColor};
    border-radius: 22px;
    padding: 40px 30px 0;
    display: flex;
    flex-direction: row;
    ${breakpoints.small} {

    margin-top: 40px;
      min-height: 480px;
      flex-direction: column;
      align-items:center;
      justify-content:space-between;
    }
    
    align-items: start;
    overflow: hidden;
    .text-group {
      width:60%;
      padding-bottom: 30px;
      ${breakpoints.small} {
      padding-bottom: 0;
        width:100%;
      }
      h4 {
        font-weight: 800;
        font-size: 3rem;
        color: ${(props) => props.theme.StoryGray2Color};
        &:first-of-type {
          margin-bottom: 25px;
        }
        &:not(:first-of-type) {
          color: ${(props) => props.theme.mainH1GrayColor};
          margin-top: 10px;
          ${breakpoints.medium} {
            margin-top: 5px;
          }
        }
        ${breakpoints.medium} {
          font-size: 1.6rem;
        }
        ${breakpoints.small} {
          font-size: 1.6rem;
          &:first-of-type {
            margin-bottom: 10px;
          }
        }
      }
      p {
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 35px;
        color: ${(props) => props.theme.StoryGray3Color};
        margin-top: 35px;
        ${breakpoints.medium} {
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
        ${breakpoints.small} {
        margin-top: 15px;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
    .phone-imgs {
     width:30%;
     height: 100%;
      position: relative;
      transform: translateX(-60px);
      display: flex;
      align-items: flex-end; 
      justify-content:center;
      ${breakpoints.small} {
        width:100%;
        height:300px;
      }
      .back,
      .front {
        position: absolute;
        top:0;
        left: 0;
        bottom:0;
        img {
          width: 248px;
          height: 300px;
          ${breakpoints.small} {
            min-width: 140px;
            min-height: 300px;
          }
        }
      }
      .back {
        transform: translateX(100px);
        ${breakpoints.medium} {
          transform: translateX(60px);
        }
      }
      .front {
        transform: translateX(200px);
        ${breakpoints.medium} {
          transform: translateX(160px);
        }
      }
    }
  }

  .story-points {
    margin-top: 65px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    ${breakpoints.medium} {
      grid-gap: 35px;
    }
    ${breakpoints.small} {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;
    padding: 0 12px;
    }
    .point {
      h5 {
        display: inline-block;
        font-weight: 900;
        font-size: 2rem;
       ${(props) => props.theme.grdText}}
        ${breakpoints.medium} {
          font-size: 1.2rem;
        }
        ${breakpoints.small} {
          font-size: 1.3rem;
        }
      }
      p {
        font-weight: 500;
        font-size: 1.3rem;
        color: ${(props) => props.theme.mainH4GrayColor};
        margin-top: 8px;
        ${breakpoints.medium} {
          font-size: 1.1rem;
        }
        ${breakpoints.small} {
          font-size: 1rem;
        }
      }
      p:first-of-type {
        margin-top: 20px;
      }
    }
  }
`;

const pointDatas = [
  {
    title: '포트폴리오로 커리어 관리',
    icon: StackUpIcon,
    desc1: '미몽 하나로 포트폴리오 관리는 끝!  이직할 때도 끄떡없어요',
    desc2: '시술한 사진을 올려 홍보와 셀프 브랜딩은 덤으로 가져가세요',
  },
  {
    title: '최적의 헤어모델 매칭',
    icon: UserIcon,
    desc1: '선택한 시술 종류에 맞추어 모델을 추천받아요',
    desc2: '채팅, 계약 이력화면에서 시술한 모델을 계속 만나요',
  },
  {
    title: '쉽고 편한 모델 제안',
    icon: CoinIcon,
    desc1: '슬라이딩 하나로 모델에게 견적 비용을 보냅니다',
    desc2: '원하는 비용으로 흥정 할 수 있어요',
  },
  {
    title: '문제 없이 초상권 계약',
    icon: DocumemtIcon,
    desc1: '빠르게 모델의 서명으로 초상권 계약서가 체결됩니다',
    desc2: '해당 모델의 계약서도 안전하게 보관되어요',
  },
];
