



"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { FaAngleDoubleRight, FaChevronDown } from "react-icons/fa";
import { productsData } from "@/data/productsData";



const menuData = [
  { category: "Solvent Printing Machines", slug: "solvent-printing-machines", products: ["DIGITAL INKJET PRINTER", "Digital Solvent Flex Printer", "Allwin 1024i Pro Series"], image: "/images/SolventPrintingMachines/imgi_2_1024.png", tag: "Solvent", title: "Solvent Printing", desc: "Industrial Flex Printing" },

  { category: "Eco Solvent Printing Machines", slug: "eco-solvent-printing-machines", products: ["Eco Solvent Printer A-180", "ECO SOLVENT 2 HEAD 4 COLOUR PRINTER","Allwin Eco Solvent 3 Head 6 Colour Printer","Oric Single Head Eco Solvent Printer"], image: "/images/ecoSolventPrintingMachines/imgi_2_ALLWIN-ECO-SOLVENT-A-180.webp", tag: "Eco", title: "Eco Solvent", desc: "Signage & Vinyl" },

  { category: "UV Printing Machines", slug: "uv-printing-machines", products: ["10 Feet Giant UV Hybrid Printer", "1.8 meter UV Hybrid Printer","Allwin Pinch Roller UV Printer","E 320 UV Balance Roller Machine","Konica & Richo 2513 UV Flatbed Printer","1.6 M UV Pinch Roller","10 FEET 2 Row Model Rubber Roller Printer","10 FEET 4 Row Model Rubber Roller Printer"], image: "/images/UVPrinters/imgi_16_allwin-1.png", tag: "UV", title: "UV Printing", desc: "Rigid & Flexible Media" },

  { category: "DTF Printing Machines", slug: "dtf-printing-machines", products: ["DTF Printer", "ORIC 2 Feet UV DTF Printer","ORIC 1 Feet UV DTF Printer"], image: "/images/dtfprinters/imgi_2_ALLWIN-DTF-Printer-1.png", tag: "Textile", title: "Fabric Printing", desc: "Direct to Film" },

  { category: "Laser Cutting & Engraving Machines", slug: "laser-cutting-engraving-machines", products: ["Yueming 4X3 Laser Cutting & Engraving Machine", "Yueming 8X4 Laser Cutting & Engraving Machine", "Rayt 2x1.5 Ft Laser Cutting and Engraving Machine", "Rayt 8x4 Ft. Laser Cutting and Engraving Machine", "Rayt 4x3 Ft. Laser Cutting and Engraving Machine"], image: "/images/LaserCutting&EngravingMachines/imgi_2_YuemingLaserCutting.png", tag: "Cutting", title: "Laser Cutting", desc: "Acrylic & Wood" },

  { category: "CNC Router Machines", slug: "cnc-router-machines", products: ["KARTECH Flatbed Oscilating Knife Cutting Machine", "RAYT CNC Router NT 1325", "RAYT CNC Router NT 6090", "TigerTec CNC ROUTER TR 408 AD", "UTECH Economy CNC Router"], image: "/images/CNCRouterMachines/imgi_5_RAYT-CNC-ROUTER.png", tag: "Routing", title: "CNC Router", desc: "Precision Routing" },

  { category: "Fiber Laser Machines", slug: "fiber-laser-machines", products: ["300 Watts Laser Welding Machine", "Fiber Laser Welding Marking Machine","Fiber Laser Welding Machine","Fiber Marking Machine","Portable Mini Marking Machine"], image: "/images/FiberLaserMachines/imgi_3_DOBOSEN_300.png", tag: "Fiber", title: "Fiber Laser", desc: "Welding & Marking" },

  { category: "Letter Bending Machines", slug: "letter-bending-machines", products: ["Dobosen Alluminium Channel Letter Bending Machine", "Dobosen Stainless Steel Channel Letter Bending Machine"], image: "/images/LetterBendingMachines/imgi_2_DOBOSEN-ALUMINIUM.png", tag: "Bending", title: "Letter Bending", desc: "Aluminum & SS Channel" },

  { category: "Sheet Cutters", slug: "sheet-cutters", products: ["Saga Adsorbed Sheet Cutter", "Saga Camera Economy Sheet Cutting Machine","Saga Sheet Cutter"], image: "/images/sheetCutters/imgi_3_SAGA-ADSORBED-1.png", tag: "Cutting", title: "Sheet Cutting", desc: "Digital Finishing" },

  { category: "Lamination Machines", slug: "lamination-machines", products: ["Fayon A3, A4 Desktop A4 Lamination", "Fayon Auto Hot/Cold Lamination"], image: "/images/laminationmachines/imgi_4_FAYON2-1.png", tag: "Lamination", title: "Lamination", desc: "Hot & Cold Finishing" },

  { category: "Vinyl Cutting Plotters", slug: "vinyl-cutting-plotters", products: ["Mimaki ARIII Cutting Plotter", "Saga Vinyl Cutting Plotter with Camera", "Saga Cutting Plotter", "Saga Flatbed Cutter", "Saga Trimmer Cutter"], image: "/images/vinylcuttingplotters/imgi_2_vinyl1.png", tag: "Plotter", title: "Vinyl Plotter", desc: "Sticker & Vinyl Cutting" },

  { category: "Printing Inks", slug: "printing-inks", products: [], image: "/images/printingInks/imgi_2_toyo_eco_solvent_ink.png", tag: "Ink", title: "Printing Inks", desc: "Premium Inks" },

  { category: "Printer Spare Parts", slug: "printer-spare-parts", products: [], image: "/images/printerspareparts/imgi_13_mother-board.jpg", tag: "Parts", title: "Spare Parts", desc: "All Machine Parts" },

  { category: "Printer Heads", slug: "printer-heads", products: [], image: "/images/Printer Heads – newcleartechnologies/imgi_3_original-konica-km1024mhb-14pl-uv-printhead_1445520.jpg", tag: "Heads", title: "Printer Heads", desc: "Original Print Heads" },
];




export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(menuData[0]);
  const [activeHoverProduct, setActiveHoverProduct] = useState<any>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleCategoryHover = (item: any) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(item);
      setActiveHoverProduct(null);
    }, 150);
  };

  /* CLICK OUTSIDE MOBILE MENU */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  /* SCROLL HEADER */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL LOCK FOR MOBILE MENU */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const firstCol = menuData.slice(0, 7);
  const secondCol = menuData.slice(7, 14);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow border-b"
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Image
              src="/images/jklogo-removebg-preview.png"
              alt="JK Enterprises Logo"
              width={100}
              height={70}
              className="rounded-lg w-16 sm:w-[100px] h-auto"
            />
            <Image
              src="/images/Screenshot_2026-03-26_103628-removebg-preview.png"
              alt="ALLWIN Logo"
              width={110}
              height={55}
              className="object-contain w-14 sm:w-[100px] h-auto"
            />
          </Link>

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-8 h-full">

            {/* Home */}
            <Link
              href="/"
              className="font-medium h-full flex items-center transition-colors hover:text-[var(--primary)]"
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="font-medium h-full flex items-center transition-colors hover:text-[var(--primary)]"
            >
              About
            </Link>

            {/* PRODUCTS */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`font-medium transition-colors h-full flex items-center gap-1 ${
                  megaMenuOpen
                    ? "text-[var(--primary)]"
                    : "hover:text-[var(--primary)]"
                }`}
              >
                Products

                {/* 🔥 Arrow */}
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    megaMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* MEGA MENU */}
            <div
  className={`fixed left-0 top-[94px] w-full transition-all duration-300 z-40 ${
    megaMenuOpen
      ? "opacity-100 visible translate-y-0"
      : "opacity-0 invisible translate-y-2"
  }`}
>
  {/* 🔥 FULL BLACK BACKGROUND */}
  <div className="w-full bg-black text-white">
                <div className="relative max-w-7xl mx-auto px-6 py-6 pb-12 w-full max-h-[calc(100vh-80px)] overflow-y-auto">
                 <div className="grid md:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="border-r border-white/40 p-4">
                      <h4 className="mb-4 text-sm text-gray-500 font-semibold uppercase tracking-wider">
                        Categories
                      </h4>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-1 relative">
                        {/* Center border removed for cleaner look */}
                        
                        <div className="flex flex-col gap-1">
                          {firstCol.map((item, i) => (
                            <Link
                              key={i}
                              href={["printer-heads", "printer-spare-parts"].includes(item.slug) ? `/${item.slug}` : `/products/${item.slug}`}
                              onClick={() => setMegaMenuOpen(false)}
                              onMouseEnter={() => handleCategoryHover(item)}
                              className={`block px-3 py-3 text-sm rounded-md transition-colors ${
                                activeCategory.category === item.category
                                  ? "bg-white/10 text-white font-medium shadow-sm"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {item.category}
                            </Link>
                          ))}
                        </div>

                        <div className="flex flex-col gap-1">
                          {secondCol.map((item, i) => (
                            <Link
                              key={i}
                              href={["printer-heads", "printer-spare-parts"].includes(item.slug) ? `/${item.slug}` : `/products/${item.slug}`}
                              onClick={() => setMegaMenuOpen(false)}
                              onMouseEnter={() => handleCategoryHover(item)}
                              className={`block px-3 py-3 text-sm rounded-md transition-colors ${
                                activeCategory.category === item.category
                                  ? "bg-white/10 text-white font-medium shadow-sm"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {item.category}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* MIDDLE */}
                    <div className="border-r border-white/40 p-4">
                      <h4 className="mb-4 text-sm text-gray-500 font-semibold uppercase tracking-wider">
                        Products
                      </h4>

                      <div className="flex flex-col gap-1">
                        {activeCategory.products.map((pName, i) => {
                          const categoryData = productsData.find(c => c.slug === activeCategory.slug);
                          const productDetails = categoryData?.subProducts?.find(sp => sp.name === pName);
                          const productSlug = productDetails?.slug || pName.toLowerCase().replace(/\s+/g, '-');

                          return (
                            <Link
                              key={i}
                              href={`/products/${activeCategory.slug}/${productSlug}`}
                              onClick={() => setMegaMenuOpen(false)}
                              onMouseEnter={() => setActiveHoverProduct(productDetails || { name: pName, image: activeCategory.image, description: activeCategory.desc })}
                              onMouseLeave={() => setActiveHoverProduct(null)}
                              className="flex justify-between items-center text-sm hover:text-white hover:bg-white/5 px-3 py-3 rounded-md transition-colors cursor-pointer text-gray-400 group"
                            >
                              <span className="truncate pr-2">{pName}</span>
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="p-4">
                      <h4 className="mb-4 text-sm text-gray-500 font-semibold uppercase tracking-wider">
                        Featured
                      </h4>

                      {(() => {
                        const categoryData = productsData.find(c => c.slug === activeCategory.slug);
                        const firstProduct = categoryData?.subProducts?.[0];
                        
                        const displayImage = activeHoverProduct?.image || firstProduct?.image || activeCategory.image;
                        const displayName = activeHoverProduct?.name || firstProduct?.name || activeCategory.title;
                        const displayDesc = activeHoverProduct?.description || firstProduct?.description || activeCategory.desc;

                        return (
                          <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 transition-all duration-300 flex flex-col h-full">
                            <div className="relative h-48 w-full mb-4 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center p-2">
                              <img
                                src={displayImage}
                                className="w-full h-full object-contain"
                                alt={displayName}
                              />
                            </div>

                            {!activeHoverProduct && (
                              <span className="text-xs px-3 py-1 bg-white/10 text-white rounded-full self-start mb-3 border border-white/20">
                                {activeCategory.tag}
                              </span>
                            )}

                            <h4 className="text-base font-semibold text-white mb-2 line-clamp-2">
                              {displayName}
                            </h4>
                            <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                              {displayDesc}
                            </p>
                          </div>
                        );
                      })()}
                    </div>

                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* News */}
            <Link
              href="/news"
              className="font-medium h-full flex items-center transition-colors hover:text-[var(--primary)]"
            >
              News
            </Link>

            {/* Technical Support */}
            {/* <Link
              href="/technical-support"
              className="font-medium h-full flex items-center transition-colors hover:text-[var(--primary)]"
            >
              Technical Support
            </Link> */}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* CONTACT BUTTON */}
          
           

             <Link href="/contact" className="hidden sm:block">
            <button className="btn-gradient px-6 py-2 rounded-4xl flex items-center gap-2">
   Contact Us
   <FaAngleDoubleRight />
 </button>
            </Link>


            {/* MOBILE MENU */}
            <div className="lg:hidden relative" ref={mobileMenuRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Menu />
              </Button>
              
              {/* FULL-WIDTH MOBILE MENU */}
              {menuOpen && (
                 <div className="fixed left-0 top-24 w-full h-[calc(100vh-6rem)] bg-black text-white border-t border-white/10 z-[99] overflow-y-auto pb-10 shadow-2xl transition-all duration-300">
                    <div className="flex flex-col p-6 gap-2 max-w-7xl mx-auto">
                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-[var(--primary)] transition-colors py-4 border-b border-white/10">Home</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-[var(--primary)] transition-colors py-4 border-b border-white/10">About</Link>
                        
                        <div className="py-4 border-b border-white/10 flex flex-col gap-4">
                           <div className="text-lg font-medium text-[var(--primary)] tracking-wide">Products</div>
                           <div className="pl-4 border-l border-white/20 flex flex-col gap-4">
                              {menuData.map((item, i) => (
                                  <Link key={i} href={["printer-heads", "printer-spare-parts"].includes(item.slug) ? `/${item.slug}` : `/products/${item.slug}`} onClick={() => setMenuOpen(false)} className="text-base text-gray-400 hover:text-white transition-colors">
                                      {item.category}
                                  </Link>
                              ))}
                           </div>
                        </div>

                        <Link href="/news" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-[var(--primary)] transition-colors py-4 border-b border-white/10">News</Link>
                        <Link href="/technical-support" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-[var(--primary)] transition-colors py-4 border-b border-white/10">Technical Support</Link>
                        
                        <div className="pt-8">
                           <Link href="/contact" onClick={() => setMenuOpen(false)}>
                              <button className="btn-gradient w-full px-6 py-4 rounded-4xl flex items-center justify-center gap-2 text-white font-semibold text-lg hover:opacity-90 transition-opacity">
                                Contact Us
                                <FaAngleDoubleRight />
                              </button>
                           </Link>
                        </div>
                    </div>
                 </div>
               )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}