import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/theme';

import Path from '../assets/images/path.png';
import Instar from '../assets/images/instar.png';
import Blog from '../assets/images/blog.png';
const Footer = () => {
  return (
    <>
      <PcFooter className="column">
        <div className="contacts-wrap">
          <div className="contacts">
            <div className="contact-infos">
              <div className="contact-info">
                <h2 className="info-title">고객센터</h2>
                <p className="info-number">02-543-6686</p>
                <div className="info-item">
                  <span>가능시간</span>
                  <p>평일 09:00 ~ 18:00 / 점심시간 12:00~13:30</p>
                </div>
                <div className="info-item">
                  <span>대표 메일</span>
                  <p className="blue-text">hello@meemong.com</p>
                </div>
                <div className="info-item">
                  <span>고객센터</span>
                  <p className="blue-text">02-543-6686</p>
                </div>
              </div>

              <div className="contact-btns">
                <div className="arrow-text">
                  FAQ
                  <img src={Path} alt="화살표" />
                </div>
                <div className="arrow-text">
                  1:1 문의
                  <img src={Path} alt="화살표" />
                </div>
                <div className="arrow-text">
                  공지사항
                  <img src={Path} alt="화살표" />
                </div>
              </div>
            </div>

            <div className="contact-nav">
              <ul>
                <span>미몽</span>
                <li>미몽서비스 소개</li>
                <li>광고안내</li>
              </ul>
              <ul>
                <span>다운로드</span>
                <li>Android</li>
                <li>iOS</li>
              </ul>
              <ul>
                <span>고객센터</span>
                <li>공지사항</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="contacts2">
            <div className="pages">
              <div className="services flex-row">
                <p>서비스 이용약관</p>
                <Divider />
                <p>개인정보 보호 및 처리방침</p>
              </div>
              <div className="links">
                <img src={Instar} alt="Instar" width={24} height={24} />
                <img src={Blog} alt="Blog" width={26} height={26} />
              </div>
            </div>
            <div className="contact-infos">
              <div className="info-list">
                <div className="flex-row">
                  미몽컴퍼니
                  <Divider />
                  <span>주소</span>서울시 강남구 논현동 78-21, 102호 미몽컴퍼니
                  <Divider />
                  <span>대표이사</span>유주호
                </div>
                <div className="flex-row">
                  <span>사업자 등록번호</span>370-87-02039 <span className="blue-text">사업자정보확인</span>
                  <Divider />
                  <span>개인정보관리 책임자</span>장혜진
                </div>
              </div>

              <div className="copyright">Copyright ©2022 meemong Company All Rights Reserved.</div>
            </div>
          </div>
        </div>
      </PcFooter>

      <MoFooter>
        <div className="contacts-wrap">
          <div className="contact-infos">
            <div className="contact-info">
              <h2 className="info-title">고객센터</h2>
              <p className="info-number">02-543-6686</p>
              <div className="info-item">
                <span>가능시간</span>
                <p>평일 09:00 ~ 18:00 / 점심시간 12:00~13:30</p>
              </div>
              <div className="info-item">
                <span>대표 메일</span>
                <p className="blue-text">hello@meemong.com</p>
              </div>
              <div className="info-item">
                <span>고객센터</span>
                <p className="blue-text">02-543-6686</p>
              </div>
            </div>

            <div className="contact-btns">
              <div>FAQ</div>
              <div>1:1 문의</div>
              <div>공지사항</div>
            </div>
          </div>

          <div className="memong-infos">
            <div className="info-list">
              <h5>미몽컴퍼니 사업자 정보</h5>
              <div className="info-item">
                <span>주소</span>
                <p>서울시 강남구 논현동 78-21, 102호 미몽컴퍼니</p>
              </div>
              <div className="info-item">
                <span>대표이사</span>
                <p>유주호</p>
              </div>
              <div className="info-item">
                <span>사업자 등록번호</span>
                <p>
                  370-87-02039 <span className="blue-text">사업자정보확인</span>
                </p>
              </div>
              <div className="info-item">
                <span>
                  개인정보관리
                  <br /> 책임자
                </span>
                <p>장혜진</p>
              </div>
            </div>
            <div className="services">
              <p>서비스 이용약관</p>
              <p>개인정보 보호 및 처리방침</p>
            </div>
            <div className="copyright">Copyright ©2022 meemong Company All Rights Reserved.</div>
          </div>
        </div>
        <div className="footer-box">
          <div className="start-btn">무료로 시작하기</div>
        </div>
      </MoFooter>
    </>
  );
};
export default Footer;

const PcFooter = styled.footer`
  background-color: #eaeded;
padding-bottom: 150px;
  .contacts-wrap {
    max-width: 1000px;
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;

    .contacts {
      width:100%;
      padding: 40px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: start;

      .contact-infos {
        .contact-info {
          color: #303030;
          .info-title {
            font-weight: 500;
            font-size: 1rem;
            margin-bottom: 25px;
          }
          .info-number {
            font-weight: 700;
            font-size: 2rem;
            margin-bottom: 20px;
          }
          .info-item {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 0.82rem;
            &:not(:last-of-type){
              margin-bottom: 10px;: 
            }
            span {
              opacity: .4;
              display: inline-block;
              width: 50px;
              margin-right: 20px;
            }
            .blue-text {
              cursor: pointer;
              color: #1252f4;
            }
          }
        }
        .contact-btns {
          margin: 30px 0; 
          display: flex;
          align-items: center;
.arrow-text {
  cursor: pointer;
  padding : 10px 20px;
  font-weight: 400;
  font-size: 0.82rem;
  color:#303030;
  img{
    margin-left: 10px;
    width: 4px;
    height: 8px;
  }
}
}
}
.contact-nav {
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  color: #303030;
  
  span {
    display:inline-block;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 15px;
  }
  li{
   font-weight: 400;
    font-size: 0.82rem;
    &:not(:last-of-type){
      margin-bottom: 10px;
    }
  }
}

}
.contacts2 {
  border-top: 2px solid rgba(128, 136, 138, 0.1);
  width: 100%;
  padding-top: 30px;
  .pages {
    display: flex;
    align-items: start;
    justify-content: space-between;

    .services {
      margin-bottom: 20px;
      p{
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
        color: #333333;
      }
    }
    .links {
       img{
        cursor:pointer;
        &:last-of-type{
        margin-left: 15px;}
      }
    }
  }
  .contact-infos {
    .info-list {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap:5px;
    font-weight: 400;
    font-size: 0.82rem;
    color: #303030;
    span {
      margin-right: 10px;
    opacity:0.4;
    &.blue-text {
    cursor: pointer;
    opacity:1;
    color: #1252F4;
  text-decoration: underline;
  margin-left: 5px;
  margin-right: 0px;

    }
    }
    }
    .copyright {
      margin-top: 30px;
    }
  }
}
  }
  ${breakpoints.small} {
    display: none;
  }
`;
const Divider = styled.div`
  width: 1px;
  height: 12px;
  opacity: 0.3;
  background: #808080;
  margin: 0 10px;
`;
const MoFooter = styled.footer`
  display: none;
  ${breakpoints.small} {
    display: block;
    background-color: #eaeded;

    .contacts-wrap {
      padding: 30px 20px 40px;
      .contact-infos {
        color: #303535;
        .contact-info {
          .info-title {
            font-weight: 500;
            font-size: 0.875rem;
            margin-bottom: 10px;
          }
          .info-number {
            font-weight: 700;
            font-size: 1.375rem;
            margin-bottom: 15px;
          }
          .info-item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-weight: 400;
            font-size: 0.75rem;

            &:not(:last-of-type) {
              margin-bottom: 10px;
            }
            span {
              width: 80px;
              display: inline-block;
              opacity: 0.4;
              margin-right: 20px;
            }
            .blue-text {
              color: #1252f4;
            }
          }
        }
        .contact-btns {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          div {
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 400;
            font-size: 0.75rem;
            background-color: #fff;
            width: 100px;
            height: 26px;
            border-radius: 5px;
          }
        }
      }

      .memong-infos {
        margin-top: 30px;
        h5 {
          font-weight: 500;
          font-size: 0.875rem;
          color: #303535;
          margin-bottom: 20px;
        }
        .info-item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-weight: 400;
          font-size: 0.75rem;

          &:not(:last-of-type) {
            margin-bottom: 10px;
          }
          span {
            width: 80px;
            display: inline-block;
            opacity: 0.4;
            margin-right: 20px;
          }
          .blue-text {
            opacity: 1;
            color: #1252f4;
            text-decoration: underline;
          }
        }
      }
      .services {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        p {
          color: #303535;
          font-weight: 500;
          font-size: 0.75rem;
        }
      }
      .copyright {
        margin-top: 5px;
        color: #303535;
        opacity: 0.4;
        font-weight: 400;
        font-size: 0.625rem;
      }
    }
  }

  .footer-box {
    width: 100%;
    height: 80px;
    box-shadow: -2px 0px 20px 0px #0000000f;
    display: flex;
    align-items: center;
    justify-content: center;

    .start-btn {
      width: 320px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #6840f2;
      border-radius: 5px;

      color: #ffffff;
      font-weight: 700;
      font-size: 1.125rem;
    }
  }
`;
