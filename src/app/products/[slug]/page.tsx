
"use client";
import { productsData } from "@/data/productsData";
import Link from "next/link";
import Image from "next/image";
import AboutHero from "@/components/Pages/About/AboutHero";
import FeaturedProducts from "@/components/Pages/Home/Featured-products";
import { motion } from "framer-motion";
import { use } from "react";


export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);


  const categoryIndex = productsData.findIndex(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  const product = categoryIndex !== -1 ? productsData[categoryIndex] : undefined;
  
  // Choose layout based on the category's position in the array (0 to 3)
  const layoutStyle = categoryIndex !== -1 ? categoryIndex % 4 : 0;

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">
        Product Not Found
      </div>
    );
  }

  return (
    <>
    {/* <AboutHero/> */}
    {/* <FeaturedProducts/> */}
   <section
  className="relative py-20"
  style={{
    backgroundImage: `url('${product.bgImage || '/images/productbgimages/dummy2.jpg'}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT */}
  <div className="relative">
    {/* HEADER */}
<div className="relative z-10 text-center mb-20 px-4">

  {/* HEADING LETTER ANIMATION */}
  <motion.h1
    className="text-3xl md:text-5xl font-bold text-white mb-4 flex justify-center flex-wrap"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.05,
        },
      },
    }}
  >
    {product.title.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h1>

  {/* SUBTEXT ANIMATION */}
  <motion.p
    className="text-white/80 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.6 }}
  >
    {product.subtitle}
  </motion.p>

</div>

    {product.subProducts.map((item, index) => (
      <div key={index} className="sticky top-[100px] mb-12 lg:mb-20">

        <div className="container-main">
          
          <div className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} w-full rounded-none overflow-hidden shadow-2xl min-h-[400px] md:min-h-[450px]`}>

            {/* IMAGE SECTION */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-[#3D484E] via-[#6D7780] to-[#3D484E] p-10 flex items-center justify-center relative min-h-[300px] md:min-h-full">
              <div className="relative w-full max-w-lg h-[250px] md:h-[350px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="w-full md:w-1/2 bg-white p-10 md:p-16 flex flex-col justify-center items-start text-[#483249]">
              
              {/* LOGO */}
              <div className="mb-6 flex items-center">
                {(item as any).logoImage ? (
                  <div className="relative w-32 h-12 md:w-40 md:h-16">
                    <Image
                      src={(item as any).logoImage}
                      alt={`${item.name} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  <span className="text-3xl md:text-4xl font-extrabold tracking-widest text-[#483249] flex items-center gap-2">
                    <div className="bg-[#483249]/10 p-1 md:p-2 rounded-full backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 md:w-8 md:h-8 text-[#483249]">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>
                    {(item as any).logoText || (item.name.toLowerCase().includes("oric") ? "ORIC" : "ALLWIN")}<sup className="text-lg">®</sup>
                  </span>
                )}
              </div>

              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-extrabold mb-4 leading-tight drop-shadow-sm text-[#483249]">
                {item.name}
              </h2>

              {/* DESCRIPTION / SUBTITLE */}
              <p className="text-xl md:text-2xl mb-10 text-[#483249]/90 font-medium">
                {item.description}
              </p>

              {/* BUTTON */}
              <Link href={`/products/${product.slug}/${item.slug}`}>
                <button className="bg-[#483249] hover:bg-[#342435] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg shadow-xl cursor-pointer">
                  Know more
                </button>
              </Link>
              
            </div>

          </div>
        </div>

      </div>
    ))}

  </div>
</section>
  
    </>
  );
}