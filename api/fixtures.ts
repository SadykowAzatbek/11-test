import mongoose from "mongoose";
import config from "./config";
import {randomUUID} from "crypto";
import User from "./models/User";
import Products from "./models/Products";
import user from "./models/User";

const dropCollection = async (db: mongoose.Connection, collectionName: string) => {
  try {
    await db.dropCollection(collectionName);
  } catch (err) {
    console.log(`Collection ${collectionName} was missing, skipping drop...`);
  }
};

const run = async () => {
  await mongoose.connect(config.mongoose.db);
  const db = mongoose.connection;

  const collections = ['products', 'users'];

  for (const collectionName of collections) {
    await dropCollection(db, collectionName);
  }

  const [user1, user2] = await User.create(
    {
      username: 'Anna',
      password: '1234',
      token: randomUUID(),
    },
    {
      username: 'John',
      password: '12345',
      token: randomUUID(),
    },
  );

  await Products.create(
    {
      user: user1,
      title: 'car',
      description: 'Description car',
      price: 170000,
      image: 'images/0d37563e-15da-4ef7-8abd-7a17d1ebba3a.jpeg',
      category: 'cars',
    },
    {
      user: user1,
      title: 'fridge',
      description: 'Description fridge',
      price: 15000,
      image: 'images/b94d3055-23ec-42eb-aabc-658eef5ddb98.jpeg',
      category: 'household',
    },
    {
      user: user2,
      title: 'ball',
      description: 'Description ball',
      price: 3000,
      image: 'images/12267433-5591-4b8a-ae38-aca80e42bc07.jpeg',
      category: 'other',
    },
    {
      user: user2,
      title: 'computer',
      description: 'Description computer',
      price: 70000,
      image: 'images/1aa32db1-82f0-4cda-9dc8-ce0a34bcfb0d.jpeg',
      category: 'other',
    },
  );

  await db.close();
};