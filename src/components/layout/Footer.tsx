

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,

  Facebook,

  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/footer.jpg"
          alt="footer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="border-b border-border/20">
        <div className="container-main py-3 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:8712413159" className="hover:text-sky-400 transition-colors">87124 13159</a>
            <span className="text-white/40">,</span>
            <a href="tel:8686242499" className="hover:text-sky-400 transition-colors">86862 42499</a>
          </div>

          <div className="hidden md:block text-white/40">|</div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:Jke.jayaram@gmail.com" className="hover:text-sky-400 transition-colors">Jke.jayaram@gmail.com</a>
          </div>

          <div className="hidden md:block text-white/40">|</div>

          <div className="flex items-center gap-2 text-center md:text-right">
            <MapPin size={16} />
            <span>
              #11-126, Opp IDPL Colony, Sumitra Nagar, Hyderabad-37
            </span>
          </div>

        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="container-main  text-white section-padding grid grid-cols-1 md:grid-cols-3 gap-15">

        {/* LEFT */}
        <div>
           <Link href="/" className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Image
              src="/images/jklogo-removebg-preview.png"
              alt="JK Enterprises Logo"
              width={100}
              height={70}
              className="rounded-lg w-16 sm:w-20 h-auto"
            />
            <div className="bg-[#03989E] p-1.5 rounded-none inline-block">
              <Image
                src="/images/allwinoriginallogo/imgi_32_logo.png"
                alt="ALLWIN Logo"
                width={80}
                height={40}
                className="object-contain w-14 sm:w-16 h-auto"
              />
            </div>
          </Link>

          <p className="text-white mt-4 mb-6 text-sm leading-relaxed">
            JK Enterprises is a leading provider of high-performance industrial printing solutions. We specialize in UV, Solvent, and Eco-Solvent printers, delivering unmatched quality and 24/7 technical support to empower your printing business.
          </p>

          <div className="flex gap-3">
            {[Facebook, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition-colors"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div className="md:col-span-2 text-white">
          <h3 className="mb-6 text-white font-semibold">Products</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white-100 text-sm">

            <div className="space-y-3">
              <Link href="/products/solvent-printing-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                Solvent Printing Machines
              </Link>
              <Link href="/products/eco-solvent-printing-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                Eco Solvent Printing Machines
              </Link>
              <Link href="/products/uv-printing-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                UV Printing Machines
              </Link>
              <Link href="/products/dtf-printing-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                DTF Printing Machines
              </Link>
              <Link href="/products/laser-cutting-engraving-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
               Laser Cutting & Engraving Machines
              </Link>
              <Link href="/products/cnc-router-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
               CNC Router Machines
              </Link>
              <Link href="/products/fiber-laser-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
               Fiber Laser Machines
              </Link>
            </div>

            <div className="space-y-3">
              <Link href="/products/letter-bending-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                Letter Bending Machines
              </Link>
              <Link href="/products/sheet-cutters" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
              Sheet Cutters
              </Link>
              <Link href="/products/lamination-machines" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                Lamination Machines
              </Link>
              <Link href="/products/vinyl-cutting-plotters" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
                Vinyl Cutting Plotters
              </Link>
              <Link href="/products/printing-inks" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
              Printing Inks
              </Link>
              <Link href="/products/printer-spare-parts" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
              Printer Spare Parts
              </Link>
              <Link href="/products/printer-heads" className="block hover:text-sky-400 transition-colors cursor-pointer text-white">
              Printer Heads
              </Link>
            </div>
        </div>

      </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-border/20 py-4">
        <div className="container-main text-center text-sm text-white">
          © Copyright {new Date().getFullYear()} JK Enterprises
        </div>
      </div>

    </footer>
  );
}