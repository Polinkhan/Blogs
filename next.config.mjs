/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "139.162.17.88",
        port: "8080",
        pathname: "/blog_upload/**",
      },
      {
        protocol: "http",
        hostname: "139.162.17.88",
        port: "8081",
        pathname: "/blog_upload/**",
      },
    ],
  },
};

export default nextConfig;
