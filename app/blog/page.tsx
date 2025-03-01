import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog | GiftBuz',
  description: 'Explore our latest articles about gift-giving, celebrations, and thoughtful presents for every occasion.',
  openGraph: {
    title: 'Blog | GiftBuz',
    description: 'Explore our latest articles about gift-giving, celebrations, and thoughtful presents for every occasion.',
    type: 'website',
    url: 'https://giftbuz.com/blog',
    siteName: 'GiftBuz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | GiftBuz',
    description: 'Explore our latest articles about gift-giving, celebrations, and thoughtful presents for every occasion.',
  }
};

export default function BlogPage() {
  // Load Markdown files from the posts directory
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: new Date(data.date),
        excerpt: data.excerpt,
        coverImage: data.coverImage,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gray-50">
      <header className="w-full max-w-7xl flex items-center justify-between mb-8">
        <div>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div>
          <Link href="/" className="text-2xl font-medium">
            giftbuz
          </Link>
        </div>

        <div className="w-[100px]">
          {/* Empty div for flex spacing */}
        </div>
      </header>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500">
                  {post.date.toLocaleDateString()}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
