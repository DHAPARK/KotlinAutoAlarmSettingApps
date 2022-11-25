import express from "express";
import axios from "axios";
import mysql from "mysql";
import res from "express/lib/response";
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

async function setLightValueFromMysqlDB( lV ) {
  connection.query(
    "UPDATE lightValueTable SET value = ? WHERE idx = ?",[lV,1],(error, results) => {if (error) throw error;res.send({results:results});}
  );
}

async function getLightValueFromMysqlDB() {
  connection.query("SELECT value from lightValueTable where idx = 1", (error, results, fields) => {
    if (error) throw error;
    response.send(
        lV: results,
    );
  });
}

app.get("/getLightValue", async (req, res) => {
  const data = await axios.get("http://127.0.0.1:5000/getLightValue");

  res.send({ lightValue: data.data.lightValue });
});

app.listen(3000, () => {
  console.log(`80번 포트로 서버 대기중...`);
});
