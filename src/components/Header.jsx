import React, { useState } from 'react';
import styled from 'styled-components';
import banner1Img from '../assets/images/banner1_coupon.png';
import banner2Img from '../assets/images/banner2_coupon.png';
import close from '../assets/images/banner_close.png';
import logoSymbol from '../assets/images/logo_symbol.png';

import { breakpoints } from '../styles/theme';

const Header = () => {
  const [showAd, setShowAd] = useState(true);

  return (
    <header>
      {showAd && (
        <Banner>
          <div className="banner banner1">
            <img src={banner1Img} alt="banner1" />
            <span>
              미몽 업데이트 혜택! <span className="bold">1개월 무료이용권</span> 증정!
            </span>
          </div>
          <div className="banner banner2">
            <img src={banner2Img} alt="banner2" />
            <span>
              미몽 구독 가입 시, <span className="bold">무제한 모델매칭 유료 영상</span> 제공!
            </span>
            <div className="close" onClick={() => setShowAd(false)}>
              <img src={close} alt="close" />
            </div>
          </div>
        </Banner>
      )}
      <Nav>
        <div>
          <img src={logoSymbol} alt="memong logo" />
          <p className="pc_logo_title">
            Mee<span>mong </span>
            <span className="ko">미몽</span>
          </p>
          <p className="mobile_logo_title">
            MEE<span>MONG</span>
          </p>
        </div>
        <button>무료로 시작하기</button>
      </Nav>
    </header>
  );
};
export default Header;

const Banner = styled.div`
  ${breakpoints.medium} {
    display: none;
  }
  display: flex;
  width: 100%;
  height: 65px;
  .banner {
    display: flex;
    align-items: center;
    flex-grow: 1;
    img {
      max-height: 65px;
      align-self: flex-end;
      margin-right: 20px;
    }
    span {
      font-size: 16px;
      font-weight: 500;
      .bold {
        font-weight: 700;
      }
    }
  }
  .banner1 {
    background-color: ${(props) => props.theme.adBanner1Color};
    justify-content: flex-end;
    padding-right: 70px;

    span {
      color: ${(props) => props.theme.banner1BlueTextColor};
      .bold {
        color: ${(props) => props.theme.whiteColor};
      }
    }
  }
  .banner2 {
    padding-left: 70px;
    background-color: ${(props) => props.theme.adBanner2Color};
    span {
      color: ${(props) => props.theme.whiteColor};
      .bold {
        color: ${(props) => props.theme.banner1YellowTextColor};
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      right: 5px;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

const Nav = styled.nav`
  margin: 0px 28rem;
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  ${breakpoints.medium} {
    margin: 0px 4rem;
  }
  ${breakpoints.small} {
    margin: 0px 20px;
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 34px;
      height: 34px;
      margin-right: 3px;
    }
    p.pc_logo_title {
      font-weight: 800;
      font-size: 26px;
      span {
        font-size: 26px;
        font-weight: 300;
        &.ko {
          font-weight: 700;
          font-size: 24px;
        }
      }
      ${breakpoints.medium} {
        display: block;

        ${breakpoints.small} {
          display: none;
          font-size: 16px;
        }
      }
    }

    p.mobile_logo_title {
      display: none;
      ${breakpoints.small} {
        display: block;
        font-weight: 900;
        font-size: 24px;
        span {
          font-size: 24px;
          font-weight: 500;
        }
      }
    }
  }

  button {
    padding: 10px;
    height: 48px;
    background-color: ${(props) => props.theme.purpleBtnColor};
    color: ${(props) => props.theme.whiteColor};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;

    ${breakpoints.small} {
      height: 30px;
      font-size: 9px;
    }
  }
`;
