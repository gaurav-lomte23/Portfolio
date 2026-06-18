const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode

  images: {
    domains: [
      'i.ibb.co',
      'images.unsplash.com',
    ],
  },

};

module.exports = nextConfig;
