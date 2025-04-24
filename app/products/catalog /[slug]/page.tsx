import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const productsDirectory = path.join(process.cwd(), "products");
  const filePath = path.join(productsDirectory, `${params.slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: `${data.title} | GiftBuz Catalog`,
      description: data.excerpt,
      openGraph: {
        title: `${data.title} | GiftBuz Catalog`,
        description: data.excerpt,
        type: 'product',
        url: `https://giftbuz.com/catalog/${params.slug}`,
        siteName: 'GiftBuz',
        images: data.coverImage ? [{ url: data.coverImage }] : [],
      },
    };
  } catch {
    return {
      title: 'Product Not Found | GiftBuz',
      description: 'The requested product could not be found.',
    };
  }
}

export default function ProductPage({ params }: PageProps) {
  const productsDirectory = path.join(process.cwd(), "products");
  const filePath = path.join(productsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gray-100">
      <header className="w-full max-w-6xl flex justify-between items-center mb-6">
        <Link href="/catalog">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Button>
        </Link>
        <Link href="/" className="text-2xl font-semibold">GiftBuz</Link>
      </header>

      <article className="max-w-5xl w-full bg-white rounded-xl shadow p-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-lg text-gray-600 mb-2">{data.excerpt}</p>
        <p className="text-sm text-gray-500 mb-6">
          Available since: {new Date(data.date).toLocaleDateString()}
        </p>
        {data.coverImage && (
          <Image
            src={data.coverImage}
            alt={data.title}
            width={1000}
            height={500}
            className="rounded-lg mb-8"
          />
        )}
        <ReactMarkdown className="prose prose-lg" rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
