const express = require("express");
// const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const cors = require("cors");
const dotenv = require("dotenv");
const { Message } = require("firebase-functions/pubsub");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    Message: "success!",
  });
});

app.post("/payments/create", async (req, res) => {
  const total = Number(req.query.total);
  console.log("Payment request received for amount:", total);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "ETB",
    });
    return res.status(201).json({ clientSecret: paymentIntent.client_secret, });
  }
  catch (error) { 
    console.error("Stripe Error:", error);
    return res.status(500).json({ error: error.message });
  }
});

exports.api = onRequest(app);
