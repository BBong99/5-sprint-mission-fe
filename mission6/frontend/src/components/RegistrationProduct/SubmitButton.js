import React from "react";
import styled from "styled-components";

// 제출 버튼 컴포넌트: 활성화/비활성화 상태에 따라 스타일 변경
const SubmitButton = ({ type, text, disabled }) => {
  return (
    <Button type={type} disabled={disabled}>
      {text}
    </Button>
  );
};

const Button = styled.button`
  width: 100%;
  width: 74px;
  height: 42px;
  padding: 12px 23px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default SubmitButton;
