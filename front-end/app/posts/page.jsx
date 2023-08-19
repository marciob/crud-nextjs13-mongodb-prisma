import React from "react";
import Link from "next/link";

async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    });
    const posts = await res.json();

    return posts;
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    const posts = await res.json();

    return posts;
  } catch (error) {
    console.log(error);
  }
}

const Post = async () => {
  // const posts = await getPosts();

  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

  return (
    <div>
      <h1 className="text-4xl">Posts</h1>
      <h2 className="text-2xl">Users</h2>

      {users.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}

      <ul className="flex flex-col gap-5">
        {posts.map((post) => {
          // const postAuthor = users.find((user) => user.id === post.userId);
          return (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <li className="bg-gray-100 p-5 cursor-pointer">
                <h4 className="text-xl font-bold">{post.title}</h4>
                <p>{post.body}</p>
                {/* {postAuthor && <p>{postAuthor.name}</p>} */}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Post;
