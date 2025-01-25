const Product = require("../models/product");

// 상품 등록 (Create)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, tags } = req.body;
    const product = new Product({ name, description, price, tags });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "상품 등록 실패", error });
  }
};

// 상품 목록 조회 (Read - 전체)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "상품 조회 실패", error });
  }
};

// 상품 상세 조회 (Read - 단일)
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "상품 조회 실패", error });
  }
};

// 상품 수정 (Update)
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: "상품 수정 실패", error });
  }
};

// 상품 삭제 (Delete)
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }
    res.status(200).json({ message: "상품 삭제 성공" });
  } catch (error) {
    res.status(500).json({ message: "상품 삭제 실패", error });
  }
};

// 상품 좋아요 기능 (좋아요 수 증가)
exports.likeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    product.likes += 1; // 좋아요 수 증가
    await product.save();

    res.status(200).json({ message: "좋아요 추가 성공", likes: product.likes });
  } catch (error) {
    res.status(500).json({ message: "좋아요 추가 실패", error });
  }
};
