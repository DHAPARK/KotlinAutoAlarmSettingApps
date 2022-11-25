import express from "express";
import axios from "axios";
import mysql from "mysql";
const app = express();
//
// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: "44.211.218.78",
  user: "dummy1",
  password: "1234",
  database: "jejuDB",
  port: "3306",
});
/*
connection.query(
  "create table lightValueTable (idx INT NOT NULL PRIMARY KEY , value INT NOT NULL);",
  (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  }
);

connection.query(
  "INSERT INTO lightValueTable (idx , value) VALUE (?,?)",
  [1, 0],
  () => {
    return;
  }
);
*/
async function setLightValueFromMysqlDB(lV, res) {
  connection.query(
    "UPDATE lightValueTable SET value = ? WHERE idx = ?",
    [lV, 1],
    (error, results) => {
      if (error) throw error;
      res.send({ result: "success" });
    }
  );
}

async function getLightValueFromMysqlDB() {
  connection.query(
    "SELECT value from lightValueTable where idx = 1",
    (error, results, fields) => {
      if (error) throw error;
      console.log("DB에서 얻어온 조도는 : ");
      console.log(results);
      res.send({ lV: results.value });
    }
  );
}
//파이썬 서버에서 주기적으로 조도를 얻어와 db에 저장
app.get("/setLightValue", async (req, res) => {
  const data = await axios.get("http://127.0.0.1:5000/getLightValue");
  await setLightValueFromMysqlDB(data.data.lightValue, res);
});

//안드로이드에서 오는 주기적 요청에 응답
app.get("/getLightValue", async (req, res) => {
  await getLightValueFromMysqlDB(res);
});

app.listen(3000, () => {
  console.log(`80번 포트로 서버 대기중...`);
});
