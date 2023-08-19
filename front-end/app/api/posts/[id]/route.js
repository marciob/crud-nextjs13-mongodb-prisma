// url http://localhost:3000/api/posts

import prisma from "@/app/libs/prismadb";
// NextResponse is an alternative to Express, it allows you to return a response from a route
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "GET Error ", error }, { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { title, description } = body;

    const { id } = params;

    const updatePost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
      },
    });

    if (!updatePost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatePost);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Update post error", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;

    const post = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json("Post has been deleted");
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "DELETE Error ", error },
      { status: 500 }
    );
  }
};
