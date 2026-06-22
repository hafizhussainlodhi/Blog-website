import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json(); 

    
    const blogData = {
      ...body,
      category: "General", 
      author: "Admin",  
      createdAt: new Date()
    };

    const newBlog = await Blog.create(blogData);
    return NextResponse.json({ message: "Blog Created", blog: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}