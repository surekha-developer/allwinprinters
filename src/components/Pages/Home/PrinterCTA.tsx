

"use client";

import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function PrinterCTA() {
  return (
    <section className="relative py-16 bg-blue-50 overflow-hidden">

      {/* Soft Glow Effect */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <div className="relative container-main text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          Upgrade Your Printing Business with{" "}
          <span className="text-primary italic">Allwin Printers</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          High-performance UV, eco-solvent, and solvent printers built for speed,
          precision, and reliability. Perfect for signage, branding, and industrial printing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center sm:flex-row justify-center gap-4">
          <Link href="/contact" className="inline-block">
            <button className="group btn-gradient px-8 py-3 rounded-full flex items-center justify-center gap-2 
              transition-all duration-300 hover:scale-105 hover:shadow-xl font-bold">
              Contact Us Now
              <FaAngleDoubleRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}