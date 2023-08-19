// url http://localhost:3000/api/posts

import prisma from "@/app/libs/prismadb";
// NextResponse is an alternative to Express, it allows you to return a response from a route
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();

    const { title, description } = body;

    const newPost = await prisma.post.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
};

export const GET = async (request) => {
  try {
    const post = await prisma.post.findMany();

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
  }
};
