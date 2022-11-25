import express from "express";
import axios from "axios";

const app = express();

app.get("/getLightValue", async (req, res) => {
  axios.get("http://127.0.0.1:5000/getLightValue").then((data) => {
    res.send({ lightValue: data.data.lightValue });
  });
});

app.listen(3000, () => {
  console.log(`80번 포트로 서버 대기중...`);
});
