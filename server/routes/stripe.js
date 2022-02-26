const stripe = require("stripe")(process.env.STRIPE_KEY);
const router = require("express").Router();

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeSuccess) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeSuccess);
      }
    }
  );
});

module.exports = router;
