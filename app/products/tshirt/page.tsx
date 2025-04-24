import Image from "next/image";
import Link from "next/link";

const product = {
  name: "Custom T-Shirt",
  description:
    "Design your own custom T-shirt with your favorite images, quotes, or company branding. Choose from multiple sizes and colors.",
  image: "/tshirt.jpg",
  price: "₹499",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Red", "Blue"],
  material: "100% Cotton",
  delivery: "Delivery in 5-7 business days",
};

export default function TShirtProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="text-teal-600 text-lg font-semibold hover:underline">
          ← Back to Home
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-[450px] w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-4">
            <span className="font-medium">Price:</span>{" "}
            <span className="text-teal-600 font-bold text-xl">{product.price}</span>
          </div>

          <div className="mb-4">
            <span className="font-medium">Material:</span> {product.material}
          </div>

          <div className="mb-4">
            <span className="font-medium">Available Sizes:</span>{" "}
            {product.sizes.join(", ")}
          </div>

          <div className="mb-4">
            <span className="font-medium">Colors:</span>{" "}
            {product.colors.join(", ")}
          </div>

          <div className="mb-4">
            <span className="font-medium">Delivery:</span> {product.delivery}
          </div>

          <a
            href="https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20order%20a%20custom%20T-shirt!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
          >
            Order via WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
