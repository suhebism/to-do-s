// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:'export',
    images:{
      unoptimized: false,
      domains:['images.unsplash.com']
    }
};

export default withPWA({
    dest: "public",         // destination directory for the PWA files
    // disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
    register: true,         // register the PWA service worker
    skipWaiting: true,      // skip waiting for service worker activation
})(nextConfig);