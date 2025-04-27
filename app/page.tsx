import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.png"
                alt="Giftbuz Logo"
                width={75}
                height={75}
              />
            </Link>
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919674621337?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20products!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Contact Us
            </a>
            <MessageCircle className="h-6 w-6 text-teal-500" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative h-[450px] w-full">
          <Image
            src="/header_img.jpg"
            alt="Custom T-shirt with beach sunset design"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-medium mb-6 text-gray-900">
          At GiftBuz, we do all kinds of custom work!
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Your one-stop destination for personalized gifting solutions! Based in
          the vibrant city of Kolkata, we specialize in custom printing on a
          wide range of products like t-shirts, cups, water bottles, sippers,
          bracelets, photo frames, keyrings, and so much more.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { src: "/tshirt_1.jpg", text: "custom t-shirt", path: "/products/tshirt" },
            { src: "/sipper.jpg", text: "custom sipper", path: "/products/sipper" },
            { src: "/photo.webp", text: "custom photo frame", path: "/products/photo-frame" },
            { src: "/keychains.webp", text: "custom keyring", path: "/products/keyring" },
            { src: "/sticker.jpg", text: "custom sticker", path: "/products/sticker" },
            { src: "/cupps.png", text: "custom cup", path: "/products/cup" },
            { src: "/Fridge-magnate.jpg", text: "custom Fridge-magnate", path: "/products/Fridge-magnate" },
            { src: "/coaster .png", text: "custom coaster ", path: "/products/coaster " },
            { src: "/id card .png", text: "custom id card ", path: "/products/id-card " },   
          ].map((product, index) => (
            <Link
              key={index}
              href={product.path}
              className="relative h-64 group"
            >
              <Image
                src={product.src}
                alt={product.text}
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {product.text}
              </div>
            </Link>
          ))}
        </div>

        {/* Mission Statement */}
        <p className="text-center text-gray-900 max-w-3xl mx-auto mb-16">
          We believe every gift tells a story, and we&apos;re here to make yours
          truly unforgettable. Whether it&apos;s a heartfelt present for a loved
          one, a quirky keepsake for a friend, or branded merchandise for your
          business, we deliver creativity and quality with every order.
        </p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
        <div>
          <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
          <a
            href="https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20know%20about%20your%20custom%20products!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:underline"
          >
            Message us on WhatsApp
          </a>
          <p className="mt-2">Kolkata</p>
          <p className="mt-2">+91 9674621337</p>
          <p>skayal.kol@gmail.com</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-medium mb-4">Order Now</h2>
          <div className="grid grid-cols-2 gap-x-8">
            <ul className="space-y-2">
              <li>
                <Link href="/products/tshirt" className="hover:underline text-gray-900">
                  Custom T-Shirt
                </Link>
              </li>
              <li>
                <Link href="/products/sipper" className="hover:underline text-gray-900">
                  Custom Sipper
                </Link>
              </li>
              <li>
                <Link href="/products/photo-frame" className="hover:underline text-gray-900">
                  Custom Photo Frame
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link href="/products/cup" className="hover:underline text-gray-900">
                  Custom Cup
                </Link>
              </li>
              <li>
                <Link href="/products/keyring" className="hover:underline text-gray-900">
                  Custom Keyring
                </Link>
              </li>
              <li>
                <Link href="/products/bracelet" className="hover:underline text-gray-900">
                  Custom Bracelet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
