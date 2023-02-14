import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

const serviceAccountKey = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
}

const adminDb = admin.firestore();

export { adminDb };
