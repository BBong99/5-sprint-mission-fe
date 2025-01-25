import React from "react";
import RegistrationManager from "../components/RegistrationProduct/RegistrationManager";
import styled from "styled-components";

// 상품 등록 페이지
const Registration = () => {
  return (
    <Container>
      <RegistrationManager />
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 26px;
  border-radius: 8px;

  @media (max-width: 1199px) and (min-width: 744px) {
    width: 90%;
  }

  @media (max-width: 743px) {
    width: 95%;
  }
`;

export default Registration;
