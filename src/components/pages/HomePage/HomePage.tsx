'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import BlogPostCard from '@/components/ui/BlogPostCard/BlogPostCard';
// styled-components
import styled from 'styled-components';
// type
import { 
    blogPostCardVariantMapper,
} from '@/components/ui/BlogPostCard/blogPostCard.type';

const StyledHomePageRoot = styled.div`
    > .featuredPostWrapper {
        padding: 40px;

        background-color: ${({ theme }) => theme.designSystemColors.type.d};

        > .blogPost {
            margin-left: auto;
            margin-right: auto;

            max-width: 980px;
        }
    }

    > .allCategories {
        margin-left: auto;
        margin-right: auto;
        padding: 40px;

        max-width: calc(980px + (40px * 2));

        > .label {
            border-bottom: 4px solid ${({ theme }) => theme.designSystemColors.type.e};
        }
    }

    > .allBlogPosts {
        margin-left: auto;
        margin-right: auto;
        padding: 40px;

        max-width: calc(980px + (40px * 2));

        > .label {
            border-bottom: 4px solid ${({ theme }) => theme.designSystemColors.type.e};
        }

        > .blogPostList {
            margin-top: 8px;

            display: flex;
            flex-direction: column;
            gap: 20px;

            > .blogPost {
                max-width: 980px;
            }
        }
    }
`;

function HomePage() {
    return (
        <StyledHomePageRoot>
            <div className="featuredPostWrapper">
                <BlogPostCard 
                    className="blogPost"
                    variant={blogPostCardVariantMapper.FEATURED}
                    thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                    title="BlogPostCard - featured 구현 중"
                    date={'2023-12-06'}
                    description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />
            </div>

            <div className="allCategories">
                <div className="label">
                    All Categories
                </div>
            </div>

            <div className="allBlogPosts">
                <div className="label">
                    All Blog Posts
                </div>

                <div className="blogPostList">
                    <BlogPostCard 
                        className="blogPost"
                        thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                        title="BlogPostCard - featured 구현 중"
                        date={'2023-12-06'}
                        description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

                    <BlogPostCard 
                        className="blogPost"
                        thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                        title="BlogPostCard - featured 구현 중"
                        date={'2023-12-06'}
                        description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

                    <BlogPostCard 
                        className="blogPost"
                        thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                        title="BlogPostCard - featured 구현 중"
                        date={'2023-12-06'}
                        description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

                    <BlogPostCard 
                        className="blogPost"
                        thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                        title="BlogPostCard - featured 구현 중"
                        date={'2023-12-06'}
                        description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />

                    <BlogPostCard 
                        className="blogPost"
                        thumbnail="https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg"
                        title="BlogPostCard - featured 구현 중"
                        date={'2023-12-06'}
                        description={`UI Component BlogPostCard 컴포넌트 구현 중입니다.\nHello World\n안녕하센요`} />
                </div>
            </div>
        </StyledHomePageRoot>
    );
}

export default memo(HomePage);
