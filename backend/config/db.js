import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // MUST be at the top

console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
