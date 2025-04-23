import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "Custom T-Shirt",
      image: "/tshirt.jpg",
      description: "Premium cotton t-shirts with your personalized designs, logos, or text. Perfect for gifting and branding.",
      sizes: ["S", "M", "L", "XL"],
      path: "/order/tshirt"
    },
    {
      name: "Custom Sipper",
      image: "/sipper.webp",
      description: "Durable stainless steel sippers with high-quality prints. Ideal for daily use and gifting.",
      sizes: ["500ml", "750ml", "1L"],
      path: "/order/sipper"
    },
    {
      name: "Custom Photo Frame",
      image: "/photo.webp",
      description: "Beautifully crafted photo frames for your best memories. Multiple sizes and orientations available.",
      sizes: ["4x6", "5x7", "8x10"],
      path: "/order/photo-frame"
    },
    {
      name: "Custom Keyring",
      image: "/keychains.webp",
      description: "Personalized keyrings with names, quotes, or images. Compact and thoughtful gifts for all.",
      sizes: ["Small", "Medium"],
      path: "/order/keyring"
    },
    {
      name: "Custom Bracelet",
      image: "/bands.jpg",
      description: "Customized bracelets for friends, events, or branding. Silicone and fabric options available.",
      sizes: ["Standard", "Adjustable"],
      path: "/order/bracelet"
    },
    {
      name: "Custom Cup",
      image: "/cupps.png",
      description: "High-quality ceramic cups printed with your messages, logos, or photos.",
      sizes: ["250ml", "350ml", "500ml"],
      path: "/order/cup"
    },
    {
      name: "Custom Water Bottle",
      image: "/bottle.jpg",
      description: "Stylish printed water bottles with leak-proof lids. Great for office, gym, or travel use.",
      sizes: ["500ml", "1L"],
      path: "/order/bottle"
    },
    {
      name: "Custom Mobile Cover",
      image: "/cover.jpg",
      description: "Durable mobile covers with full-print customization for most phone models.",
      sizes: ["iPhone", "Samsung", "Other"],
      path: "/order/mobile-cover"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">
          Our Custom Product Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-md hover:shadow-xl transition duration-300 p-4"
            >
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-sm text-gray-700 mb-4">
                <span className="font-semibold">Available Sizes:</span>{" "}
                {product.sizes.join(", ")}
              </p>
              <Link
                href={product.path}
                className="inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
