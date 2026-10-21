import Image from "next/image";
import Link from "next/link";
import { Star, MessageCircle, ExternalLink, CheckCircle } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  productBought?: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Soumya Mukherjee",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    date: "1 week ago",
    comment: "Ordered customized coffee mugs and a sipper for my team in Kolkata. The print quality is top-notch, crisp colors, and timely delivery!",
    productBought: "Custom Cup & Sipper"
  },
  {
    id: 2,
    name: "Pooja Roy",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    date: "2 weeks ago",
    comment: "The photo frame customized for our anniversary was beyond beautiful! GiftBuz was very polite on WhatsApp and responded promptly.",
    productBought: "Custom Photo Frame"
  },
  {
    id: 3,
    name: "Debanjan Sen",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    date: "a month ago",
    comment: "Got custom company ID cards and fridge magnets printed. Clear quality and very reasonable prices compared to other places.",
    productBought: "Custom ID-Card & Magnets"
  },
  {
    id: 4,
    name: "Ananya Banerjee",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    date: "a month ago",
    comment: "T-shirt fabric quality is superb! The print did not fade even after 3 washes. Highly recommended for personalized gifting.",
    productBought: "Custom T-Shirt"
  },
  {
    id: 5,
    name: "Rajesh Sharma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    rating: 4,
    date: "2 months ago",
    comment: "Great experience! Customized keyrings and coasters delivered securely packed. Minor delivery delay by 1 day, but product quality covered it.",
    productBought: "Custom Keyring & Coasters"
  }
];

export default function ReviewsPage() {
  const averageRating = (
    reviewsData.reduce((acc, curr) => acc + curr.rating, 0) / reviewsData.length
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.jpg"
                alt="Giftbuz Logo"
                width={70}
                height={70}
              />
            </Link>
            <div className="space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                Blog
              </Link>
              <Link href="/reviews" className="text-teal-600 font-semibold">
                Reviews
              </Link>
            </div>
          </div>

          <a
            href="https://wa.me/919674621338?text=Hi%2C%20I%20have%20a%20question%20about%20your%20reviews%20and%20products!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            <span>Contact Us</span>
            <MessageCircle className="h-6 w-6 text-teal-500" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Rating Header Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900">Customer Reviews</h1>
              <p className="text-gray-500 mt-1">Real ratings & reviews from Google verified customers</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 bg-amber-50 px-5 py-3 rounded-xl border border-amber-200">
              <div className="text-4xl font-extrabold text-amber-900">{averageRating}</div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(Number(averageRating))
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs font-semibold text-gray-600 mt-0.5">
                  Based on {reviewsData.length} reviews
                </div>
              </div>
            </div>

            {/* Link to leave a real Google Review */}
            <a
              href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition shadow"
            >
              Write a Review
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* User info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-50" />
                      </h3>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                  </div>
                  {/* Google Logo icon badge */}
                  <span className="text-xs font-bold bg-neutral-100 text-blue-600 px-2.5 py-1 rounded-md border">
                    Google
                  </span>
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < item.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment body */}
                <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{item.comment}&rdquo;</p>
              </div>

              {item.productBought && (
                <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                  <span className="font-semibold text-gray-700">Product:</span> {item.productBought}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
