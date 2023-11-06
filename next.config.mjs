import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',

    compiler: {
        styledComponents: true,
    },

    pageExtensions: [
        'js',
        'jsx',
        'mdx',
        'ts',
        'tsx',
    ],
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [
            remarkGfm,
            remarkFrontmatter,
        ],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
