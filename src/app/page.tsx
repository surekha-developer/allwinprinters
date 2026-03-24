// // import Image from "next/image";

import StackScrollCards from "@/components/DummyStackCards";
import StickyServices from "@/components/DummyStackCards";
import DummyStackCards from "@/components/DummyStackCards";
import AboutHomeSection from "@/components/Pages/Home/AboutHomeSection";
import BlogPreview from "@/components/Pages/Home/BlogPreview";
import FeaturedProducts from "@/components/Pages/Home/Featured-products";
import HeroSection from "@/components/Pages/Home/HeroSection";
import IndustryApplications from "@/components/Pages/Home/IndustryApplications";
import PrinterCTA from "@/components/Pages/Home/PrinterCTA";
import TestimonialSection from "@/components/Pages/Home/Testimonials";
import WhyChooseUs from "@/components/Pages/Home/WhyChooseUs";

// // export default function Home() {
// //   return (
// //  <section className="section-bg-light section-padding">
      
// //       <div className="container-main">

// //         {/* Hero Section */}
// //         <div className="content-width mb-16">
// //           <h1>
// //             Build Modern Web Applications
// //           </h1>

// //           <p className="mt-6">
// //             Create scalable and high-performance applications using 
// //             Next.js, TailwindCSS and modern UI design systems.
// //           </p>

// //           <button className="btn-primary mt-8">
// //             Get Started
// //           </button>
// //         </div>


// //         {/* Section Heading */}
// //         <div className="section-center mb-12">
// //           <h2>
// //             Our Services
// //           </h2>

// //           <p className="text-muted-soft mt-4">
// //             We help businesses build powerful digital platforms.
// //           </p>
// //         </div>


// //         {/* Cards */}
// //         <div className="grid md:grid-cols-3 gap-8">

// //           <div className="card-soft card-padding">
// //             <h3>Web Development</h3>

// //             <p className="mt-3">
// //               We create modern web applications using React,
// //               Next.js and scalable architectures.
// //             </p>

// //             <button className="btn-primary mt-6">
// //               Learn More
// //             </button>
// //           </div>


// //           <div className="card-soft card-padding">
// //             <h3>UI / UX Design</h3>

// //             <p className="mt-3">
// //               Designing beautiful interfaces with strong
// //               usability and conversion-focused layouts.
// //             </p>

// //             <button className="btn-primary mt-6">
// //               Learn More
// //             </button>
// //           </div>


// //           <div className="card-soft card-padding">
// //             <h3>Cloud Solutions</h3>

// //             <p className="mt-3">
// //               Deploy scalable applications using modern
// //               cloud infrastructure and DevOps pipelines.
// //             </p>

// //             <button className="btn-primary mt-6">
// //               Learn More
// //             </button>
// //           </div>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// //.........

// "use client"

// import ThemeToggle from "@/components/theme-toggle";
// import Image from "next/image";

// export default function Home() {

//   const toggleDark = () => {
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//  <section className="section-bg-light section-padding">
      
//       <div className="container-main">

//         {/* Dark Mode Test Button */}
//         <div className="flex justify-end mb-10">
//           <button onClick={toggleDark} className="btn-primary">
//             Toggle Dark Mode
//           </button>
//         </div>
//         <ThemeToggle />

//         {/* Hero Section */}
//         <div className="content-width mb-16">
//           <h1>
//             Build Modern Web Applications
//           </h1>

//           <p className="mt-6">
//             Create scalable and high-performance applications using 
//             Next.js, TailwindCSS and modern UI design systems.
//           </p>

//           <button className="btn-primary mt-8">
//             Get Started
//           </button>
//         </div>


//         {/* Section Heading */}
//         <div className="section-center mb-12">
//           <h2>
//             Our Services
//           </h2>

//           <p className="text-muted-soft mt-4">
//             We help businesses build powerful digital platforms.
//           </p>
//         </div>


//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">

//           <div className="card-soft card-padding">
//             <h3>Web Development</h3>

//             <p className="mt-3">
//               We create modern web applications using React,
//               Next.js and scalable architectures.
//             </p>

//             <button className="btn-primary mt-6">
//               Learn More
//             </button>
//           </div>


//           <div className="card-soft card-padding">
//             <h3>UI / UX Design</h3>

//             <p className="mt-3">
//               Designing beautiful interfaces with strong
//               usability and conversion-focused layouts.
//             </p>

//             <button className="btn-primary mt-6">
//               Learn More
//             </button>
//           </div>


//           <div className="card-soft card-padding">
//             <h3>Cloud Solutions</h3>

//             <p className="mt-3">
//               Deploy scalable applications using modern
//               cloud infrastructure and DevOps pipelines.
//             </p>

//             <button className="btn-primary mt-6">
//               Learn More
//             </button>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

//............

// "use client"

// import FeatureCard from "@/components/featuredcard"
// import ThemeToggle from "@/components/theme-toggle"

// export default function Home() {
//   return (
//     <section className="section-bg-light section-padding">

//       <div className="container-main">

//         <div className="flex justify-end mb-10">
//           <ThemeToggle />
//         </div>

//         <div className="content-width mb-16">
//           <h1>
//             Build Modern Web Applications
//           </h1>

//           <p className="mt-6">
//             Create scalable and high-performance applications using 
//             Next.js, TailwindCSS and modern UI design systems.
//           </p>

//           <button className="btn-primary mt-8">
//             Get Started
//           </button>
//         </div>

//       </div>
//       <FeatureCard/>

//     </section>
//   )
// }

//........

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      {/* <AboutHomeSection/> */}
      <FeaturedProducts/>
      <IndustryApplications/>
      
      <WhyChooseUs/>
      <TestimonialSection/>
      <BlogPreview/>
      <PrinterCTA/>

    </div>
    // <div>
    //    <HeroSection/> <StickyServices/>
    //  <FeaturedProducts/></div>
  )
}