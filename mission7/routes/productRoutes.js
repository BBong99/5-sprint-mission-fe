const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// 상품 등록 (Create)
router.post("/", productController.createProduct);

// 상품 목록 조회 (Read - 전체)
router.get("/", productController.getProducts);

// 상품 상세 조회 (Read - 단일)
router.get("/:id", productController.getProductById);

// 상품 수정 (Update)
router.patch("/:id", productController.updateProduct);

// 상품 삭제 (Delete)
router.delete("/:id", productController.deleteProduct);

// 상품 좋아요 기능 (좋아요 수 증가)
router.patch("/:id/like", productController.likeProduct);

// 라우터 내보내기
module.exports = router;
