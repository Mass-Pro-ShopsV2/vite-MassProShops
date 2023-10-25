require('dotenv').config()
const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

router.get('/check', async(req,res) => {
  res.send('working')
})

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cartItems.map(item => {
    return {
        price_data: {
          currency:'usd',
          product_data: {
            name: item.name,
            images: [item.image],
            metadata: {
              id: item.id
            }
          },
          unit_amount: Math.floor(item.price * 100)
        },
        quantity: item.cartQuantity
    }
  })
    const session = await stripe.checkout.sessions.create({
      customer_email: 'customer@example.com',
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1500,
              currency: 'usd',
            },
            display_name: 'Next day air',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      line_items,
      mode: 'payment',
      success_url: 'https://two303-mass-pro-shops.onrender.com/checkout-success',
      cancel_url: 'https://two303-mass-pro-shops.onrender.com/cart'
    });
  
    res.send({url: session.url});
  });

module.exports = router