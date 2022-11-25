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
//const analytics = getAnalytics(app2);

//var admin = require("firebase-admin");
import admin from "firebase-admin";
//import firestore from "firebase-admin/firestore";
//import serviceAccount from "./autosetalarmapp-firebase-adminsdk-1ltqu-c9b17d1df8.json";
//var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
  //credential: admin.credential.cert(serviceAccount),
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "autosetalarmapp",
    private_key_id: "c9b17d1df81659f10caa58081e3abdf99e440ebc",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6At+6kDe+iuX9\nukrgQlPXaR+Cx0L7aVLdcpB9yOT9Dm9BRzi6AYwNajMhMBL6/csY31oBzKRmfbeV\nmuKzCVEFDxZIF2gtocCjqwtL9d4wPEuuzn+kNgCjFlkFi/xeAprpTJQlJ9QFgVc1\nWgnTik3UaFygggimhvw8yv5aktChmpqo4fVWyd/1A7RFl1XU+bqPWMFOBopWRoGL\n7sHJbIHCIY+4F/4M/sEzPoWLGE34OLK8HvBcbcp8iCuAo688e6QreqZgKM8sHgvY\nKn28X8aIJRrIfG+98eynOQcv8UU4E6TYv45c5rauL/FID+Ufnl4xTfuIRAPjeYfp\nlS1dIWujAgMBAAECggEAJPFdLdhmudksRHAzXsbNkAK412hrzTLl2kVenRzBHeE4\nB2b1xTt5bVCiRv0dR+wP4ii535GdNR3S0EuqqpQ3GyIb8sVzU1zEvbzCyZtTPZE8\nFsO8Zgizp7BQjeF3hdROn/ctlROL8Gv3vgjb2r+lJYJ0owwwW6KDhi9qxOJTvUR4\nKd5FbnKKDM50s0hMYGknLCqCYs8wfrUBFY1OuIqdA7sPW6ZHHy3AnFnicMIKrMwd\n/xIeZQClUJsjA+0xRa4XaCYa/65MuQHWGSAZgmybC5VBoFc4Y/29+1G85bQsztZl\nUUc/+Cn+BU4zFAr+Jcf89fCqfNCNBh38jKLxVSD8AQKBgQD0D/MpIYM8MHQV4T0k\nPZE6tn9TehD4LoQCOmB0drxuD2q1ddGT88rvTPW19n1AY7z0jJOH1lnBrkIwm5rw\nO0KkhTBV2wQAShrDIzg2uCcaCpCDcId8AkFcuhHuplB0dFzYrF8GQXWWr640fHqD\n5C73WJRxV/NG8TBED9VMGI114wKBgQDDHAgk25cIezp3LdANOxhrSaHqLt+ij3/J\niPkOHNmBtvYLYDeRzKMRHFyo+qJhd7aI8MMAOK75NDlSPUzud2avmH4tKTqXqyC5\nn0SsnJF3TeYmkxoSMeRye2XfRmu9qqIaiZe8MymRnGXhQVC8AUEWpDfhF7W3n3av\nbD9eg1AfQQKBgQCcZgAvsl8T2gT55G225JFFa59qUgW/1KcZemlHGLOlX9HE2Oxl\ngEviT5IBeiRHd+KlX9RGrvCzscSOu5htK7yICyWvTvtgaByAQfiK8DV2daCn6huY\nNyXFkyNcqE1UYyEAZG08aAQ/fPMIhWBJVpdWP/hYLcEjC/ofE3pfGjjEewKBgG1X\nsFi3l5TxOnq/+fDwRWcbBNqxGjOIKB1R3gHCuUKwvoLxkTLsdBaKxoMMsyPcazej\ndiURnz2ZvuYP5KVf1PRjiZLVoDiPdu+QCnSR6hPqXCkSF3JK87QU46qVVJwenGoy\n4g5evdUUySPL7urt6QQ/U/GZ0ATwIRt+lqTpAmYBAoGBAIv6tVL/KfS5m0LgyGxu\n5qUHneGdyeKwshwBmxnWCuc6NuIWDWd4XYPLedD3sF7nuBlA9EHvemlY8ZtrVwWm\n0PeN9JLsrn3tZ5529Qe1bWYCNtNHqxZ/eurUN/3CH7UQrSgUXBE9NwP/1Gs0vCVn\nyzv1rQc61iAL3GVeIBguPoDs\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-1ltqu@autosetalarmapp.iam.gserviceaccount.com",
    client_id: "111016733789762566548",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1ltqu%40autosetalarmapp.iam.gserviceaccount.com",
  }),
});

const db = admin.getFirestore();

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
