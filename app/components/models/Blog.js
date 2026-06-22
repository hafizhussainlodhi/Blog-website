const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: { type: String, default: "General" }, // Default value set ho gayi
  author: { type: String, default: "Admin" },     // Default value set ho gayi
  createdAt: { type: Date, default: Date.now }
});