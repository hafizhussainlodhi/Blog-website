// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import ArticleCard from "@/components/ArticleCard";

// export default function CategoryPage() {
//   const params = useParams(); 
//   const slug = params?.slug; // Next.js 15+ ke liye safe access
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
// const API_URL = process.env.NEXT_PUBLIC_API_URL;
//   useEffect(() => {
//     if (!slug) return;

//     setLoading(true);
//     // Explicitly check the URL in console to debug 404
//     const url = `${API_URL}/api/blogs/category/${slug}`;
//     console.log("Fetching from:", url);

//     fetch(url)
//       .then((res) => {
//         if (!res.ok) throw new Error(`Server responded with ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         setBlogs(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch Error:", err);
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading) return <div className="p-10 text-center text-xl">Loading blogs...</div>;

//   return (
//     <main className="max-w-6xl mx-auto p-10">
//       <h1 className="text-4xl font-bold uppercase mb-10 text-center">
//         Category: {slug}
//       </h1>
      
//       {blogs.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((post) => (
//             <ArticleCard key={post._id} post={post} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500">
//           Is category mein abhi koi blog nahi hai.
//         </div>
//       )}
//     </main>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";

export default function CategoryPage() {
  const params = useParams(); 
  const slug = params?.slug; 
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://blog-backend-7nnn.vercel.app";

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const url = `${API_URL}/api/blogs/category/${slug}`;
    
    // Yeh alert ya log aapko browser ke Inspect Element Console mein exact URL dikhayega
    console.log("ACTUAL FETCHING FROM:", url);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, [slug, API_URL]);

  if (loading) return <div className="p-10 text-center text-xl text-white">Loading blogs...</div>;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white min-h-screen">
      <h1 className="text-4xl font-bold uppercase mb-10 text-center">
        Category: {slug}
      </h1>
      
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-12 bg-[#1e293b] rounded-2xl border border-slate-700">
          Is category mein abhi koi blog nahi hai.
        </div>
      )}
    </main>
  );
}