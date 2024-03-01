/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rahulgoel-dev.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
