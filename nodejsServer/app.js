import express from "express";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = express();
const firebaseConfig = {
  apiKey: "AIzaSyChdzmCfI-uxsk9dl3B4K9ZQNWYwAWRc7c",
  authDomain: "autosetalarmapp.firebaseapp.com",
  projectId: "autosetalarmapp",
  storageBucket: "autosetalarmapp.appspot.com",
  messagingSenderId: "17425099202",
  appId: "1:17425099202:web:312aee6efb95af16008e5b",
  measurementId: "G-WPZGCLMFM6",
};

const app2 = initializeApp(firebaseConfig);

import admin from "firebase-admin";
import firestore from "firebase-admin/firestore";
import serviceAccount from "./mydbConfig.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = firestore.getFirestore();

async function test(lV) {
  db.collection("lightValue").doc("lV").set({
    lightValue: lV,
  });
}

app.get("/getLightValue", async (req, res) => {
  const data = await axios.get("http://127.0.0.1:5000/getLightValue");
  await test(data.data.lightValue);
  res.send({ lightValue: data.data.lightValue });
});

app.listen(3000, () => {
  console.log(`80번 포트로 서버 대기중...`);
});
