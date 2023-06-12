import express from 'express';
import path from 'path';

import paymentRoutes from './routes/payment.routes.js';
import { PORT } from './config.js';

const app = express();

app.use(express.json());
app.use(paymentRoutes);
app.use(express.static(path.resolve('src/public')));

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
