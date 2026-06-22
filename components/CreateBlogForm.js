"use client";
import { useState } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function CreateBlogForm() {
  const [formData, setFormData] = useState({ title: "", content: "", category: "General" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/create-blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Blog Created Successfully!");
        setFormData({ title: "", content: "", category: "General" }); // Form reset
      } else {
        alert("Failed to save blog.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md border">
      <div className="mb-4">
        <label className="block text-sm font-medium">Title</label>
        <input 
          required 
          className="w-full border p-2 rounded" 
          value={formData.title} 
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Category</label>
        <select 
          className="w-full border p-2 rounded"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="General">General</option>
          <option value="Fashion">Fashion</option>
          <option value="Culture">Culture</option>
          <option value="Tech">Tech</option>
          <option value="Travel">Travel</option>
          <option value="Healthy Living">Healthy Living</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Content</label>
        <textarea 
          required 
          className="w-full border p-2 rounded h-32" 
          value={formData.content} 
          onChange={(e) => setFormData({...formData, content: e.target.value})} 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Saving..." : "Create Blog"}
      </button>
    </form>
  );
}