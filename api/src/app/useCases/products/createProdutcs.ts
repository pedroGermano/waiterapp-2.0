import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    console.log(JSON.parse(ingredients));

    // await Product.create({
    //   name,
    //   description,
    //   imagePath,
    //   price: Number(price),
    //   category,
    //   ingredients
    // });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
