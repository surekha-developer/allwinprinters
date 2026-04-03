import { productsData } from "@/data/productsData";
import Image from "next/image";

interface SpeedTableRow {
  pass: string;
  resolution: string;
  speed: string;
}

interface TechSpecRow {
  label: string;
  value: string;
}

interface SubProduct {
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  dealerInfo?: string;
  mainFeaturesTitle?: string;
  detailedFeatures?: string[];
  speedTable?: SpeedTableRow[];
  techSpecs?: TechSpecRow[];
  specImage?: string;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>;
}) {
  const { slug, subSlug } = await params;

  const product = productsData.find((p) => p.slug === slug);

  const subProduct = product?.subProducts.find(
    (sp) => sp.slug === subSlug
  ) as SubProduct | undefined;

  if (!subProduct) {
    return (
      <div className="p-10 text-center text-red-500">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* TOP HEADER BANNER */}
      <div className="bg-[#e5e7eb] py-8 text-center border-b border-gray-300">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          {subProduct.name}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN: IMAGE & DESCRIPTION */}
        <div className="flex flex-col items-center w-full">
          <div className="relative w-full h-[300px] md:h-[400px] mb-8 bg-white flex items-center justify-center">
            <Image
              src={subProduct.image}
              alt={subProduct.name}
              fill
              className="object-contain"
            />
          </div>

          {!subProduct.specImage && (
            <div className="text-gray-800">
              <h3 className="text-lg font-bold mb-4 uppercase">
                HIGH SPEED {subProduct.name} MACHINE:
              </h3>
              <p className="mb-6 leading-relaxed">
                {subProduct.dealerInfo || `We are the authorised dealer of ${subProduct.name} machines.`}
              </p>

              <h4 className="text-md font-bold mb-4">
                {subProduct.mainFeaturesTitle || `Main Features of ${subProduct.name}`}
              </h4>

              <p className="mb-4 leading-relaxed">
                {subProduct.fullDescription}
              </p>

              {subProduct.detailedFeatures && subProduct.detailedFeatures.length > 0 && (
                <ol className="list-decimal pl-5 space-y-2 mt-4 text-sm md:text-base leading-relaxed text-gray-700">
                  {subProduct.detailedFeatures.map((feature: string, idx: number) => (
                    <li key={idx} className="pl-1 text-gray-600">
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: TABLES OR SPEC IMAGE */}
        <div>
          {subProduct.specImage ? (
            <div className="flex justify-center items-center w-full">
              <Image
                src={subProduct.specImage}
                alt={`${subProduct.name} Specifications`}
                width={1000}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          ) : (
            <>
              {/* SPEED TABLE */}
              {subProduct.speedTable && subProduct.speedTable.length > 0 && (
                <div className="mb-10">
                  <div className="border border-gray-200">
                    <div className="bg-[#f8f9fa] py-4 text-center border-b border-gray-200">
                      <h4 className="font-bold text-gray-800 text-sm tracking-widest">SPEED TABLE(30PL)</h4>
                    </div>
                    <div>
                      {subProduct.speedTable.map((row: SpeedTableRow, i: number) => (
                        <div key={i} className={`grid grid-cols-3 text-sm text-gray-700 border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                          <div className="p-4 border-r border-gray-200 font-medium">{row.pass}</div>
                          <div className="p-4 border-r border-gray-200">{row.resolution}</div>
                          <div className="p-4">{row.speed}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* HEAD TECHNICAL SPECIFICATIONS */}
              {subProduct.techSpecs && subProduct.techSpecs.length > 0 && (
                <div>
                  <div className="border border-gray-200">
                    <div className="bg-[#f8f9fa] py-4 text-center border-b border-gray-200">
                      <h4 className="font-bold text-gray-800 text-sm tracking-widest">HEAD TECHNICAL SPECIFICATIONS</h4>
                    </div>
                    <div>
                      {subProduct.techSpecs.map((row: TechSpecRow, i: number) => (
                        <div key={i} className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] text-sm text-gray-700 border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'}`}>
                          <div className="p-4 border-r border-gray-200 font-medium text-xs md:text-sm tracking-wide">{row.label}</div>
                          <div className="p-4">{row.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
}