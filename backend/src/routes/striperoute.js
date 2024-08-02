import stripe from 'stripe';
const stripe=require("stripe")('sk_test_51LoGT9SJu2k1dlhORNT7QRCzQkbxEXFEbRQO2BFwd8Dg5K2YwVwC21P1ZXvOu9qStLuFQdTw9oXOlDVj1Y92QaMq00hr7hZPXW');
app.post("/payment-intent", async(req,res)=>{
    const amount =req.body
    //enter your checks whether the payment is correct
    })
    const paymentIntent = await stripe.paymentIntents.create({
        amount ,
        currency: "usd",  
      }); 
      res.status(200).json(paymentIntent.client_secret);
