import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-medium">
              giftbuz
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
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            <MessageCircle className="h-6 w-6 text-teal-500" />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative h-[500px] w-full">
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
          Your one-stop destination for personalized gifting solutions! Based in the vibrant city of Kolkata, 
          we specialize in custom printing on a wide range of products like t-shirts, cups, water bottles, 
          sippers, bracelets, photo frames, keyrings, and so much more.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="relative h-64">
            <Image
              src="/tshirt.jpg"
              alt="Custom T-shirt printing"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl font-medium text-gray-900">
              custom t-shirt
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/sipper.webp"
              alt="Custom sipper"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl font-medium text-gray-900">
              custom sipper
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/photo.webp"
              alt="Custom photo frame"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl font-medium text-gray-900">
              custom photo frame
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/keychains.webp"
              alt="Custom keyring"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl font-medium text-gray-900">
              custom keyring
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/bands.jpg"
              alt="Custom bracelet"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl font-medium text-gray-900">
              custom bracelet
            </div>
          </div>
          <div className="relative h-64">
            <Image
              src="/cupps.png"
              alt="Custom cup"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl font-medium text-gray-900">
              custom cup
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <p className="text-center text-gray-900 max-w-3xl mx-auto mb-16">
          We believe every gift tells a story, and we&apos;re here to make yours truly
          unforgettable. Whether it&apos;s a heartfelt present for a loved one, a quirky
          keepsake for a friend, or 
          branded merchandise for your business, we deliver creativity and quality with every order.
        </p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
        <div>
          <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
          <p className="mb-2">Kolkata</p>
          <p className="mb-2">+917384600989</p>
          <p>skayal.kol@gmail.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-4">Order Now</h2>
          <ul className="space-y-2">
            <li>Custom T-Shirt</li>
            <li>Custom Sipper</li>
            <li>Custom Photo Frame</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 mt-11">
            <li>Custom Cup</li>
            <li>Custom Keyring</li>
            <li>Custom Bracelet</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

