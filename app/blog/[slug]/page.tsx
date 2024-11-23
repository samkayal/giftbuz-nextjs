import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Optional: Render raw HTML
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import ShadCN Button component
import { HomeIcon } from "lucide-react"; // Import an icon for the Home button
import { ArrowLeft } from "lucide-react"; // Icon for Back Button

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  // Get all posts and sort them by date
  const allPosts = filenames.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDirectory, filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: new Date(data.date),
    };
  }).sort((a, b) => b.date.getTime() - a.date.getTime());

  // Find the current post index
  const currentIndex = allPosts.findIndex((post) => post.slug === params.slug);

  // Handle 404 if the slug doesn't match any file
  if (currentIndex === -1) {
    notFound();
  }

  // Get previous and next posts
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // Get current post content
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gray-50">
      {/* Header Section */}
      <header className="w-full max-w-7xl flex items-center justify-between mb-8">
        {/* Back Button */}
        <div>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Logo Placeholder */}
        <div>
          <Link href="/">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-placeholder.png" // Replace with your actual logo file path
                alt="Logo"
                className="h-10 w-10 object-cover"
              />
              <span className="text-xl font-bold">Your Logo</span>
            </div>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          {/* Previous Button */}
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`}>
              <Button variant="outline">← Previous</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              ← Previous
            </Button>
          )}

          {/* Next Button */}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`}>
              <Button variant="outline">Next →</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              Next →
            </Button>
          )}
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-8 md:p-16">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6 text-gray-800">{data.title}</h1>
        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-4">{data.excerpt}</p>
        {/* Publish Date */}
        <p className="text-sm text-gray-500 mb-8">
          Published on: {new Date(data.date).toLocaleDateString()}
        </p>
        {/* Cover Image */}
        {data.coverImage && (
          <img
            src={data.coverImage}
            alt={data.title}
            className="rounded-lg w-full mb-8 shadow-md"
          />
        )}
        {/* Markdown Content */}
        <ReactMarkdown
          className="prose prose-lg max-w-none text-gray-800"
          rehypePlugins={[rehypeRaw]} // Optional: Render raw HTML if included in Markdown
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
