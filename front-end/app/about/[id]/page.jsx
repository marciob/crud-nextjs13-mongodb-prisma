"use client";

import Link from "next/link";

export default function DynamicPage({ params }) {
  return (
    <main>
      <div>
        <h1 className="text-4xl">
          This is the about page with ID: {params.id}
        </h1>
      </div>

      <Link href={"/"}>Home</Link>
    </main>
  );
}
