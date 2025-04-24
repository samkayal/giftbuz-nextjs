import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function CatalogPage() {
  const productsDirectory = path.join(process.cwd(), "products");
  const filenames = fs.readdirSync(productsDirectory);

  const products = filenames.map((filename) => {
    const filePath = path.join(productsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      coverImage: data.coverImage,
    };
  });

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center">T-Shirt Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link href={`/catalog/${product.slug}`} key={product.slug} className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            {product.coverImage && (
              <Image
                src={product.coverImage}
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
