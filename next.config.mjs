/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/beyond-the-numbers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
