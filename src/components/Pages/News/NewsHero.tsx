

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { MessageCircle, Tag } from "lucide-react";

// type Article = {
//   title: string;
//   date: string;
//   image: string;
//   category: string;
//   comments: string;
//   slug: string;
// };

// const articles: Article[] = [
//   {
//     title: "Cyber Warfare in Modern Conflicts: The Digital Battle Between Nations",
//     date: "2026-03-09",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     category: "Cyber Security",
//     comments: "No Comments",
//     slug: "cyber-warfare",
//   },
//   {
//     title: "The Future of Remote Teams in Offshore Talent: How They Improve Digital Delivery",
//     date: "2026-03-02",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     category: "Cyber Security",
//     comments: "No Comments",
//     slug: "remote-teams",
//   },
//   {
//     title: "A New Way to Keep Digital Businesses Safe with Zero Trust Security",
//     date: "2026-02-23",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     category: "Cyber Security",
//     comments: "Comments Off",
//     slug: "zero-trust-security",
//   },
// ];

// export default function NewsHero() {
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
//             Our News Updates
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900">
//             Latest Blog Updates
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((item, i) => (
//             <Link key={i} href={`/news/${item.slug}`} className="h-full">

//               {/* Card */}
//               <div className="group relative border bg-white overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">

//                 {/* Shine Effect (Left → Right) */}
//                 <div className="absolute inset-0 pointer-events-none">
//                   <div className="absolute top-0 left-0 h-full w-1/2 
//                     bg-gradient-to-r from-transparent via-white/70 to-transparent 
//                     -translate-x-full group-hover:translate-x-[200%] 
//                     transition-transform duration-700 ease-in-out" />
//                 </div>

//                 {/* Image */}
//                 <div className="relative">
//                   <div className="relative h-56 w-full">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   {/* Date Badge */}
// <div className="absolute bottom-3 left-3 text-white text-xs px-3 py-1 font-semibold rounded-md btn-gradient">
//   {new Date(item.date).toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   })}
// </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 flex flex-col flex-grow">

//                   {/* Meta */}
//                   <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//                     <div className="flex items-center gap-1">
//                       <MessageCircle className="w-4 h-4" />
//                       {item.comments}
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Tag className="w-4 h-4" />
//                       {item.category}
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-600 transition flex-grow">
//                     {item.title}
//                   </h3>

//                 </div>

//               </div>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

//.......

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MessageCircle, Tag, ChevronLeft, ChevronRight } from "lucide-react";

// type Article = {
//   title: string;
//   date: string;
//   image: string;
//   category: string;
//   comments: string;
//   slug: string;
// };

// const articles: Article[] = [
//   { title: "Cyber Warfare", date: "2026-03-09", image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png", category: "Cyber", comments: "No Comments", slug: "cyber" },
//   { title: "Remote Teams", date: "2026-03-02", image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png", category: "Tech", comments: "No Comments", slug: "remote" },
//   { title: "Zero Trust", date: "2026-02-23", image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png", category: "Security", comments: "Comments Off", slug: "zero" },
//   { title: "AI Security", date: "2026-02-15", image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png", category: "AI", comments: "2 Comments", slug: "ai" },
//   { title: "Cloud Trends", date: "2026-02-10", image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png", category: "Cloud", comments: "5 Comments", slug: "cloud" },
// ];

// export default function NewsHero() {
//   const [current, setCurrent] = useState(0);
//   const [visibleSlides, setVisibleSlides] = useState(3);

//   // ✅ Responsive slides (same as testimonial)
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setVisibleSlides(1);
//       else if (window.innerWidth < 1024) setVisibleSlides(2);
//       else setVisibleSlides(3);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ Next
//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev >= articles.length - visibleSlides ? 0 : prev + 1
//     );
//   };

//   // ✅ Prev
//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? articles.length - visibleSlides : prev - 1
//     );
//   };

//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Header */}
//         <div className="text-center mb-14">
//           <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
//             Our News Updates
//           </p>
//           <h2 className="text-4xl font-bold text-gray-900">
//             Latest Blog Updates
//           </h2>
//         </div>

//         {/* Arrows */}
//         <div className="flex justify-end gap-3 mb-6">
//           <button onClick={prevSlide} className="w-10 h-10 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100">
//             <ChevronLeft size={20} />
//           </button>
//           <button onClick={nextSlide} className="w-10 h-10 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100">
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* Slider */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${(100 / visibleSlides) * current}%)`,
//             }}
//           >
//             {articles.map((item, i) => (
//               <div
//                 key={i}
//                 className={`px-3 flex-shrink-0 w-full ${
//                   visibleSlides === 3
//                     ? "lg:w-1/3"
//                     : visibleSlides === 2
//                     ? "sm:w-1/2"
//                     : ""
//                 }`}
//               >
//                 <Link href={`/news/${item.slug}`}>

//                   {/* ✅ SAME UI AS YOUR CARD */}
//                   <div className="group relative border bg-white overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">

//                     {/* Shine Effect */}
//                     <div className="absolute inset-0 pointer-events-none">
//                       <div className="absolute top-0 left-0 h-full w-1/2 
//                         bg-gradient-to-r from-transparent via-white/70 to-transparent 
//                         -translate-x-full group-hover:translate-x-[200%] 
//                         transition-transform duration-700 ease-in-out" />
//                     </div>

//                     {/* Image */}
//                     <div className="relative h-56 w-full">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         className="object-cover"
//                       />

//                       {/* Date */}
//                       <div className="absolute bottom-3 left-3 text-white text-xs px-3 py-1 font-semibold rounded-md bg-blue-600">
//                         {new Date(item.date).toLocaleDateString("en-GB", {
//                           day: "2-digit",
//                           month: "short",
//                           year: "numeric",
//                         })}
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-5 flex flex-col flex-grow">
//                       <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//                         <div className="flex items-center gap-1">
//                           <MessageCircle className="w-4 h-4" />
//                           {item.comments}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Tag className="w-4 h-4" />
//                           {item.category}
//                         </div>
//                       </div>

//                       <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-600 transition flex-grow">
//                         {item.title}
//                       </h3>
//                     </div>

//                   </div>

//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

//.........

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
    title: "Cyber Warfare in Modern Conflicts: The Digital Battle Between Nations",
    date: "2026-03-09",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cyber Security",
    comments: "No Comments",
    slug: "cyber-warfare",
  },
  {
    title: "The Future of Remote Teams in Offshore Talent",
    date: "2026-03-02",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cyber Security",
    comments: "No Comments",
    slug: "remote-teams",
  },
  {
    title: "Zero Trust Security",
    date: "2026-02-23",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cyber Security",
    comments: "Comments Off",
    slug: "zero-trust-security",
  },
  {
    title: "AI Security Trends",
    date: "2026-02-15",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "AI",
    comments: "2 Comments",
    slug: "ai-security",
  },
  {
    title: "Cloud Security Updates",
    date: "2026-02-10",
    image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
    category: "Cloud",
    comments: "5 Comments",
    slug: "cloud-security",
  },
];

export default function BlogPreview() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Our News Updates
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Latest Blog Updates
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slider (instead of grid) */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(100 / visibleSlides) * current}%)`,
            }}
          >
            {articles.map((item, i) => (
              <div
                key={i}
                className={`px-3 flex-shrink-0 w-full ${
                  visibleSlides === 3
                    ? "lg:w-1/3"
                    : visibleSlides === 2
                    ? "sm:w-1/2"
                    : ""
                }`}
              >
                <Link href={`/news/${item.slug}`} className="h-full">

                  {/* ✅ YOUR EXACT CARD UI (UNCHANGED) */}
                  <div className="group relative border bg-white overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">

                    {/* Shine Effect */}
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

                      <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-3 group-hover:text-blue-600 transition flex-grow">
                        {item.title}
                      </h3>
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