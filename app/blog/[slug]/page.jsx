"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function SingleBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    // API Call
    fetch(`${API_URL}/api/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <main className="p-10">Loading...</main>;
  if (!blog) return <main className="p-10">Blog nahi mila!</main>;

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 mt-2">Category: {blog.category}</p>
      <div className="mt-6 text-lg leading-relaxed">{blog.content}</div>
    </main>
  );
}