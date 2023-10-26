import React from 'react';
import styled from 'styled-components';

import Note from '../assets/images/image_note.png';
import Wand from '../assets/images/image_wand.png';
import Bulb from '../assets/images/image_bulb.png';

import { breakpoints } from '../styles/theme';

const NewWorldSection = () => {
  return (
    <Section>
      <Box className="one">
        <img src={Note} alt="note img" />
        <p className="comment">
          노쇼 없이 <br className="mo" />
          계약에서 시술까지
        </p>
        <p className="point">
          97<span>%</span>
        </p>
      </Box>
      <Box className="two">
        <img src={Wand} alt="wand img" />
        <p className="comment">
          회원가입에서 <br className="mo" />
          모델과 계약까지
        </p>
        <p className="point">
          1<span>분</span>
        </p>
      </Box>
      <Box className="three">
        <img src={Bulb} alt="bulb img" />
        <h2>
          헤어 모델 매칭 플랫폼, <br className="mo de" />
          이전에 경험해보지 못한 <br className="mo" />
          <span className="grd-text">새로운 세계</span>를 만나다
        </h2>
      </Box>
    </Section>
  );
};
export default NewWorldSection;

const Section = styled.section`
  .mo {
    ${(props) => props.theme.aboveMobile}
  }
  .de {
    ${(props) => props.theme.aboveDevice}
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainH1GrayColor};
  padding: 150px 0;
  gap: 150px;
  div {
    width: 70%;
    text-align: center;
  }
  ${breakpoints.medium} {
    padding: 100px 0;
    gap: 100px;
  }
  ${breakpoints.small} {
    padding: 80px 0;
    gap: 80px;
    div {
      width: 100%;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 40px;
    ${breakpoints.medium} {
      width: 5rem;
      height: 5rem;
      margin-bottom: 20px;
    }
    ${breakpoints.small} {
      width: 2rem;
      height: 2rem;
      margin-bottom: 15px;
    }
  }

  p {
    color: ${(props) => props.theme.StoryGrayColor};
    font-weight: 900;
    &.comment {
      line-height: 70px;
      font-size: 3.75rem;
      margin-bottom: 10px;
      ${breakpoints.medium} {
        line-height: 50px;
        font-size: 2.3rem;
      }
      ${breakpoints.small} {
        line-height: 30px;
        font-size: 1.25rem;
      }
    }
    &.point {
      font-size: 5.6rem;
      font-weight: 900;
      ${(props) => props.theme.grdText}
      ${breakpoints.medium} {
        font-size: 3.6rem;
      }
      ${breakpoints.small} {
        font-size: 1.5rem;
      }
      span {
        font-weight: 500;
        font-size: 3rem;
        color: ${(props) => props.theme.whiteColor};
        ${breakpoints.medium} {
          font-size: 1.8rem;
        }
        ${breakpoints.small} {
          font-size: 1rem;
        }
      }
    }
  }

  h2 {
    font-weight: 900;
    font-size: 5.6rem;
    color: ${(props) => props.theme.StoryGrayColor};
    line-height: 150px;
    .grd-text {
      font-size: 6.2rem;
      font-weight: 900;
      ${(props) => props.theme.grdText}
    }

    ${breakpoints.medium} {
      font-size: 3rem;
      line-height: 60px;
      .grd-text {
        font-size: 3rem;
      }
    }

    ${breakpoints.small} {
      font-weight: 600;
      font-size: 1.75rem;
      color: ${(props) => props.theme.whiteColor};
      line-height: 42px;
      .grd-text {
        font-weight: 800;
        font-size: 1.75rem;
      }
    }
  }
`;
