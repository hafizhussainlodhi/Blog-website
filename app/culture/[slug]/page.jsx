"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function SingleBlogPage() {
  const { slug } = useParams(); // Yahan 'slug' sebenarnya 'id' hai
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch(`${API_URL}/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <main className="p-10 text-center">Loading...</main>;
  if (!blog) return <main className="p-10 text-center">Blog nahi mila!</main>;

  return (
    <main className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 mt-2">Category: {blog.category} | Author: {blog.author}</p>
      <div className="mt-8 text-lg leading-relaxed text-gray-800">{blog.content}</div>
    </main>
  );
}