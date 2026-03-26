"use client"

export default function NewsTop() {
  return (
    <section className="relative w-full h-[20vh] md:h-[30vh] lg:h-[40vh] flex items-center justify-center text-center overflow-hidden bg-red-500">

      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="/images/SL-112119-25250-32.jpg" // 👉 replace with your image
          alt="About Allwin"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto text-white ">

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          News
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
          Delivering high-performance industrial printing solutions with precision,
          reliability, and innovation for businesses across the globe.
        </p>

      </div>
    </section>

    
  )
}