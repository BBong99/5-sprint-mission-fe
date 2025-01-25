import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/registration"); // 상품 등록 페이지로 이동
  };

  return <AddButton onClick={handleAddProduct}>상품 등록하기</AddButton>;
};

const AddButton = styled.button`
  width: 133px;
  height: 42px;
  padding: 12px 23px;
  background-color: #3692ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 26px;
  color: #f3f4f6;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #2878d6;
  }
`;

export default AddProduct;
