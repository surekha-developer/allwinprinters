"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutHomeSection() {
  return (
    <section className="relative bg-[#020c3c] text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* ABOUT HEADING WITH LINE */}
          <div className="mb-6">
            <p className="text-sm font-semibold tracking-widest text-gray-300 mb-2">
              ABOUT US
            </p>

            {/* Custom Line Design */}
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-16 bg-blue-500 relative">
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Turning Innovative Ideas <br />
            Into{" "}
            <span className="text-blue-500">
              Digital Success
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed max-w-xl">
            Founded in Rajahmundry, Godavari Wave Technologies Pvt Ltd is a fast growing tech company transforming businesses with cutting edge mobile, web, and software solutions. Our mission is to provide customized, industry focused technology that boosts efficiency, increases reach, and drives measurable results.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col md:flex-row items-center gap-6">

          {/* IMAGE CARD */}
          <div className="bg-white rounded-2xl p-4 w-64 h-64 flex items-center justify-center">
            <Image
              src="/logo.png" // replace with your image
              alt="Company Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>

          {/* STATS CARD */}
          <div className="bg-white text-black rounded-2xl p-6 w-full max-w-md relative">

            {/* Small Top Badges */}
            <div className="flex gap-2 mb-4">
              {["2k+", "3k+", "4k+", "5k+"].map((item, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-gray-500 mb-6">Our Projects Growing...</p>

            {/* STATS */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold">80+</h3>
                <p className="text-gray-500 text-sm">Solutions Delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">33+</h3>
                <p className="text-gray-500 text-sm">Digital Marketing</p>
              </div>
            </div>

            {/* LEARN MORE BUTTON */}
            <Link href="/about">
              <div className="absolute -top-6 right-4 bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-medium cursor-pointer">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}