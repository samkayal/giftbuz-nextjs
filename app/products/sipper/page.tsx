import Image from "next/image";
import Link from "next/link";

type SipperDesign = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  capacity: string;
  material: string;
  delivery: string;
};

const sipperDesigns: SipperDesign[] = [
  {
    id: 1,
    name: "Classic White Sipper",
    description: "Elegant white sipper perfect for everyday use.",
    image: "/sippers/classic-white.jpg",
    price: "₹349",
    capacity: "750ml",
    material: "Stainless Steel",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 2,
    name: "Adventure Seeker",
    description: "Durable sipper for your trekking and travel adventures.",
    image: "/sippers/adventure.jpg",
    price: "₹399",
    capacity: "800ml",
    material: "Aluminium",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 3,
    name: "Minimalist Matte Black",
    description: "Sleek black finish for a minimal and stylish look.",
    image: "/sippers/matte-black.jpg",
    price: "₹379",
    capacity: "750ml",
    material: "Stainless Steel",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 4,
    name: "Floral Print",
    description: "Vibrant floral design to brighten your day.",
    image: "/sippers/floral.jpg",
    price: "₹429",
    capacity: "700ml",
    material: "Aluminium",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 5,
    name: "Custom Photo Sipper",
    description: "Upload your photo or logo for a personalized sipper!",
    image: "/sippers/custom-photo.jpg",
    price: "₹499",
    capacity: "750ml",
    material: "Stainless Steel",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 6,
    name: "Space Explorer",
    description: "Galaxy-themed sipper for all space lovers.",
    image: "/sippers/space.jpg",
    price: "₹449",
    capacity: "800ml",
    material: "Aluminium",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 7,
    name: "Fitness Edition",
    description: "Lightweight and easy-to-carry fitness sipper.",
    image: "/sippers/fitness.jpg",
    price: "₹399",
    capacity: "750ml",
    material: "Stainless Steel",
    delivery: "Delivery in 5-7 business days",
  },
  {
    id: 8,
    name: "Birthday Special",
    description: "Perfect birthday gift with custom birthday graphics.",
    image: "/sippers/birthday.jpg",
    price: "₹459",
    capacity: "750ml",
    material: "Aluminium",
    delivery: "Delivery in 5-7 business days",
  },
];

export default function SipperProductPage() {
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
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">Custom Sipper Bottles</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our stylish and customizable sippers. Perfect for personal use or gifting! Capacity available: 700ml - 800ml.
        </p>
      </section>

      {/* Sipper Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16">
        {sipperDesigns.map((sipper) => (
          <div key={sipper.id} className="border rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={sipper.image}
                alt={sipper.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{sipper.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{sipper.description}</p>
              <p className="text-sm text-gray-600">Material: {sipper.material}</p>
              <p className="text-sm text-gray-600">Capacity: {sipper.capacity}</p>
              <p className="text-sm text-gray-600 mb-2">{sipper.delivery}</p>
              <p className="text-teal-600 font-bold mb-4">{sipper.price}</p>
              <a
                href={`https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                  sipper.name
                )}%20Sipper!`}
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
