import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ProductCard = ({ product }) => {
  const [likes, setLikes] = useState(product.likes || 0);

  // 좋아요 버튼 클릭 시 서버에 좋아요 수 증가 요청
  const handleLike = async () => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/products/${product._id}/like`
      );
      setLikes(likes + 1); // 상태 업데이트
    } catch (error) {
      console.error("좋아요 실패:", error);
    }
  };

  return (
    <Card>
      <Image src="https://i.imgur.com/hrTuYYB.png" alt={product.name} />
      <Name>{product.name}</Name>
      <Price>{product.price.toLocaleString()}원</Price>
      <LikeButton onClick={handleLike}>
        <img src="https://i.imgur.com/ejY6gG6.png" alt="좋아요" /> {likes}
      </LikeButton>
    </Card>
  );
};

// 스타일
const Card = styled.div`
  /* border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px; */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  height: 220px;
  object-fit: cover;
`;

const Name = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
`;

const Price = styled.p`
  color: #1f2937;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
  margin-top: 6px;
  margin-bottom: 8px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  color: #4b5563;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  padding: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

export default ProductCard;
