"use client";

import React from "react";
import Image from "next/image";
import { Cpu, Award, Factory, Leaf } from "lucide-react";

type Strength = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const strengths: Strength[] = [
  {
    icon: Cpu,
    title: "Global Leadership in Printing",
    description:
      "For over 22 years, Allwin has led the industry with high-speed industrial printers, delivering unmatched precision and reliability to professional businesses globally.",
  },
  {
    icon: Award,
    title: "Konica Minolta Excellent Partner",
    description:
      "Proudly recognized as an 'Excellent Partner in China' by Konica Minolta for 16 consecutive years, ensuring the highest standards in printhead technology and support.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing Hub",
    description:
      "Our modern 35,200㎡ manufacturing facility drives continuous R&D and innovation, producing world-class digital printing solutions backed by numerous patents.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Efficient Solutions",
    description:
      "We prioritize eco-friendly UV and eco-solvent technologies that reduce environmental impact while maintaining low operation costs and high machine longevity.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-bg-light">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why Allwin Printers
            </p>

            <h2 className="mb-6">
              Empowering Businesses with{" "}
              <span className="text-primary">Reliability & Speed</span>
            </h2>

            <p className="text-muted-soft mb-8 leading-relaxed">
              Allwin is a global leader in industrial digital printing technology. 
              We specialize in high-performance UV roll-to-roll, flatbed, and 
              eco-solvent printers. Trusted by thousands of professional print 
              businesses, we deliver the precision and speed needed to scale 
              your production in a competitive global market.
            </p>

            {/* Strength Cards - Hidden on Mobile */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-8">
              {strengths.map((item, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-soft leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="order-1 lg:order-2 space-y-12">
            {/* Image Container */}
            <div className="relative group overflow-hidden rounded-none shadow-2xl p-4 border border-black/5">
              <Image
                src="/images/ecoSolventPrintingMachines/imgi_2_ALLWIN-ECO-SOLVENT-A-180.webp"
                alt="Allwin High-Performance Industrial Printing Technology"
                width={800}
                height={500}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Stats Grid - Hidden on Mobile */}
            <div className="hidden sm:grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-none shadow-sm border border-black/5 text-center transition-all hover:translate-y-[-4px] hover:shadow-md">
                <p className="text-3xl font-bold text-primary mb-1">22+</p>
                <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">Years Experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 text-center transition-all hover:translate-y-[-4px] hover:shadow-md">
                <p className="text-3xl font-bold text-primary mb-1">97%</p>
                <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">Client Retention</p>
              </div>

              <div className="bg-white p-6 rounded-none shadow-sm border border-black/5 text-center transition-all hover:translate-y-[-4px] hover:shadow-md">
                <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                <p className="text-xs font-semibold text-muted-soft uppercase tracking-wider">Availability</p>
              </div>
               {/* { value: "1000+", label: "Machines Installed" },
  { value: "22+", label: "Years Experience" },
  { value: "97%", label: "Client Retention" },
  { value: "24/7", label: "Availability" }, */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
