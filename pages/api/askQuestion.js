// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import query from "@/util/queryApi";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import { collection, doc, Timestamp } from "firebase/firestore";

export default async function handler(req, res) {
  const { model, chatId, message, session } = req.body;
  

  if (!message) {
    res.status(400).json({ answer: "please enter a message" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "please porvide a valid chat id" });
    return;
  }

  //ChatGPT query
  

  const response = await query(message);

  const answer = {
    text:
      response,
    createdAt:admin.firestore.Timestamp.now(),
    user: {
      _id: "roomee",
      name: "Roomee",
      avatar: "/logo.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(answer);

  res.status(200).json({ answer: answer.text });
}
