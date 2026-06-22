// import dns from 'node:dns';
// dns.setServers(['1.1.1.1', '8.8.8.8']);

// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());


// app.use((req, res, next) => {
//     console.log(`Request aayi: ${req.method} ${req.url}`);
//     next();
// });
// const dbURI = "mongodb+srv://admin:admin@cluster0.nk4wtlb.mongodb.net/blogDB?appName=Cluster0";

// mongoose.connect(dbURI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("DB Error:", err));

// const Blog = mongoose.model('Blog', new mongoose.Schema({
//   title: String,
//   content: String,
//   category: String,
//   author: String,
//   date: { type: Date, default: Date.now }
// }));


// // Yahan category ka route define hai
// app.get('/api/blogs/category/:category', async (req, res) => {
//   try {
//     const { category } = req.params;
//     const blogs = await Blog.find({ category: { $regex: new RegExp(`^${category}$`, 'i') } });
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// app.listen(5000, () => console.log("Server running on port 5000"));