import express from "express";
import axios from "axios";

const app = express();
app.get("/getLightValue", async (req, res) => {
  const data = await axios.get("http://127.0.0.1:5000/getLightValue").data;
  console.log(`전송된 데이터 ${data}`);
  res.send(data);
});

app.listen(3000, () => {
  console.log(`80번 포트로 서버 대기중...`);
});
