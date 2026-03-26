

"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Tag } from "lucide-react";

type Article = {
  title: string;
  date: string;
  image: string;
  category: string;
  comments: string;
  slug: string;
};

const articles: Article[] = [
  {
    title: "Cyber Warfare in Modern Conflicts: The Digital Battle Between Nations",
    date: "2026-03-09",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cyber Security",
    comments: "No Comments",
    slug: "cyber-warfare",
  },
  {
    title: "The Future of Remote Teams in Offshore Talent: How They Improve Digital Delivery",
    date: "2026-03-02",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cyber Security",
    comments: "No Comments",
    slug: "remote-teams",
  },
  {
    title: "A New Way to Keep Digital Businesses Safe with Zero Trust Security",
    date: "2026-02-23",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cyber Security",
    comments: "Comments Off",
    slug: "zero-trust-security",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Our News Updates
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Latest Blog Updates
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`} className="h-full">

              {/* Card */}
              <div className="group relative border bg-white overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">

                {/* Shine Effect (Left → Right) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 h-full w-1/2 
                    bg-gradient-to-r from-transparent via-white/70 to-transparent 
                    -translate-x-full group-hover:translate-x-[200%] 
                    transition-transform duration-700 ease-in-out" />
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative h-56 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Date Badge */}
<div className="absolute bottom-3 left-3 text-white text-xs px-3 py-1 font-semibold rounded-md btn-gradient">
  {new Date(item.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}
</div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {item.comments}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {item.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-600 transition flex-grow">
                    {item.title}
                  </h3>

                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}