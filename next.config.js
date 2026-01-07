/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ autorise toutes les images https
      },
      {
        protocol: "http",
        hostname: "**", // ✅ autorise toutes les images http
      },
    ],
  },
};

module.exports = nextConfig;
