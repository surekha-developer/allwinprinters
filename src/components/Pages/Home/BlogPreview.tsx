// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Calendar } from "lucide-react";

// type Article = {
//   title: string;
//   date: string;
//   image: string;
//   summary: string;
//   slug: string;
// };

// const articles: Article[] = [
//   {
//     title: "New UV Flatbed Printer Series Launched",
//     date: "2025-12-15",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     summary:
//       "Introducing our next-generation UV flatbed printers with enhanced speed and print quality for industrial applications.",
//     slug: "uv-flatbed-launch",
//   },
//   {
//     title: "Allwin Technology at FESPA 2025",
//     date: "2025-11-20",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     summary:
//       "Join us at FESPA 2025 to explore our latest digital printing and cutting solutions.",
//     slug: "fespa-2025",
//   },
//   {
//     title: "Guide to Choosing the Right Solvent Printer",
//     date: "2025-10-10",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     summary:
//       "A comprehensive guide to selecting the best solvent printer for your advertising and signage business.",
//     slug: "solvent-printer-guide",
//   },
// ];

// export default function BlogPreview() {
//   return (
//     <section className="py-20 lg:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
//           <div>
//             <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
//               Resources
//             </p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
//               Latest News & Insights
//             </h2>
//           </div>

//           <Link href="/news">
//             <Button variant="outline" className="rounded-full">
//               View All Articles <ArrowRight className="ml-2 w-4 h-4" />
//             </Button>
//           </Link>
//         </div>

//         {/* Articles */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {articles.map((article, i) => (
//             <div
//               key={i}
//               className="group bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
//             >
//               {/* Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={article.image}
//                   alt={article.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
//                   <Calendar className="w-3 h-3" />
//                   {new Date(article.date).toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric",
//                   })}
//                 </div>

//                 <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
//                   {article.title}
//                 </h3>

//                 <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//                   {article.summary}
//                 </p>

//                 <Link href={`/news/${article.slug}`}>
//                   <Button
//                     variant="ghost"
//                     className="p-0 h-auto text-accent hover:text-accent/80 text-sm font-medium"
//                   >
//                     Read More <ArrowRight className="ml-1 w-3.5 h-3.5" />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

//..........

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Calendar } from "lucide-react";

// type Article = {
//   title: string;
//   date: string;
//   image: string;
//   summary: string;
//   slug: string;
// };

// const articles: Article[] = [
//   {
//     title: "New UV Flatbed Printer Series Launched",
//     date: "2025-12-15",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     summary:
//       "Introducing our next-generation UV flatbed printers with enhanced speed and print quality for industrial applications.",
//     slug: "uv-flatbed-launch",
//   },
//   {
//     title: "Allwin Technology at FESPA 2025",
//     date: "2025-11-20",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     summary:
//       "Join us at FESPA 2025 to explore our latest digital printing and cutting solutions.",
//     slug: "fespa-2025",
//   },
//   {
//     title: "Guide to Choosing the Right Solvent Printer",
//     date: "2025-10-10",
//     image: "https://horizontal-sapphire-dlaawjnibj.edgeone.app/p2-removebg-preview.png",
//     summary:
//       "A comprehensive guide to selecting the best solvent printer for your advertising and signage business.",
//     slug: "solvent-printer-guide",
//   },
// ];

// export default function BlogPreview() {
//   return (
//     <section className="py-20 lg:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
//           <div>
//             <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
//               Resources
//             </p>
//             <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
//               Latest News & Insights
//             </h2>
//           </div>

//           <Link href="/news">
//             <Button variant="outline" className="rounded-full">
//               View All Articles <ArrowRight className="ml-2 w-4 h-4" />
//             </Button>
//           </Link>
//         </div>

//         {/* Articles */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {articles.map((article, i) => (
//             <div
//               key={i}
//               className="group relative bg-card rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
//             >
              
//               {/* Shine Effect */}
//               <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
//                   translate-x-[-100%] group-hover:translate-x-[100%] 
//                   transition-transform duration-700 ease-in-out" />
//               </div>

//               {/* Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={article.image}
//                   alt={article.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Content */}
//              <div
//   key={i}
//   className="group relative bg-card rounded-2xl overflow-hidden border hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
// >
  
//   {/* STRONG SLIDING SHADE */}
//   <div className="absolute inset-0 pointer-events-none">
//     <div
//       className="absolute top-0 left-0 h-full w-1/2 
//       bg-gradient-to-r from-transparent via-white/60 to-transparent 
//       -translate-x-full group-hover:translate-x-[200%] 
//       transition-transform duration-700 ease-in-out"
//     />
//   </div>

//   {/* Image (NO ZOOM NOW) */}
//   {/* <div className="relative h-48 overflow-hidden">
//     <Image
//       src={article.image}
//       alt={article.title}
//       fill
//       className="object-cover transition-all duration-500"
//     />
//   </div> */}

//   {/* Content */}
//   <div className="p-5">
//     <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
//       <Calendar className="w-3 h-3" />
//       {new Date(article.date).toLocaleDateString("en-US", {
//         month: "short",
//         day: "numeric",
//         year: "numeric",
//       })}
//     </div>

//     <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
//       {article.title}
//     </h3>

//     <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
//       {article.summary}
//     </p>

//     <Link href={`/news/${article.slug}`}>
//       <Button
//         variant="ghost"
//         className="p-0 h-auto text-accent hover:text-accent/80 text-sm font-medium"
//       >
//         Read More <ArrowRight className="ml-1 w-3.5 h-3.5" />
//       </Button>
//     </Link>
//   </div>
// </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

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

// export default function BlogPreview() {
//   return (
//     <section className="py-20 bg-gray-50">
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

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {articles.map((item, i) => (
//             <Link key={i} href={`/news/${item.slug}`}>
//               <div className="group relative border bg-white overflow-hidden">

//                 {/* Shine Effect */}
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
//                   <div className="absolute bottom-3 left-3 bg-black text-white text-xs px-3 py-1 font-semibold">
//                     {new Date(item.date).toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     })}
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5">

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
//                   <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
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

//...........

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