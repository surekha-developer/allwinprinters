

"use client";

import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";

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
    title: "ALLWIN Patented Technology Nozzle Laser Detection and Alignment",
    date: "2024-03-25",
    image: "/images/newsImages/imgi_10_20240325-1711334925197217.png",
    category: "Company News",
    comments: "No Comments",
    slug: "patented-nozzle-laser-detection",
  },
  {
    title: "Understanding the Difference Between UV Inkjet and Ordinary Inkjet Printers",
    date: "2021-06-21",
    image: "/images/newsImages/imgi_11_20210621-1624237318231597.jpg",
    category: "Industry News",
    comments: "No Comments",
    slug: "uv-vs-ordinary-inkjet",
  },
  {
    title: "Independent R&D: New UV Balancing Rubber Roller Technology",
    date: "2021-06-21",
    image: "/images/newsImages/imgi_12_20210621-1624237319902806.jpg",
    category: "Technology",
    comments: "Comments Off",
    slug: "uv-balancing-rubber-roller",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">

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
                    {/* <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {item.comments}
                    </div> */}
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