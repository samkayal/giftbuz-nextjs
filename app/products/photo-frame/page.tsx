import Image from "next/image";
import Link from "next/link";

type PhotoFrameDesign = {
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

const photoFrameDesigns: PhotoFrameDesign[] = [
  {
    id: 1,
    name: "Classic Wooden Frame",
    description: "Elegant wooden frame perfect for home décor.",
    image: "/frames/wooden.jpg",
    price: "₹799",
    sizes: ["5x7", "8x10", "11x14"],
    colors: ["Brown", "Black"],
    material: "Premium Wood",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 2,
    name: "Modern Metal Frame",
    description: "Sleek metal design with a modern touch.",
    image: "/frames/metal.jpg",
    price: "₹999",
    sizes: ["5x7", "8x10", "11x14"],
    colors: ["Silver", "Black"],
    material: "Stainless Steel",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 3,
    name: "Rustic Vintage Frame",
    description: "Vintage vibes for your precious memories.",
    image: "/frames/vintage.jpg",
    price: "₹899",
    sizes: ["5x7", "8x10", "11x14"],
    colors: ["Rustic Brown"],
    material: "Reclaimed Wood",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 4,
    name: "Minimalist White Frame",
    description: "Simple, clean and aesthetic white frame.",
    image: "/frames/white.jpg",
    price: "₹749",
    sizes: ["5x7", "8x10", "11x14"],
    colors: ["White"],
    material: "MDF Board",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 5,
    name: "Double Photo Frame",
    description: "Display two photos side-by-side beautifully.",
    image: "/frames/double.jpg",
    price: "₹1099",
    sizes: ["8x10", "11x14"],
    colors: ["Black", "Brown"],
    material: "Wood & Glass",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 6,
    name: "Floral Designer Frame",
    description: "Decorative floral patterns for a charming look.",
    image: "/frames/floral.jpg",
    price: "₹849",
    sizes: ["5x7", "8x10"],
    colors: ["White Floral", "Pastel Pink"],
    material: "Polyresin",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 7,
    name: "Collage Photo Frame",
    description: "Showcase multiple memories in one frame.",
    image: "/frames/collage.jpg",
    price: "₹1299",
    sizes: ["Multi-size collage"],
    colors: ["Black", "White"],
    material: "Plastic & Glass",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 8,
    name: "Custom Engraved Frame",
    description: "Personalize it with names or dates engraved!",
    image: "/frames/custom.jpg",
    price: "From ₹1199",
    sizes: ["5x7", "8x10", "11x14"],
    colors: ["Natural Wood"],
    material: "Solid Wood",
    delivery: "Delivery in 5-7 business days",
  },
];

export default function PhotoFrameProductPage() {
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
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">Custom Photo Frames</h1>
        <p className="text-gray-600 max-w-2xl">
          Find the perfect frame for your best memories. Multiple sizes and designs available!
        </p>
      </section>

      {/* Frame Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {photoFrameDesigns.map((frame) => (
          <div key={frame.id} className="border rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={frame.image}
                alt={frame.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{frame.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{frame.description}</p>
              <p className="text-sm text-gray-600">Material: {frame.material}</p>
              <p className="text-sm text-gray-600">Sizes: {frame.sizes.join(", ")}</p>
              <p className="text-sm text-gray-600">Colors: {frame.colors.join(", ")}</p>
              <p className="text-sm text-gray-600 mb-2">{frame.delivery}</p>
              <p className="text-teal-600 font-bold mb-4">{frame.price}</p>
              <a
                href={`https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                  frame.name
                )}%20Photo%20Frame!`}
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
