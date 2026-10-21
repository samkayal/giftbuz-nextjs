import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.jpg"
                alt="Giftbuz Logo"
                width={75}
                height={75}
              />
            </Link>
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                Blog
              </Link>
              {/* Reviews Link in Navigation */}
              <Link
                href="/reviews"
                className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-1"
              >
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                Reviews
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919674621338?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20products!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 font-medium"
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
            className="object-cover rounded-lg"
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
            { src: "/tshirt_1.jpg", text: "Custom T-Shirt", path: "/products/tshirt" },
            { src: "/sipper.jpg", text: "Custom Sipper", path: "/products/sipper" },
            { src: "/photo.webp", text: "Custom Photo Frame", path: "/products/photo-frame" },
            { src: "/keychains.webp", text: "Custom Keyring", path: "/products/keyring" },
            { src: "/sticker.jpg", text: "Custom Sticker", path: "/products/sticker" },
            { src: "/cupps.png", text: "Custom Cup", path: "/products/cup" },
            { src: "/Fridge-magnate.jpg", text: "Custom Fridge-Magnate", path: "/products/Fridge-magnate" },
            { src: "/coaster .jpg", text: "Custom Coaster", path: "/products/coaster" },
            { src: "/id card.jpg", text: "Custom Id-card", path: "/products/id-card" },
          ].map((product, index) => (
            <Link
              key={index}
              href={product.path}
              className="relative h-64 group overflow-hidden rounded-lg shadow-sm"
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

        {/* Google Reviews Showcase Preview */}
        <div className="mb-16 bg-neutral-50 rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow font-bold text-xl text-blue-600 border">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-lg text-gray-900">Google Customer Reviews</span>
                <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="font-bold text-gray-900">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(120+ happy customer reviews)</span>
              </div>
            </div>
          </div>
          <Link
            href="/reviews"
            className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition shadow-sm text-center"
          >
            Read All Reviews &rarr;
          </Link>
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
      <footer className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900 border-t">
        <div>
          <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
          <a
            href="https://wa.me/919674621338?text=Hi%2C%20I%20want%20to%20know%20about%20your%20custom%20products!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:underline"
          >
            Message us on WhatsApp
          </a>
          <p className="mt-2">Kolkata</p>
          <p className="mt-2">+91 9674621338</p>
          <p>giftbuz.in@gmail.com</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-medium mb-4">Quick Links & Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8">
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
              <li>
                <Link href="/products/Fridge-magnate" className="hover:underline text-gray-900">
                  Custom Fridge-Magnate
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
                <Link href="/products/sticker" className="hover:underline text-gray-900">
                  Custom Sticker
                </Link>
              </li>
              <li>
                <Link href="/products/coaster" className="hover:underline text-gray-900">
                  Custom Coaster
                </Link>
              </li>
              <li>
                <Link href="/products/id-card" className="hover:underline text-gray-900">
                  Custom ID-Card
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 mt-4 md:mt-0">
              <li>
                <Link href="/reviews" className="hover:underline text-teal-600 font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  Google Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
