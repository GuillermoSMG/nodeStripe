import dotenv from 'dotenv';

dotenv.config();

export const PORT = 4000;

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;
