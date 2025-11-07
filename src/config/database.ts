import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MongoDB URI not found in .env file');

    await mongoose.connect(uri);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    process.exit(1);
  }
};
