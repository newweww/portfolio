'use server'

import connectDB from "@/app/lip/db";
import Post from "@/app/model/postModel";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, msg } = await req.json();
    await connectDB();
    await Post.create({ name, email, msg });
    return NextResponse.json({ message: 'Post submitted successfully!' });
}

