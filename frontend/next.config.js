/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "127.0.0.1"
    ],
  },
};

module.exports = nextConfig;
