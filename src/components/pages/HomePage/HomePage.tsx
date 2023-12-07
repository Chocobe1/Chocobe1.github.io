'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import AllCategories from './AllCategories/AllCategories';
import BlogPostCard from '@/components/ui/BlogPostCard/BlogPostCard';
// icons
import {
    TbList,
} from '@icons';
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

    // FIXME: AllBlogPosts 컴포넌트 만든 후, className 하나로 만들기
    > .allCategoriesSection,
    > .allBlogPostsWrapper {
        margin-left: auto;
        margin-right: auto;
        padding: 40px;

        max-width: calc(980px + (40px * 2));

        > .sectionHeader {
            display: flex;
            align-items: flex-start;
            gap: 4px;

            border-bottom: 4px solid ${({ theme }) => theme.designSystemColors.type.e};

            > .sectionIcon {
                //
            }

            > .sectionTitle {
                color: ${({ theme }) => theme.designSystemColors.HomePage.labelColor};
                font-size: 18px;
                line-height: 24px;
                font-weight: 700;
            }
        }
    }

    > .allCategoriesSection {
        //

        // FIXME: AllBlogPosts 컴포넌트 만든 후, className 하나로 만들기
        > .allCategories {
            margin-top: 8px;
        }
    }

    > .allBlogPostsWrapper {
        //

        /* FIXME: AllBlogPosts 컴포넌트 만든 후, 삭제하기 */
        > .blogPostList {
            margin-top: 8px;

            display: flex;
            flex-direction: column;
            gap: 20px;

            // FIXME: AllBlogPosts 컴포넌트 만든 후, className 하나로 만들기
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

            <section className="allCategoriesSection">
                <div className="sectionHeader">
                    <TbList 
                        className="sectionIcon"
                        size="20px" 
                        strokeWidth="2px"/>

                    <div className="sectionTitle">
                        All Categories
                    </div>
                </div>

                <AllCategories className="allCategories" />
            </section>

            <section className="allBlogPostsWrapper">
                <div className="sectionHeader">
                    <TbList 
                        className="sectionIcon"
                        size="20px" 
                        strokeWidth="2px"/>

                    <div className="sectionTitle">
                        All Blog Posts
                    </div>
                </div>

                {/* FIXME: AllBlogPosts 컴포넌트로 분리하기 */}
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
            </section>
        </StyledHomePageRoot>
    );
}

export default memo(HomePage);
