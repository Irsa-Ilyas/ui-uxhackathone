// import withBundleAnalyzer from "@next/bundle-analyzer";

// const nextConfig = {
//   reactStrictMode: true,
//   // other Next.js configurations
// };

// export default withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// })(nextConfig);


// /** @type {import('next').NextConfig} */
// const nextConfig={
//   images:{
//     domains:["cdn.sanity.io"],
//   }

// };
// module.exports=nextConfig;


import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add the domain where your images are hosted
  },
};

// Export the combined configuration
export default withBundleAnalyzerConfig(nextConfig);





