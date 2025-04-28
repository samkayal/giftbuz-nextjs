import Image from "next/image";
import Link from "next/link";

type TShirtDesign = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  sizes: string[];
  colors: string[];
  material: string;
  delivery: string;
};

const tShirtDesigns: TShirtDesign[] = [
  {
    id: 1,
    name: "Custom T-Shirt",
    description:
      "Design your own custom T-shirt with your favorite images, quotes, or company branding. Choose from multiple sizes and colors.",
    image: "/tshirt.jpg",
    price: "₹499",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 2,
    name: "Saved By Grace",
    description: "Clean and classy design with custom text.",
    image: "/Saved_By_Grace.jpg",
    price: "₹499",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 3,
    name: "Anime Hero",
    description: "Fan-favorite anime character on premium cotton.",
    image: "/tshirts/anime.jpg",
    price: "₹549",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 4,
    name: "Couple Combo",
    description: "Perfect gift for couples – includes two T-shirts.",
    image: "/tshirts/couple.jpg",
    price: "₹899 (Set of 2)",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 5,
    name: "Corporate Branding",
    description: "Ideal for teams or events – add your logo!",
    image: "/tshirts/branding.jpg",
    price: "₹599",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 6,
    name: "Birthday Special",
    description: "Celebrate in style with our birthday edition.",
    image: "/tshirts/birthday.jpg",
    price: "₹499",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 7,
    name: "Graphic Streetwear",
    description: "Bold graphics meet street fashion aesthetics.",
    image: "/tshirts/streetwear.jpg",
    price: "₹649",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 8,
    name: "Custom Your Way",
    description: "Upload your own design – we’ll print it!",
    image: "/tshirts/custom.jpg",
    price: "From ₹499",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Red", "Blue"],
    material: "100% Cotton",
    delivery: "Delivery in 5-7 business days",
  },
];

export default function TShirtProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="text-teal-600 text-lg font-semibold hover:underline">
          ← Back to Home
        </Link>
      </header>

      {/* Title Section */}
      <section className="container mx-auto px-4 mb-8">
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">Custom T-Shirts</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our collection of unique T-shirt designs. Pick your favorite or
          customize your own. Sizes available: S, M, L, XL, XXL.
        </p>
      </section>

      {/* T-Shirt Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {tShirtDesigns.map((shirt) => (
          <div key={shirt.id} className="border rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={shirt.image}
                alt={shirt.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{shirt.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{shirt.description}</p>
              <p className="text-sm text-gray-600">Material: {shirt.material}</p>
              <p className="text-sm text-gray-600">Sizes: {shirt.sizes.join(", ")}</p>
              <p className="text-sm text-gray-600">Colors: {shirt.colors.join(", ")}</p>
              <p className="text-sm text-gray-600 mb-2">{shirt.delivery}</p>
              <p className="text-teal-600 font-bold mb-4">{shirt.price}</p>
              <a
                href={`https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                  shirt.name
                )}%20T-shirt!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition text-sm"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
