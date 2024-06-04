/** @type {import('next').NextConfig} */
const NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};
export default NextConfig;
