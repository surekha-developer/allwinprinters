"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Tag, ChevronLeft, ChevronRight } from "lucide-react";

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
    comments: "No Comments",
    slug: "uv-balancing-rubber-roller",
  },
  {
    title: "What Products and Services Can Better Support Your Career Growth?",
    date: "2021-06-21",
    image: "/images/newsImages/imgi_13_20210621-1624237320136126.jpg",
    category: "Industry News",
    comments: "No Comments",
    slug: "products-services-career-growth",
  },
  {
    title: "Solutions to Sudden Shutdown Issues During High-Precision Printing",
    date: "2021-06-21",
    image: "/images/newsImages/imgi_14_20210621-1624237321279534.jpg",
    category: "Support",
    comments: "No Comments",
    slug: "sudden-shutdown-solutions",
  },
];

export default function NewsHero() {
  const [current, setCurrent] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= articles.length - visibleSlides ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? articles.length - visibleSlides : prev - 1
    );
  };

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-main">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 border-b pb-8 border-gray-200">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-blue-600 font-bold mb-3">
              Latest Insights
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Articles</span>
            </h3>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-none border border-gray-200 bg-white flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateX(-${(100 / visibleSlides) * current}%)`,
            }}
          >
            {articles.map((item, i) => (
              <div
                key={i}
                className={`px-4 flex-shrink-0 w-full ${
                  visibleSlides === 3
                    ? "lg:w-1/3"
                    : visibleSlides === 2
                    ? "sm:w-1/2"
                    : ""
                }`}
              >
                <Link href={`/news/${item.slug}`} className="block h-full group">
                  <div className="bg-white rounded-none border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                    
                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Overlay */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-black uppercase tracking-wider rounded-full shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                        <span>{new Date(item.date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <div className="flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5" />
                          {item.comments}
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      
                      {/* <div className="mt-auto pt-4 flex items-center gap-2 text-blue-600 font-bold text-sm">
                        Read More 
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
