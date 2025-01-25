import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 12.5rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;

  @media (max-width: 1199px) and (min-width: 744px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 743px) {
    flex-direction: row;
    align-items: center;
    padding: 1rem 2rem;
    gap: 0.5rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  h1 {
    font-size: 1.5rem;
    color: #007bff;
    font-weight: bold;
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #4b5563;
    font-weight: 700;
    font-size: clamp(1vw, 18px);
    line-height: 26px;
    &:hover {
      color: #3692ff;
    }
  }

  .active {
    color: #3692ff; /* ✅ 중고마켓 활성화 시 색상 변경 */
  }

  @media (max-width: 743px) {
    gap: 1rem;
  }
`;

const LogoNavContainer = styled.div`
  gap: 39px;
  display: flex;
  align-items: center;

  @media (max-width: 1199px) and (min-width: 744px) {
    gap: 35px;
  }

  @media (max-width: 743px) {
    gap: 8px;
  }
`;

const LoginButton = styled.button`
  background-color: #3692ff;
  color: #f3f4f6;
  border: none;
  padding: 12px 23px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 743px) {
    width: auto;
  }
`;

const Header = () => {
  const location = useLocation(); //  현재 경로 확인

  return (
    <HeaderContainer>
      <LogoNavContainer>
        <LogoContainer>
          <a href="/">
            <img src="https://i.imgur.com/iUEWHTG.png" alt="Logo" />
          </a>
        </LogoContainer>

        <Nav>
          <Link
            to="/freeboard"
            className={location.pathname === "/freeboard" ? "active" : ""}
          >
            자유게시판
          </Link>
          <Link
            to="/items"
            className={location.pathname === "/items" ? "active" : ""}
          >
            중고마켓
          </Link>
        </Nav>
      </LogoNavContainer>
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default Header;
