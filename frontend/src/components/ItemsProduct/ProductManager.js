import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

// 상품 관리의 메인 컴포넌트: 검색, 정렬, 페이지네이션 등을 관리
const ProductManager = () => {
  // 검색어, 정렬 방식, 현재 페이지, 페이지당 아이템 수 상태 관리
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // 화면 크기에 따라 페이지당 표시할 상품 개수 조정
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1199) {
        setItemsPerPage(10); // 데스크톱: 10개
      } else if (window.innerWidth > 743) {
        setItemsPerPage(6); // 태블릿: 6개
      } else {
        setItemsPerPage(4); // 모바일: 4개
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <ProductContainer>
        <h2>판매 중인 상품</h2>
        <FlexContainer>
          <SearchBar onSearch={setSearchQuery} />
          <AddProduct />
          <Dropdown onSortChange={setSortType} />
        </FlexContainer>
      </ProductContainer>

      <Spacer />
      <ProductList
        searchQuery={searchQuery}
        sortType={sortType}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />

      <Pagination
        currentPage={currentPage}
        totalItems={150} // 예시: 총 상품 개수 (동적으로 수정 가능)
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

// 스타일
const Container = styled.div`
  max-width: 1200px;
  margin: 26px auto 0;
  margin-bottom: 140px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /*  작은 화면에서 줄바꿈 */
  gap: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Spacer = styled.div`
  height: 24px; /* ProductContainer와 ProductList 간격 */
`;

export default ProductManager;
