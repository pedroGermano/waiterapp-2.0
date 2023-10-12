import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProducts } from './app/useCases/products/createProdutcs';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('ok');
});

// Change  order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});


// Delete/canccel order
router.delete('/order/:orderId', (req, res) => {
  res.send('ok');
});
