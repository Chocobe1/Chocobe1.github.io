'use client';

// react
import {
    memo,
    PropsWithChildren,
} from 'react';
// markdown
import 'github-markdown-css/github-markdown-light.css';
// styled-components
import styled from 'styled-components';

const _StyledBlogSlugPageRoot = styled.div`
    flex: 1;

    width: 100%;
    height: 100%;

    overflow: auto;
`;

function StyledBlogSlugPageRoot(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <_StyledBlogSlugPageRoot className="markdown-body">
            {children}
        </_StyledBlogSlugPageRoot>
    );
}

export default memo(StyledBlogSlugPageRoot);
