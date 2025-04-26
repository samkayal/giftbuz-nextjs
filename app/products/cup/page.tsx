import Image from "next/image";
import Link from "next/link";

type CupDesign = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  capacity: string;
  colors: string[];
  material: string;
  delivery: string;
};

const cupDesigns: CupDesign[] = [
  {
    id: 1,
    name: "Custom Photo Mug",
    description: "Personalize with your favorite photo or logo!",
    image: "/cups/photo-mug.jpg",
    price: "₹299",
    capacity: "350ml",
    colors: ["White"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 2,
    name: "Magic Color Changing Mug",
    description: "Reveals your design when hot liquid is poured!",
    image: "/cups/magic-mug.jpg",
    price: "₹399",
    capacity: "330ml",
    colors: ["Black"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 3,
    name: "Minimalist Text Mug",
    description: "Simple, stylish design for everyday coffee.",
    image: "/cups/minimal-mug.jpg",
    price: "₹249",
    capacity: "300ml",
    colors: ["White", "Black"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 4,
    name: "Floral Art Mug",
    description: "Beautiful hand-drawn floral patterns.",
    image: "/cups/floral-mug.jpg",
    price: "₹349",
    capacity: "320ml",
    colors: ["White"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 5,
    name: "Couple Mugs Set",
    description: "Perfect for couples — two matching mugs!",
    image: "/cups/couple-mug.jpg",
    price: "₹599 (Set of 2)",
    capacity: "320ml each",
    colors: ["White"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 6,
    name: "Corporate Branding Mug",
    description: "Add your business logo for promotions.",
    image: "/cups/corporate-mug.jpg",
    price: "₹279",
    capacity: "350ml",
    colors: ["White", "Black"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 7,
    name: "Travel Thermo Mug",
    description: "Insulated mug perfect for travel.",
    image: "/cups/travel-mug.jpg",
    price: "₹499",
    capacity: "400ml",
    colors: ["Silver", "Black"],
    material: "Stainless Steel",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 8,
    name: "Custom Quote Mug",
    description: "Your favorite quote on a beautiful mug.",
    image: "/cups/quote-mug.jpg",
    price: "₹279",
    capacity: "330ml",
    colors: ["White"],
    material: "Ceramic",
    delivery: "Delivery in 5-7 business days",
  },
];

export default function CupProductPage() {
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
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">Custom Cups & Mugs</h1>
        <p className="text-gray-600 max-w-2xl">
          Browse our personalized cup collection. Customize it with your photo, logo, or favorite quote!
        </p>
      </section>

      {/* Cups Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {cupDesigns.map((cup) => (
          <div key={cup.id} className="border rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={cup.image}
                alt={cup.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{cup.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{cup.description}</p>
              <p className="text-sm text-gray-600">Material: {cup.material}</p>
              <p className="text-sm text-gray-600">Capacity: {cup.capacity}</p>
              <p className="text-sm text-gray-600">Colors: {cup.colors.join(", ")}</p>
              <p className="text-sm text-gray-600 mb-2">{cup.delivery}</p>
              <p className="text-teal-600 font-bold mb-4">{cup.price}</p>
              <a
                href={`https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                  cup.name
                )}%20Cup!`}
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
