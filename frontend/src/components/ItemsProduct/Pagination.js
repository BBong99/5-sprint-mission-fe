import React, { useState } from "react";
import styled from "styled-components";

// 페이지네이션 컴포넌트
const Pagination = ({
  currentPage, // 현재 페이지 번호
  totalItems, // 전체 아이템 수
  itemsPerPage, // 한 페이지에 보여줄 아이템 수
  onPageChange, // 페이지 변경 함수
}) => {
  // 총 페이지 수 계산 (최소 5페이지 이상 보이도록 설정)
  const totalPages = Math.max(5, Math.ceil(totalItems / itemsPerPage));

  // 현재 보이는 페이지 그룹의 시작 번호 상태 (기본값: 1)
  const [visiblePageStart, setVisiblePageStart] = useState(1);

  // 이전 페이지 버튼 클릭 시 실행되는 함수
  const handlePrevious = () => {
    if (currentPage > 1) {
      // 현재 페이지가 1보다 크면
      onPageChange(currentPage - 1); // 페이지를 1 감소

      // 만약 현재 페이지가 보이는 페이지 그룹의 시작 페이지라면
      if (currentPage === visiblePageStart) {
        setVisiblePageStart(visiblePageStart - 1); // 보이는 페이지 그룹도 1 감소
      }
    }
  };

  // ✅ 다음 페이지 버튼 클릭 시 실행되는 함수
  const handleNext = () => {
    if (currentPage < totalPages) {
      // 현재 페이지가 총 페이지보다 작으면
      onPageChange(currentPage + 1); // 페이지를 1 증가시킴

      // 만약 현재 페이지가 보이는 페이지 그룹의 마지막 페이지라면
      if (currentPage === visiblePageStart + 4) {
        setVisiblePageStart(visiblePageStart + 1); // 보이는 페이지 그룹도 1 증가
      }
    }
  };

  // ✅ 현재 보여줄 페이지 번호 목록 (최대 5개)
  const visiblePages = Array.from(
    { length: 5 },
    (_, i) => visiblePageStart + i
  ).filter((page) => page <= totalPages); // 총 페이지 수를 넘지 않도록 제한

  return (
    <PaginationContainer>
      <ArrowButton onClick={handlePrevious} disabled={currentPage === 1}>
        &lt;
      </ArrowButton>

      {visiblePages.map((page) => (
        <PageButton
          key={page}
          isActive={currentPage === page} // 현재 페이지 강조
          onClick={() => onPageChange(page)} // 페이지 이동
        >
          {page}
        </PageButton>
      ))}

      <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
        &gt;
      </ArrowButton>
    </PaginationContainer>
  );
};

// 스타일
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  margin-top: 43px;
`;

const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#6B7280")};
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#0056b3" : "#f1f1f1")};
  }
`;

const ArrowButton = styled.button`
  padding: 0.5rem;
  background-color: #ffffff;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
  &:disabled {
    background-color: #e9ecef;
    color: #adb5bd;
    cursor: not-allowed;
  }
`;

export default Pagination;
