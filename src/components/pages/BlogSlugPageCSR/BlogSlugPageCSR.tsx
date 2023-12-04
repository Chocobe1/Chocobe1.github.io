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

// FIXME: /src/components/layouts/RootLayout/RootLayout.tsx 로 옮기기
// FIXME: /src/components/layouts/RootLayout/RootLayout.tsx 로 옮기기
// FIXME: /src/components/layouts/RootLayout/RootLayout.tsx 로 옮기기

const _StyledBlogSlugPageCSRRoot = styled.div`
    flex: 1;

    width: 100%;
    height: 100%;

    overflow: auto;

    /* 코드 블록 */
    pre {
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }

        code {
            display: grid;

            font-size: 16px;

            span[data-line] {
                padding: 2px 16px;
                display: inline-block;
            }

            &[data-line-numbers] {
                &[data-line-numbers-max-digits="2"] {
                    [data-line]::before {
                        width: 2rem;
                    }
                }

                &[data-line-numbers-max-digits="3"] {
                    [data-line]::before {
                        width: 3rem;
                    }
                }

                > [data-line]::before {
                    counter-increment: line;
                    content: counter(line);

                    display: inline-block;
                    width: 1rem;
                    margin-right: 1.5rem;
                    text-align: right;
                    color: gray;
                }

                span[data-line] {
                    padding: 2px 0;
                    display: inline-block;
                }
            }
        }
    }
`;

function BlogSlugPageCSR(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <_StyledBlogSlugPageCSRRoot className="markdown-body">
            {children}
        </_StyledBlogSlugPageCSRRoot>
    );
}

export default memo(BlogSlugPageCSR);
