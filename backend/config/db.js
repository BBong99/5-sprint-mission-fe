// MongoDB 연결을 위한 설정 파일
const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB 연결 함수
const connectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI); // 디버깅을 위한 로그 추가
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // 연결 타임아웃 설정
    });
    console.log("MongoDB 연결 성공");
  } catch (error) {
    console.error("MongoDB 연결 실패", error);
    process.exit(1);
  }
};

module.exports = connectDB;
