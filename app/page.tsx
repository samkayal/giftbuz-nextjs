# GiftBuz Home Page Component (Next.js)

```tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Logo.png" alt="GiftBuz Logo" width={60} height={60} />
          </Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            <a
              href="https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20know%20about%20your%20custom%20products!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 flex items-center gap-1"
            >
              Contact Us <MessageCircle className="h-5 w-5 text-teal-500" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Image */}
      <section className="relative h-[400px] w-full">
        <div className="relative w-full h-full">
          <Image
            src="/header_img.jpg"
            alt="Custom T-Shirt Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Intro Text */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-semibold mb-4">
          At GiftBuz, we do all kinds of custom work!
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          From stylish t-shirts to personalized gifts like mugs, sippers, keychains,
          and more – we’re your one-stop custom shop based in vibrant Kolkata.
        </p>
      </section>

      {/* T-Shirt Catalog */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Custom T-Shirt Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...].map((product, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">High-quality custom print tee.</p>
                <p className="font-bold mt-2">{product.price}</p>
                <Link
                  href="https://www.giftbuz.com/products/tshirt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 mt-20 py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Kolkata, India</p>
            <p>+91 9674621337</p>
            <p>skayal.kol@gmail.com</p>
            <a
              href="https://wa.me/919674621337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Message on WhatsApp
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Order Now</h2>
            <ul className="space-y-2">
              {["T-Shirt", "Sipper", "Photo Frame", "Cup", "Keyring", "Bracelet"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/products/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:underline text-gray-800"
                  >
                    Custom {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">About GiftBuz</h2>
            <p className="text-gray-700">
              We believe every gift tells a story. Whether it's for a loved one or for
              business branding, we deliver creativity and quality in every custom order.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10 text-sm">
          &copy; {new Date().getFullYear()} GiftBuz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Logo.png" alt="GiftBuz Logo" width={60} height={60} />
          </Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/blog" className="hover:text-blue-500">Blog</Link>
            <a
              href="https://wa.me/919674621337?text=Hi%2C%20I%20want%20to%20know%20about%20your%20custom%20products!"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 flex items-center gap-1"
            >
              Contact Us <MessageCircle className="h-5 w-5 text-teal-500" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Image */}
      <section className="relative h-[400px] w-full">
        <div className="relative w-full h-full">
          <Image
            src="/header_img.jpg"
            alt="Custom T-Shirt Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Intro Text */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-semibold mb-4">
          At GiftBuz, we do all kinds of custom work!
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          From stylish t-shirts to personalized gifts like mugs, sippers, keychains,
          and more – we’re your one-stop custom shop based in vibrant Kolkata.
        </p>
      </section>

      {/* T-Shirt Catalog */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Custom T-Shirt Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Graphic Tee", price: "$19.99", img: "/tshirt1.jpg" },
            { title: "Minimal Logo Tee", price: "$14.99", img: "/tshirt2.jpg" },
            { title: "Custom Name Tee", price: "$24.99", img: "/tshirt3.jpg" },
            { title: "Sports Jersey Tee", price: "$29.99", img: "/tshirt4.jpg" },
            { title: "Retro Vibes Tee", price: "$21.99", img: "/tshirt5.jpg" },
          ].map((product, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">High-quality custom print tee.</p>
                <p className="font-bold mt-2">{product.price}</p>
                <Link
                  href="https://www.giftbuz.com/products/tshirt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 mt-20 py-12 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Kolkata, India</p>
            <p>+91 9674621337</p>
            <p>skayal.kol@gmail.com</p>
            <a
              href="https://wa.me/919674621337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Message on WhatsApp
            </a>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Order Now</h2>
            <ul className="space-y-2">
              {["T-Shirt", "Sipper", "Photo Frame", "Cup", "Keyring", "Bracelet"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/products/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:underline text-gray-800"
                  >
                    Custom {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">About GiftBuz</h2>
            <p className="text-gray-700">
              We believe every gift tells a story. Whether it's for a loved one or for
              business branding, we deliver creativity and quality in every custom order.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10 text-sm">
          &copy; {new Date().getFullYear()} GiftBuz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
