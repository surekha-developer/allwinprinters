// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

//...........


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "newcleartechnologies.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       }
//     ],
//   },
// };

// module.exports = nextConfig;

//....above code is good


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "horizontal-sapphire-dlaawjnibj.edgeone.app",
      },
      {
        protocol: "https",
        hostname: "newcleartechnologies.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
       {
        protocol: "https",
        hostname: "www.allwintech.com",
      },
    ],
  },
}

module.exports = nextConfig