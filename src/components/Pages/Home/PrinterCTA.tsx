// "use client";

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export default function PrinterCTA() {
//   return (
//     <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
      
//       {/* Background Glow */}
//       <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_white,_transparent)]"></div>

//       <div className="max-w-6xl mx-auto px-4 text-center">

//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
//           Upgrade Your Printing Business with{" "}
//           <span className="text-yellow-400">AllwinTech Printers</span>
//         </h2>

//         {/* Description */}
//         <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
//           High-performance UV, eco-solvent, and solvent printers built for speed,
//           precision, and long-term reliability. Perfect for signage, branding, and industrial printing.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4">

//           {/* Primary Button */}
//           <Link href="/products">
//             <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
//               Explore Printers <ArrowRight className="w-4 h-4" />
//             </button>
//           </Link>

//           {/* Secondary Button */}
//           <Link href="/contact">
//             <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
//               Get a Quote
//             </button>
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// }

//..........

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PrinterCTA() {
  return (
    <section className="relative py-24 text-white overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/3d-abstract-background-with-low-poly-plexus-design.jpg" // 👉 replace with your image
        alt="Printer Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
          Upgrade Your Printing Business with{" "}
          <span className="text-black-400">AllwinTech Printers</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          High-performance UV, eco-solvent, and solvent printers built for speed,
          precision, and reliability. Perfect for signage, branding, and industrial printing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary */}
          <Link href="/products">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              Explore Printers <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          {/* Secondary */}
          <Link href="/contact">
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
              Get a Quote
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}