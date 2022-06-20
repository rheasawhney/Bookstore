/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'media.istockphoto.com'
    ],
},
}

module.exports = nextConfig
