
"use client"

export default function Vision() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="\images\3d-abstract-background-with-low-poly-plexus-design.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Flex container for left & right */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="md:w-1/2 flex flex-col justify-start">
            <p className="text-sm md:text-base text-muted-foreground mb-2">
              Our Vision
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight bg-primary-500">
              Empowering printing businesses with innovation and speed
            </h2>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 flex flex-col justify-start">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Since its inception, Allwin Technology has been committed to delivering
              high-performance industrial printing solutions that help businesses
              grow faster and operate efficiently. We combine innovation, precision,
              and reliability to provide machines that meet modern production demands.
              Our customer-first approach and consistent quality have made us a trusted
              partner for printing businesses across India and beyond.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

