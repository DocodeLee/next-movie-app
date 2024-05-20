/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'image.tmdb.org',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
