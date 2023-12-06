export const blogPostCardVariantMapper = {
    NORMAL: 'normal',
    FEATURED: 'featured',
} as const;
export type TBlogPostCardVariant = typeof blogPostCardVariantMapper[keyof typeof blogPostCardVariantMapper];
