// Express 서버 메인 설정 파일
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB 연결
connectDB();

// 라우터 연결
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`서버 실행중: http://localhost:${PORT}`));
