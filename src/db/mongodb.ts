import { MONGODB_URI } from '@config/index';
import mongoose from 'mongoose';

export default async function initMongodb() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to mongodb');
  } catch (error) {
    throw new Error(error.message);
  }
}
