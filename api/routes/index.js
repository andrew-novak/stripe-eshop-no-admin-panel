const express = require("express");

// import subroutes
const products = require("./products");
const createCheckoutSession = require("./createCheckoutSession");

const router = express.Router();

/*
// for all routes
router.options("/*", (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    res.header("Access-Control-Allow-Origin", "*");
  }
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.sendStatus(200);
});
*/

// use imported subroute middlewares
router.use("/products", products);
router.post("/create-checkout-session", createCheckoutSession);

module.exports = router;
