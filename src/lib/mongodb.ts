import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

interface GlobalMongoose {
  isConnected?: boolean;
}

declare global {
  var mongoose: GlobalMongoose;
}

global.mongoose = global.mongoose || {};

async function connectDB() {
  if (global.mongoose.isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!);
    global.mongoose.isConnected = true;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectDB;