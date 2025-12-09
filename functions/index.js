// with finctions accessing payment gateway stripe
const express = require("express");
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

exports.api = onRequest(app);








