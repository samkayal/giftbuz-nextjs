"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MessageCircle, ExternalLink, CheckCircle, Plus } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatar?: string; // Optional image: renders if present, falls back to initials
  rating: number;
  date: string;
  comment: string;
  productBought?: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Soumya Mukherjee",
    rating: 5,
    date: "1 week ago",
    comment: "Ordered customized coffee mugs and a sipper for my team in Kolkata. The print quality is top-notch, crisp colors, and timely delivery!",
    productBought: "Custom Cup & Sipper"
  },
  {
    id: 2,
    name: "Pooja Roy",
    rating: 5,
    date: "2 weeks ago",
    comment: "The photo frame customized for our anniversary was beyond beautiful! GiftBuz was very polite on WhatsApp and responded promptly.",
    productBought: "Custom Photo Frame"
  },
  {
    id: 3,
    name: "Debanjan Sen",
    rating: 5,
    date: "a month ago",
    comment: "Got custom company ID cards and fridge magnets printed. Clear quality and very reasonable prices compared to other places.",
    productBought: "Custom ID-Card & Magnets"
  },
  {
    id: 4,
    name: "Ananya Banerjee",
    rating: 5,
    date: "a month ago",
    comment: "T-shirt fabric quality is superb! The print did not fade even after 3 washes. Highly recommended for personalized gifting.",
    productBought: "Custom T-Shirt"
  },
  {
    id: 5,
    name: "Rajesh Sharma",
    rating: 4,
    date: "2 months ago",
    comment: "Great experience! Customized keyrings and coasters delivered securely packed. Minor delivery delay by 1 day, but product quality covered it.",
    productBought: "Custom Keyring & Coasters"
  }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State for adding a new review
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
      avatar: avatarUrl.trim() || undefined, // If an image link is provided, it will display
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setProductBought("");
    setAvatarUrl("");
    setShowAddForm(false);
  };

  const averageRating = (
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  ).toFixed(1);

  // Helper to generate initials when no image is present
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header without images */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
              Gift<span className="text-teal-600">Buz</span>
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
        <div className="bg-white p-8 rounded-2xl shadow-sm border mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Customer Reviews</h1>
            <p className="text-gray-500 mt-1">Real ratings & reviews from Google verified customers</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
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
                  Based on {reviews.length} reviews
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-3 rounded-xl transition shadow"
            >
              <Plus className="w-4 h-4" />
              Add Review
            </button>

            <a
              href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition shadow"
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
            className="bg-white p-6 rounded-2xl shadow-sm border mb-10 space-y-4"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Customized (optional)</label>
                <input
                  type="text"
                  value={productBought}
                  onChange={(e) => setProductBought(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                  placeholder="e.g. Custom Mug, T-Shirt"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optional)</label>
                <input
                  type="url"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                  placeholder="Paste profile photo URL if any"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Review Comment *</label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-teal-600"
                placeholder="Share your experience with GiftBuz..."
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium"
              >
                Post Review
              </button>
            </div>
          </form>
        )}

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* User Info Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Conditionally renders an image if one was provided in the review, otherwise renders styled initial badge */}
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover border"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm border border-teal-200">
                        {getInitials(item.name)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center gap-1.5">
                        {item.name}
                        <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-50" />
                      </h3>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                  </div>

                  <span className="text-xs font-bold bg-neutral-100 text-blue-600 px-2.5 py-1 rounded-md border">
                    Google
                  </span>
                </div>

                {/* Star Rating Display */}
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

                {/* Comment Text */}
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
