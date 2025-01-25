// Express 서버 메인 설정 파일
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
const allowedOrigins = [
  "https://bbongmission6.netlify.app",
  "http://bbongmission6.netlify.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// DB 연결
connectDB();

// Health check 엔드포인트 추가
app.get("/", (req, res) => {
  res.status(200).json({ message: "서버가 정상적으로 실행중입니다." });
});

// 라우터 연결
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`서버 실행중: http://localhost:${PORT}`));
