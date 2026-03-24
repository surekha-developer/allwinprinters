
"use client";
import { productsData } from "@/data/productsData";
import Link from "next/link";
import Image from "next/image";
import AboutHero from "@/components/Pages/About/AboutHero";
import FeaturedProducts from "@/components/Pages/Home/Featured-products";
import { Check, CheckCircle2 } from "lucide-react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
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
      <div key={index} className="sticky top-19 py-6">

        <div className="container-main">
          
          <div className={`${item.bg} ${item.text} rounded-none shadow-xl border-t-1 border-black/50 grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 p-8 md:p-14 min-h-[400px] md:min-h-[450px]`}>

            {/* TEXT */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
                {item.name}
              </h2>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                {item.description}
              </p>

<ul className="space-y-3 mb-6">
  {item.features?.slice(0, 5).map((feature, i) => (
    <li
      key={i}
      className="flex items-center gap-3 text-sm md:text-base"
    >

      <IoMdCheckmarkCircleOutline
        size={20}
        className="text-black/70 shrink-0"
      />

      <span className="font-medium">
        {feature}
      </span>

    </li>
  ))}
</ul>
              <Link href={`/products/${product.slug}/${item.slug}`}>
                <button className="btn-primary rounded-full">
                  READ MORE
                </button>
              </Link>
            </div>

            {/* IMAGE */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md h-[220px] md:h-[300px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
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