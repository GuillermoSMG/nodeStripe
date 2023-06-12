import Stripe from 'stripe';
import { STRIPE_PRIVATE_KEY } from '../config.js';

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: 'Laptop HP',
            description: 'Laptop HP i5',
          },
          currency: 'usd',
          unit_amount: 20000,
        },
        quantity: 1,
      },
      {
        price_data: {
          product_data: {
            name: 'Samsung TV',
            description: 'Smart Samsung TV',
          },
          currency: 'usd',
          unit_amount: 30000,
        },
        quantity: 2,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4000/success',
    cancel_url: 'http://localhost:4000/cancel',
  });
  return res.json(session);
};

export const success = (req, res) => {
  res.redirect('/success.html');
};

export const cancel = (req, res) => {
  res.redirect('/index.html');
};
