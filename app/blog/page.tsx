"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllArticles, Article } from "@/lib/contentful";
import { Home } from 'lucide-react';

export default function BlogPage() {
  const [allPostsData, setAllPostsData] = useState<Article[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let allPosts: Article[] = [];
        const limit = 10;
        let morePostsAvailable = true;
        let skip = 0;

        while (morePostsAvailable) {
          const postsBatch = await getAllArticles(limit, skip, false);
          if (postsBatch.length > 0) {
            allPosts = [...allPosts, ...postsBatch];
            skip += postsBatch.length;
          }

          morePostsAvailable = postsBatch.length === limit;
        }

        setAllPostsData(allPosts);
        setFilteredPosts(allPosts);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to fetch articles.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const filtered = allPostsData.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, allPostsData]);

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading articles...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">{error}</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">GiftBuz Blog</h1>
        <Link href="/">
          <Button variant="outline">
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
        </Link>
      </div>
      
      <Input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8"
      />

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.sys.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {post.coverImage && (
                <Image
                  src={post.coverImage.url}
                  alt={post.title}
                  width={350}
                  height={263}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                {post.publishedDate && (
                  <p className="text-sm text-gray-500 mb-4">
                    Published on: {new Date(post.publishedDate).toLocaleDateString()}
                  </p>
                )}
                <div className="flex justify-end">
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline">Read More →</Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No articles found.</p>
      )}
    </main>
  );
}

