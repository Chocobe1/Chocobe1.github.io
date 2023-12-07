'use client';

// react
import {
    memo,
} from 'react';
// UI Components
import BlogCategoryCard from '@/components/ui/BlogCategoryCard/BlogCategoryCard';
// styled-components
import styled from 'styled-components';
// type
import { 
    allBlogCategoryInfoList,
} from './allCategories.type';

const StyledAllCategoriesRoot = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    > .categoryItem {
        flex: 1;
        min-width: 300px;
        display: inline-block;
    }
`;

type TAllCategoriesProps = {
    className?: string;
};

function AllCategories(props: TAllCategoriesProps) {
    const {
        className,
    } = props;

    return (
        <StyledAllCategoriesRoot className={className}>
            {allBlogCategoryInfoList.map(info => {
                const {
                    category,
                    description,
                    IconComponent,
                } = info;

                return (
                    <BlogCategoryCard
                        className="categoryItem"
                        key={category}
                        category={category}
                        description={description}
                        IconComponent={IconComponent} />
                );
            })}
        </StyledAllCategoriesRoot>
    );
}

export default memo(AllCategories);
