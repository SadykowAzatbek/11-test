import {Model} from "mongoose";

export interface UserTypes {
  username: string;
  password: string;
  token: string;
  displayName: string;
  phone: string;
}

interface UserMethods {
  checkPassword(password: string): Promise<boolean>;
  generateToken(): void;
}

type UserModel = Model<UserTypes, {}, UserMethods>;

export interface ProductsTypes {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}