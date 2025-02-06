import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add your domain here
  },
  // other Next.js configurations
};

// Enable bundle analyzer if ANALYZE is set to "true"
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);



// next.config.mjs

// import withBundleAnalyzer from "@next/bundle-analyzer";

// const withBundleAnalyzerConfig = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === "true",
// });

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io', // Update this to your image domain
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default withBundleAnalyzerConfig(nextConfig);





