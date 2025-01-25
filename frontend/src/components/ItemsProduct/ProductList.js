import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styled from "styled-components";

// 상품 목록을 표시하는 컴포넌트: 검색, 정렬, 페이지네이션 기능 포함
const ProductList = ({ sortType, searchQuery, currentPage, itemsPerPage }) => {
  // 전체 상품 목록과 필터링된 상품 목록 상태 관리
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 상품 데이터 GET 요청
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/products`
        );
        console.log("API Response:", response);
        setProducts(response.data);
      } catch (error) {
        console.error("상품 목록 불러오기 실패:", error);
      }
    };

    fetchProducts();
  }, []);

  // 검색 및 정렬 기능
  useEffect(() => {
    let updatedProducts = [...products];

    // 검색어로 상품 필터링
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 선택된 방식으로 상품 정렬
    if (sortType === "latest") {
      updatedProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortType === "price") {
      updatedProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(updatedProducts);
  }, [products, searchQuery, sortType]);

  // 페이지네이션
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <ProductGrid>
      {paginatedProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </ProductGrid>
  );
};

// 반응형 상품 그리드
const ProductGrid = styled.div`
  display: grid;
  gap: 24px;

  /* 1199px 이상: 5열 */
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1199px) and (min-width: 744px) {
    /* 744px~1199px: 3열 */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 743px) {
    /* 743px 이하: 2열 */
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ProductList;
