import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Optional: Render raw HTML
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import ShadCN Button component
import { ArrowLeft } from "lucide-react"; // Icon for Back Button
import Image from "next/image";
import { Metadata } from "next";

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    
    return {
      title: `${data.title} | GiftBuz Blog`,
      description: data.excerpt,
      openGraph: {
        title: `${data.title} | GiftBuz Blog`,
        description: data.excerpt,
        type: 'article',
        url: `https://giftbuz.com/blog/${params.slug}`,
        siteName: 'GiftBuz',
        images: data.coverImage ? [{ url: data.coverImage }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${data.title} | GiftBuz Blog`,
        description: data.excerpt,
        images: data.coverImage ? [data.coverImage] : [],
      }
    };
  } catch {
    return {
      title: 'Blog Post Not Found | GiftBuz',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const allPosts = filenames
    .map((filename) => {
      const fileContent = fs.readFileSync(path.join(postsDirectory, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title,
        date: new Date(data.date),
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const currentIndex = allPosts.findIndex((post) => post.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gray-50">
      <header className="w-full max-w-7xl flex items-center justify-between mb-8">
        <div>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <div>
          <Link href="/" className="text-2xl font-medium">
            giftbuz
          </Link>
        </div>

        <div className="flex space-x-2">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`}>
              <Button variant="outline">← Previous</Button>
            </Link>
          ) : (
            <Button variant="outline" disabled>
              ← Previous
            </Button>
          )}

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

      <article className="max-w-7xl w-full bg-white rounded-lg shadow-lg p-8 md:p-16">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">{data.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{data.excerpt}</p>
        <p className="text-sm text-gray-500 mb-8">
          Published on: {new Date(data.date).toLocaleDateString()}
        </p>
        {data.coverImage && (
          <Image 
            src={data.coverImage} 
            alt={data.title} 
            width={1200}
            height={630}
            className="rounded-lg w-full mb-8 shadow-md" 
          />
        )}
        <ReactMarkdown className="prose prose-lg max-w-none text-gray-800" rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
