import React from "react";
import ProductManager from "../components/ItemsProduct/ProductManager";
import styled from "styled-components";

// 중고마켓 상품 목록 페이지
const Items = () => {
  return (
    <Container>
      <ProductManager />
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default Items;
