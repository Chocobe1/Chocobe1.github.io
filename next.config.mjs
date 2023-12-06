/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',

    images: {
        unoptimized: true,
    },

    compiler: {
        styledComponents: true,
    },

    pageExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
    ],
};

export default nextConfig;
