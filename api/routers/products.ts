import {Router} from "express";
import Products from "../models/Products";
import auth from "../middleware/auth";
import {imageUpload} from "../multer";

const productsRouter = Router();

productsRouter.post('/', auth, imageUpload.single('image'), async (req, res, next) => {
  try {
    const product = new Products({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.file ? req.file.filename : null,
      category: req.body.category,
    });

    await product.save();

    return res.send(product);

  } catch (err) {
    return next(err);
  }
});

productsRouter.get('/', async (_req, res, next) => {
  try {
    const products = await Products.find();

    return res.send(products);
  } catch (err) {
    return next(err);
  }
});

export default productsRouter;