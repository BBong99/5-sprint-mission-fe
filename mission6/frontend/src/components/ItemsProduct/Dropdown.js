import React, { useState } from "react";
import styled from "styled-components";

// 정렬 옵션을 선택할 수 있는 UI
const Dropdown = ({ onSortChange }) => {
  // 드롭다운 메뉴의 열림/닫힘 상태
  const [isOpen, setIsOpen] = useState(false);
  // 현재 선택된 정렬 옵션
  const [selectedValue, setSelectedValue] = useState("최신순");

  // 드롭다운 메뉴 열기/닫기 토글
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // 정렬 옵션 선택 시 실행되는 핸들러
  const handleSelect = (value) => {
    setSelectedValue(value);
    onSortChange(value); // 부모 컴포넌트에 선택된 값 전달
    setIsOpen(false); // 선택 후 드롭다운 메뉴 닫기
  };

  return (
    <DropdownContainer>
      <SelectedItem onClick={handleToggle}>{selectedValue}</SelectedItem>
      {isOpen && (
        <Menu>
          <li onClick={() => handleSelect("최신 순")}>최신순</li>
          <li onClick={() => handleSelect("좋아요 순")}>좋아요순</li>
        </Menu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  width: 130px;
`;

const SelectedItem = styled.div`
  padding: 0.5rem;
  width: 130px;
  height: 42px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  &:hover {
    border-color: #3692ff;
  }

  &::after {
    content: "\\25BC";
    font-size: 0.8rem;
    color: #1f2937;
    margin-left: 8px;
  }
`;

const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 8px); /* SelectedItem과의 간격 */
  left: 0;
  width: 100%;
  width: 130px;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #fff;
  z-index: 10;
  text-align: center;
  overflow: hidden; /* 내부 요소가 Menu 경계선을 넘지 못하도록 설정 */

  & > li {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: #fff;

    &:not(:last-child) {
      border-bottom: 1px solid #e5e7eb; /* 항목 사이의 경계선 */
    }

    &:hover {
      background-color: #3692ff;
      color: #fff;
    }
  }
`;

export default Dropdown;
