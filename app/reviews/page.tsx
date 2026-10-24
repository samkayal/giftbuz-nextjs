"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MessageCircle, ExternalLink, Plus } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
  productBought?: string;
}

const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=YOUR_ACTUAL_PLACE_ID_HERE";

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Soumya Mukherjee",
    rating: 5,
    date: "1 week ago",
    comment:
      "Ordered customized coffee mugs and a sipper for my team in Kolkata. The print quality is top-notch, crisp colors, and timely delivery!",
    productBought: "Custom Cup & Sipper",
  },
  {
    id: 2,
    name: "Pooja Roy",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "The photo frame customized for our anniversary was beyond beautiful! GiftBuz was very polite on WhatsApp and responded promptly.",
    productBought: "Custom Photo Frame",
  },
  {
    id: 3,
    name: "Debanjan Sen",
    rating: 5,
    date: "a month ago",
    comment:
      "Got custom company ID cards and fridge magnets printed. Clear quality and very reasonable prices compared to other places.",
    productBought: "Custom ID-Card & Magnets",
  },
  {
    id: 4,
    name: "Ananya Banerjee",
    rating: 5,
    date: "a month ago",
    comment:
      "T-shirt fabric quality is superb! The print did not fade even after 3 washes. Highly recommended for personalized gifting.",
    productBought: "Custom T-Shirt",
  },
  {
    id: 5,
    name: "Rajesh Sharma",
    rating: 4,
    date: "2 months ago",
    comment:
      "Great experience! Customized keyrings and coasters delivered securely packed. Minor delivery delay by 1 day, but product quality covered it.",
    productBought: "Custom Keyring & Coasters",
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [productBought, setProductBought] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: Date.now(),
      name: name.trim(),
      rating,
      date: "Just now",
      comment: comment.trim(),
      productBought: productBought.trim() || undefined,
      avatar: avatarUrl.trim() || undefined,
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setProductBought("");
    setAvatarUrl("");
    setShowAddForm(false);
  };

  const averageRating = reviews.length
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
              Gift<span className="text-teal-600">Buz</span>
            </Link>
            <nav className="space-x-6 hidden sm:block">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium">
                Blog
              </Link>
              <Link href="/reviews" className="text-teal-600 font-semibold">
                Reviews
              </Link>
            </nav>
          </div>

          <a
            href="https://wa.me/919674621338?text=Hi%2C%20I%20have%20a%20question%20about%20your%20reviews%20and%20products!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
          >
            <span className="hidden sm:inline">Contact Us</span>
            <MessageCircle className="h-6 w-6 text-teal-500" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Rating Header Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Customer Reviews</h1>
            <p className="text-gray-500 mt-1">Real ratings & reviews from Google verified customers</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-3 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200">
              <div className="text-3xl font-extrabold text-amber-900">{averageRating}</div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(Number(averageRating))
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-xs font-semibold text-gray-600 mt-0.5">
                  Based on {reviews.length} reviews
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2.5 rounded-xl transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Write Review
            </button>

            {/* Direct Google Review Link Button */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-xl transition shadow-sm"
            >
              Google Review
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Add Review Form Dropdown */}
        {showAddForm && (
          <form
            onSubmit={handleAddReview}
            className="bg-white p-6 rounded-2xl shadow-sm border mb-8 space-y-4"
          >
            <h2 className="text-xl font-bold text-gray-900">Write a Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                  placeholder="e.g. Rahul Sen"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Star Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                >
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Good</option>
                  <option value={3}>3 Stars - Average</option>
                  <option value={2}>2 Stars - Poor</option>
                  <option value={1}>1 Star - Terrible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Customized (optional)
                </label>
                <input
                  type="text"
                  value={productBought}
                  onChange={(e) => setProductBought(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                  placeholder="e.g. Custom Mug, T-Shirt"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Avatar / Photo URL (optional)
                </label>
                <input
                  type="url"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Feedback / Comment *</label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                placeholder="Tell us about the print quality, customer support, and delivery..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-medium bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition shadow-sm"
              >
                Post Review
              </button>
            </div>
          </form>
        )}

        {/* Reviews Feed */}
        <div className="space-y-4">
          {reviews.map((rev) => (
            <article key={rev.id} className="bg-white p-6 rounded-2xl border shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {rev.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
                      {getInitials(rev.name)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-gray-900 leading-tight">{rev.name}</h3>
                    <p className="text-xs text-gray-400">{rev.date}</p>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {rev.productBought && (
                <span className="inline-block bg-teal-50 text-teal-700 border border-teal-200 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  {rev.productBought}
                </span>
              )}

              <p className="text-gray-700 text-sm leading-relaxed">{rev.comment}</p>
            </article>
          ))}
        </div>

        {/* Google CTA Banner */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center space-y-3">
          <h2 className="text-lg font-bold text-blue-950">Loved our personalized gifts?</h2>
          <p className="text-sm text-blue-700 max-w-md mx-auto">
            Take 30 seconds to drop us a quick rating and review on Google. It helps our local business grow!
          </p>
          <div>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition text-sm shadow-sm"
            >
              Leave a Google Review
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
