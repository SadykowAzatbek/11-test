import {Schema, model} from "mongoose";
import {ProductsTypes} from "../types";

const ProductsSchema = new Schema<ProductsTypes>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['other', 'computers', 'cars', 'household'],
    default: 'other',
    required: true,
  }
});

const Products = model('Products', ProductsSchema);
export default Products;