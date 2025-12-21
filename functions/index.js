// with functions accessing payment gateway stripe
/* global process */
import express from "express";
import { onRequest } from "firebase-functions/https";
// import logger from "firebase-functions/logger";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "success!",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = Number(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    // console.log(paymentIntent);
    res.status(201).json({ clientsecret: paymentIntent.client_secret });
  } else {
    res.status(403).json({ error: "Invalid total amount" });
  }
});

export const api = onRequest(app);
