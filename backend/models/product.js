// 상품 정보를 저장하는 MongoDB 스키마 정의
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String], // 태그 문자열
    },
    likes: {
      type: Number,
      default: 0, //  기본값 0으로 좋아요 수 추가
    },
    createdAt: {
      type: Date,
      default: Date.now, // 자동으로 현재 시간 저장
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false, // "__v" 버전 관리 필드 제거
  }
);

// 모델 내보내기
module.exports = mongoose.model("Product", productSchema);
