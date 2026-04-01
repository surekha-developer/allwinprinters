import Image from "next/image"

export default function C8Pro512iSolventPrinterPage() {
  return (
    <div className="section-padding bg-background min-h-screen py-16">
      <div className="container-main">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            C8 PRO 512I Solvent Printer
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Machine Image */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/images/Feature512iprosolventprinter/Feature512isolventprinter.png"
              alt="C8 PRO 512I Solvent Printer"
              width={1000}
              height={1000}
              className="w-full max-w-2xl h-auto object-contain"
              priority
            />
          </div>
          
          {/* Right Side: Text Image */}
          <div className="flex justify-center items-center w-full">
            <Image
              src="/images/Feature512iprosolventprinter/Feature512isolventprintertextimage.png"
              alt="C8 PRO 512I Solvent Printer Specifications"
              width={1000}
              height={1000}
              className="w-full max-w-2xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
