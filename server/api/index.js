import express from 'express';
import usersRouter from './users.js';
import productsRouter from './products.js';
import checkoutRouter from './checkout.js';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/stripe', checkoutRouter);

router.use((req, res, next) => {
  const error = new Error('Not Found, in index');
  error.status = 404;
  next(error);
});

export default router;
