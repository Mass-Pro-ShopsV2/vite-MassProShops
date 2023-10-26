import express from 'express';
import Product from '../db/models/Product.js';
import { requireToken, isAdmin } from './gateKeepingMiddleware.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleProductId = req.params.id;
    const singleProduct = await Product.findByPk(singleProductId);

    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const newInfo = req.body;
    const product = await Product.findByPk(req.params.id);
    const updateProduct = await product.update(newInfo);
    res.send(updateProduct);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).send({ msg: 'Product not Found' });
    }
    const data = await Product.findByPk(req.params.id);
    await data.destroy();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

export default router;
