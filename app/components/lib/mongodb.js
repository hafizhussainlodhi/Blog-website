import mongoose from 'mongoose';

const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.nk4wtlb.mongodb.net/blogDB?appName=Cluster0";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
};