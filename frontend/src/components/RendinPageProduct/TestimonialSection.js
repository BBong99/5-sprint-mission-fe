import React from "react";
import styled from "styled-components";

// 서비스의 신뢰성을 강조하는 섹션 컴포넌트
const TestimonialSection = () => {
  return (
    <CardContainer>
      <TextContainer>
        <Title>
          믿을 수 있는 <br />
          판다마켓 중고 거래
        </Title>
      </TextContainer>
      <Image src="https://i.imgur.com/FWurokO.png" alt="Trustworthy Trading" />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 540px;
  background-color: #cfe5ff;

  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const Image = styled.img`
  max-width: 746px;
  margin-left: 69px;
  object-fit: contain;

  @media (max-width: 1199px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 217px;
  }

  @media (max-width: 743px) {
    margin-top: 131px;
  }
`;

const TextContainer = styled.div`
  text-align: left;

  @media (max-width: 743px) {
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 172.5px;

  @media (max-width: 1199px) {
    margin-top: 100px;
    margin-bottom: 0px;
  }
`;

export default TestimonialSection;
