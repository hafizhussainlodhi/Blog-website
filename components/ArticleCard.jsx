import Link from "next/link";
import Image from "next/image";

// Is file mein koi "mongoose" import nahi hai, isliye error nahi aayega!
export default function ArticleCard({ post }) {
  if (!post) return null;

  return (
    <Link 
      href={`/blog/${post._id}`} 
      className="group block overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative w-full h-56">
        <Image
          src={post.image || "/default-blog.jpg"}
          alt={post.title || "Blog Image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <span className="text-xs font-bold text-blue-600 uppercase">
          {post.category || "General"}
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          {post.author || "Admin"} · {new Date(post.date).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}