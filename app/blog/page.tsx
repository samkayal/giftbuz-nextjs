import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Article = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage?: string;
};

export default function BlogPage() {
  // Load Markdown files from the posts directory
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title,
      excerpt: data.excerpt,
      slug: filename.replace(/\.md$/, ""),
      date: data.date,
      coverImage: data.coverImage || null,
    };
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-white">
      <section className="w-full pt-12">
        <div className="container mx-auto space-y-6 md:space-y-12 px-4 md:px-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold">Welcome to the Blog</h1>
            <p className="text-zinc-500 text-sm md:text-xl">
              Explore thought-provoking articles on a variety of topics.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {allPostsData.map((post) => (
              <article key={post.slug} className="h-full flex flex-col rounded-lg shadow-lg">
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="object-cover w-full aspect-[4/3]"
                  />
                )}
                <div className="flex-1 p-4 md:p-6">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
                  </Link>
                  <p className="text-sm md:text-base mt-2">{post.excerpt}</p>
                  <p className="text-xs md:text-sm text-zinc-600 mt-1 font-bold">
                    Published on: {new Date(post.date).toLocaleDateString()}
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/blog/${post.slug}`}>
                      <button className="border rounded px-3 py-1">Read More →</button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
