const catchAsyncErrors = require("../middleware/catchAsyncErrors");


const stripe = require('stripe') (process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res) => {
  console.log("this is paymentController.js");
  console.log(req.body);
 try{
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Sell-Zone",
    },
  });
 res
  .status(200)
  .json({ success: true, client_secret: myPayment.client_secret });
  
}catch(error){
  console.log(error);
}
});
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.NEXT_PUBLIC_STRIPE_API_KEY });
});
