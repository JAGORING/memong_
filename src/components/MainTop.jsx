import React from 'react';
import styled from 'styled-components';

import GoogleBadge from '../assets/images/google-play-badge.png';
import AppStoreBadge from '../assets/images/app-store-badge.png';

import BrandDemi from '../assets/images/brands/brand_demi.png';
import BrandGty from '../assets/images/brands/brand_gty.png';
import BrandTory from '../assets/images/brands/brand_toryhair.png';
import BrandPalan from '../assets/images/brands/brand_palanhair.png';
import BrandGrowing from '../assets/images/brands/brand_growing.png';
import BrandAura from '../assets/images/brands/brand_aura.png';

import { breakpoints } from '../styles/theme';

const MainTop = () => {
  return (
    <Section>
      <h1>헤어모델 매칭 </h1>
      <h1>미몽과 함께 시작하세요</h1>
      <h4>당신의 상상력과 전문성을 담아보세요</h4>
      <div className="badges-wrap">
        <div className="google">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <img src={GoogleBadge} alt="Google Play Badge" />
    </a>
          


        </div>
        <div className="app-store">
          <img src={AppStoreBadge} alt="Download on the App Store" />
        </div>
      </div>
      <div className="memong-brands">
        <p>미몽은 주요 헤어 브랜드와 공식 파트너십을 맺고 있습니다.</p>
        <div className="brand-box-wrap">
          <div className="brand-box">
            <img src={BrandDemi} alt="Brand Demi" />
          </div>
          <div className="brand-box">
            <img src={BrandGty} alt="Brand GTY" />
          </div>
          <div className="brand-box">
            <img src={BrandTory} alt="Brand Tory Hair" />
          </div>
          <div className="brand-box">
            <img src={BrandPalan} alt="Brand Palan Hair" />
          </div>
          <div className="brand-box">
            <img src={BrandGrowing} alt="Brand Growing" />
          </div>
          <div className="brand-box">
            <img src={BrandAura} alt="Brand Aura" />
          </div>
        </div>
      </div>
    </Section>
  );
};
export default MainTop;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  ${breakpoints.small} {
    padding-top: 20px;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    font-size: 100px;
    color: ${(props) => props.theme.mainH1GrayColor};
    margin-top: 15px;
    ${breakpoints.medium} {
      font-size: 2.5rem;
    }
    ${breakpoints.small} {
      font-size: 30px;
    }
  }
  h4 {
    font-weight: 500;
    font-size: 1.9rem;
    color: ${(props) => props.theme.mainH4GrayColor};
    margin-top: 40px;
    ${breakpoints.medium} {
      font-size: 1.3rem;
    }
    ${breakpoints.small} {
      font-size: 14px;
    }
  }
  .badges-wrap {
    display: flex;
    gap: 25px;
    margin-top: 40px;

    .google {
      img {
        width: 200px;
        height: 60px;
        ${breakpoints.small} {
          width: 135px;
          height: 40px;
        }
      }
    }
    .app-store {
      img {
        width: 180px;
        height: 60px;
        ${breakpoints.small} {
          width: 120px;
          height: 40px;
        }
      }
    }
  }
  .memong-brands {
    margin-top: 90px;
    p {
      text-align: center;
      font-weight: 300;
      font-size: 1.8rem;
      color: ${(props) => props.theme.mainH4GrayColor};
      ${breakpoints.medium} {
        font-size: 1.2rem;
      }
      ${breakpoints.small} {
        font-size: 14px;
      }
    }
    .brand-box-wrap {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      gap: 15px;
      .brand-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-basis: 16.66%;
        width: 185px;
        height: 80px;
        box-shadow: 0px 3px 20px 0px #00000012;
        border-radius: 6px;
        text-align: center;
      }

      ${breakpoints.medium} {
        gap: 8px;
        flex-wrap: wrap;
        .brand-box {
          min-width: 100px;
          min-height: 45px;
          flex-basis: 30%;
        }
      }
      ${breakpoints.small} {
        .brand-box img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
`;
