import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <p>&copy; Codeit - 2024</p>
      </LeftSection>
      <LinksContainer>
        <LinkItem href="/privacy">Privacy Policy</LinkItem>
        <LinkItem href="/faq">FAQ</LinkItem>
      </LinksContainer>
      <SocialIcons>
        <IconLink
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.imgur.com/72YKihL.png"
            alt="Facebook"
            style={{ width: "20px" }}
          />
        </IconLink>
        <IconLink
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.imgur.com/EjCQMDP.png"
            alt="Twitter"
            style={{ width: "20px" }}
          />
        </IconLink>
        <IconLink
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.imgur.com/7NDJvBu.png"
            alt="YouTube"
            style={{ width: "20px" }}
          />
        </IconLink>
        <IconLink
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.imgur.com/LkNjYZv.png"
            alt="Instagram"
            style={{ width: "20px" }}
          />
        </IconLink>
      </SocialIcons>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 12.5rem;
  background: #111827;
  color: #9ca3af;
  height: 160px;
  /* margin-top: 140px; */

  @media (max-width: 1199px) and (min-width: 744px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 743px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 20px;
    height: auto;
    gap: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex: 1;
`;

const LinkItem = styled.a`
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    color: #ffffff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #9ca3af;
  font-size: 1.25rem;

  &:hover {
    color: #ffffff;
  }
`;

export default Footer;
