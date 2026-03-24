



"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { FaAngleDoubleRight, FaChevronDown } from "react-icons/fa";
import { productsData } from "@/data/productsData";



const menuData = [
  { category: "Solvent Printing Machines", slug: "solvent-printing-machines", products: ["DIGITAL INKJET PRINTER", "Digital Solvent Flex Printer", "Allwin 1024i Pro Series"], image: "/images/products/eco.jpg", tag: "Outdoor", title: "Eco solvent printing", desc: "Flex & banner printing" },

  { category: "Eco Solvent Printing Machines", slug: "eco-solvent-printing-machines", products: ["Eco Solvent Printer A-180", "ECO SOLVENT 2 HEAD 4 COLOUR PRINTER","Allwin Eco Solvent 3 Head 6 Colour Printer","Oric Single Head Eco Solvent Printer"], image: "/images/products/uv.jpg", tag: "Industrial", title: "UV printing", desc: "Multi-surface printing" },

  { category: "UV Printing Machines", slug: "uv-printing-machines", products: ["10 Feet Giant UV Hybrid Printer", "1.8 meter UV Hybrid Printer","Allwin Pinch Roller UV Printer","E 320 UV Balance Roller Machine","Konica & Richo 2513 UV Flatbed Printer","1.6 M UV Pinch Roller","10 FEET 2 Row Model Rubber Roller Printer","10 FEET 4 Row Model Rubber Roller Printer"], image: "/images/products/solvent.jpg", tag: "Bulk", title: "Heavy duty", desc: "High volume machines" },

  { category: "DTF Printing Machines", slug: "dtf-printing-machines", products: ["DTF Printer", "ORIC 2 Feet UV DTF Printer","ORIC 1 Feet UV DTF Printer"], image: "/images/products/sub.jpg", tag: "Textile", title: "Fabric printing", desc: "Garments printing" },

  { category: "Laser Cutting $ Engraving Machines", slug: "laser-cutting-engraving-machines", products: ["4X3 Laser Cutting & Engraving Machine", "8X4 Laser Cutting & Engraving Machine", "2x1.5 Ft laser cutting and engraving machine","8x4 Ft. Laser Cutting and Engraving Machine","4x3 Ft. Laser Cutting and Engraving Machine"], image: "/images/products/dtf.jpg", tag: "Garment", title: "Direct film", desc: "T-shirt printing" },

  { category: "CNC Router Machines", slug: "cnc-router-machines", products: ["Flatbed Oscilating Knife Cutting Machine", "CNC Router","CNC Router","CNC ROUTER","ECONOMY CNC ROUTER"], image: "/images/products/laser.jpg", tag: "Cutting", title: "Laser cutting", desc: "Wood & acrylic" },

  { category: "Fiber Laser Machines", slug: "fiber-laser-machines", products: ["300 Watts Laser Welding Machine", "Fiber Laser Welding Marking Machine","Fiber Laser Welding Machine","Fiber Marking Machine","Portable Mini Marking Machine"], image: "/images/products/cnc.jpg", tag: "Routing", title: "CNC cutting", desc: "Precision routing" },

  { category: "Letter Bending Machines", slug: "letter-bending-machines", products: ["Alluminium Channel Letter Bending Machine", "Stainless Steel Channel Letter Bending Machine"], image: "/images/products/lam.jpg", tag: "Finish", title: "Lamination", desc: "Protection layer" },

  { category: "Sheet Cutters", slug: "sheet-cutters", products: ["Adsorbed Sheet Cutter", "Camera Economy Sheet Cutting Machine","Sheet Cutter"], image: "/images/products/plot.jpg", tag: "Cutting", title: "Plotter cutting", desc: "Sticker cutting" },

  { category: "Lamination Machines", slug: "lamination-machines", products: ["A3, A4 Desktop A4 Lamination", "Auto Hot/Cold Lamination"], image: "/images/products/ink.jpg", tag: "Supplies", title: "Printing ink", desc: "High quality" },

  { category: "Vinyl Cutting Plotters", slug: "vinyl-cutting-plotters", products: ["Konica", "Xaar"], image: "/images/products/head.jpg", tag: "Parts", title: "Print heads", desc: "Original parts" },

  { category: "Printing Inks", slug: "printing-inks", products: ["Boards", "Motors"], image: "/images/products/spare.jpg", tag: "Parts", title: "Machine parts", desc: "All spare parts" },

  { category: "Printer Spare Parts", slug: "printer-spare-parts", products: ["Cutters", "Trimmers"], image: "/images/products/finish.jpg", tag: "Post", title: "Finishing tools", desc: "Better output" },

  { category: "Printer Heads", slug: "printer-heads", products: ["Manual", "Auto"], image: "/images/products/heat.jpg", tag: "Transfer", title: "Heat press", desc: "T-shirt printing" },
];

// export default function Header() {
//   const [isDark, setIsDark] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [megaMenuOpen, setMegaMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(menuData[0]);

//   /* =========================
//      THEME
//   ========================= */
//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const next = !isDark;
//     setIsDark(next);
//     document.documentElement.classList.toggle("dark", next);
//     localStorage.setItem("theme", next ? "dark" : "light");
//   };

//   /* =========================
//      SCROLL HEADER
//   ========================= */
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* =========================
//      SCROLL LOCK (No Shake)
//   ========================= */
//   useEffect(() => {
//     if (menuOpen) {
//       const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
//       document.body.style.overflow = "hidden";
//       document.body.style.paddingRight = `${scrollbarWidth}px`;
//     } else {
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = "";
//     }
    
//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.paddingRight = "";
//     }
//   }, [menuOpen]);

//   const firstCol = menuData.slice(0, 7);
//   const secondCol = menuData.slice(7, 14);

//   return (
//     <header className={`sticky top-0 z-50 w-full transition ${scrolled ? "bg-background/95 backdrop-blur-md shadow border-b" : "bg-background"}`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-24">

//           {/* LOGO */}
//          <Link href="/" className="flex items-center gap-2">
//   <Image
//     src="/images/jklogo-removebg-preview.png"   // 👉 your logo path inside /public folder
//     alt="ALLWIN Logo"
//     width={115}
//     height={80}
//     className="rounded-lg"
//   />

//   {/* <span className="font-bold text-lg">ALLWIN</span> */}
// </Link>

//           {/* NAV */}
//           <div className="hidden lg:flex items-center gap-6 h-full">
//             <Link href="/" className="font-medium h-full flex items-center">Home</Link>
//             <Link href="/about" className="font-medium h-full flex items-center">About</Link>

//             {/* MEGA MENU */}
//             <div 
//                className="relative h-full flex items-center"
//                onMouseEnter={() => setMegaMenuOpen(true)}
//                onMouseLeave={() => setMegaMenuOpen(false)}
//             >
//               <button className={`font-medium transition-colors h-full flex items-center cursor-default ${megaMenuOpen ? "text-primary" : "hover:text-primary"}`}>
//                 Products
//               </button>

//               <div className={`fixed left-0 top-[72px] w-full transition-all duration-300 z-40 ${megaMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}>
//                 {/* BACKDROP */}
//                 {/* <div className="absolute inset-0 bg-black/20 backdrop-blur-sm h-screen -z-10" /> */}

//                 <div className="relative max-w-7xl mx-auto px-6 py-6 pb-12 w-full max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
//                   <div className="bg-background border shadow-2xl rounded-xl grid md:grid-cols-3">

//                     {/* LEFT */}
//                     <div className="border-r p-4">
//                       <h4 className="mb-3 text-sm text-muted-foreground font-semibold">Categories</h4>

//                       <div className="grid grid-cols-2 gap-x-6 relative">
//                         <div className="absolute left-1/2 top-2 bottom-2 w-px bg-border"></div>

//                         <div>
//                           {firstCol.map((item, i) => (
//                             <Link key={i} href={`/products/${item.slug}`} onClick={() => setMegaMenuOpen(false)} onMouseEnter={() => setActiveCategory(item)} className={`block px-3 py-2 text-sm rounded-md cursor-pointer ${activeCategory.category === item.category ? "bg-secondary text-accent font-medium" : "hover:bg-secondary"}`}>
//                               {item.category}
//                             </Link>
//                           ))}
//                         </div>

//                         <div>
//                           {secondCol.map((item, i) => (
//                             <Link key={i} href={`/products/${item.slug}`} onClick={() => setMegaMenuOpen(false)} onMouseEnter={() => setActiveCategory(item)} className={`block px-3 py-2 text-sm rounded-md cursor-pointer ${activeCategory.category === item.category ? "bg-secondary text-accent font-medium" : "hover:bg-secondary"}`}>
//                               {item.category}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* MIDDLE */}
//                     <div className="border-r p-4">
//                       <h4 className="mb-3 text-sm text-muted-foreground font-semibold">Products</h4>

//                       {activeCategory.products.map((p, i) => (
//                         <div key={i} className="flex justify-between text-sm hover:text-foreground cursor-pointer text-muted-foreground py-1">
//                           {p} <span>↗</span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* RIGHT */}
//                     <div className="p-4">
//                       <h4 className="mb-3 text-sm text-muted-foreground font-semibold">Featured</h4>

//                       <div className="bg-muted rounded-lg p-3">
//                         <img src={activeCategory.image} className="h-40 w-full object-cover rounded-md mb-3" alt={activeCategory.category} />

//                         <span className="text-xs px-2 py-1 bg-white/20 rounded-full">{activeCategory.tag}</span>

//                         <h4 className="text-sm font-semibold mt-2">{activeCategory.title}</h4>
//                         <p className="text-xs text-muted-foreground">{activeCategory.desc}</p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>

//             <Link href="/news" className="font-medium h-full flex items-center">News</Link>
//             <Link href="/technical-support" className="font-medium h-full flex items-center">Technical Support</Link>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">
           

//             <Link href="/contact" className="hidden sm:block">
//            <button className="btn-gradient px-6 py-2 rounded-4xl flex items-center gap-2">
//   Contact Us
//   <FaAngleDoubleRight />
// </button>
//             </Link>

//             <div className="lg:hidden relative">
//                <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
//                  <Menu />
//                </Button>
               
//                {menuOpen && (
//                  <div className="absolute right-0 top-full mt-2 w-64 bg-background border shadow-xl rounded-xl p-4 flex flex-col gap-4 z-50">
//                     <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//                     <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
//                     <div className="font-medium text-primary">Products</div>
//                      <div className="pl-4 flex flex-col gap-2 max-h-60 overflow-y-auto">
//                         {menuData.map((item, i) => (
//                             <Link key={i} href={`/products/${item.slug}`} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
//                                 {item.category}
//                             </Link>
//                         ))}
//                      </div>
//                     <Link href="/news" onClick={() => setMenuOpen(false)}>News</Link>
//                     <Link href="/technical-support" onClick={() => setMenuOpen(false)}>Technical Support</Link>
//                     <Link href="/contact" onClick={() => setMenuOpen(false)}>
//                       <Button className="w-full rounded-full">Contact Us</Button>
//                     </Link>
//                  </div>
//                )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

//.......above code is good


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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/jklogo-removebg-preview.png"
              alt="ALLWIN Logo"
              width={115}
              height={80}
              className="rounded-lg"
            />
          </Link>

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-6 h-full">

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
                              href={`/products/${item.slug}`}
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
                              href={`/products/${item.slug}`}
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

                      <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 transition-all duration-300 flex flex-col h-full">
                        <div className="relative h-48 w-full mb-4 bg-white/10 rounded-lg overflow-hidden flex items-center justify-center p-2">
                          <img
                            src={activeHoverProduct ? activeHoverProduct.image : activeCategory.image}
                            className="w-full h-full object-contain"
                            alt={activeHoverProduct ? activeHoverProduct.name : activeCategory.category}
                          />
                        </div>

                        {!activeHoverProduct && (
                          <span className="text-xs px-3 py-1 bg-white/10 text-white rounded-full self-start mb-3 border border-white/20">
                            {activeCategory.tag}
                          </span>
                        )}

                        <h4 className="text-base font-semibold text-white mb-2 line-clamp-2">
                          {activeHoverProduct ? activeHoverProduct.name : activeCategory.title}
                        </h4>
                        <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                          {activeHoverProduct ? activeHoverProduct.description : activeCategory.desc}
                        </p>
                      </div>
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
            <Link
              href="/technical-support"
              className="font-medium h-full flex items-center transition-colors hover:text-[var(--primary)]"
            >
              Technical Support
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
             <Image
    src="/images/SolventPrintingMachines/imgi_3_allwin.png"
    alt="Mini Logo"
    width={100}
    height={40}
    className="hidden sm:block object-contain"
  />

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
                                  <Link key={i} href={`/products/${item.slug}`} onClick={() => setMenuOpen(false)} className="text-base text-gray-400 hover:text-white transition-colors">
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