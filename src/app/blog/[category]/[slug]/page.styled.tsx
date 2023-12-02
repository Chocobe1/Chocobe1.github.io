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
