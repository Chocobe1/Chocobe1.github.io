'use client';

// react
import {
    memo,
} from 'react';
// nextjs
import Link from 'next/link';
// Components
import RootLayoutNav from './RootLayoutNav';
// styled-components
import styled from 'styled-components';

const StyledRootLayoutHeaderRoot = styled.header`
    position: sticky;
    top: 0;
    z-index: 1;

    background-color: ${({ theme }) => theme.designSystemColors.type.b};

    > .innerWrapper {
        margin: 0 auto;
        padding: 24px 20px 20px;
        width: 100%;
        max-width: 1200px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);

        > .logoLink {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 4px;

            > .chocobe {
                padding: 8px 4px 0;
                color: ${({ theme }) => theme.designSystemColors.text.fff};
                font-size: 28px;
                line-height: 20px;
                font-weight: 600;

                background-color: ${({ theme }) => theme.designSystemColors.type.a};
            }

            > .fe-blog {
                position: relative;

                color: ${({ theme }) => theme.designSystemColors.text['222']};
                font-size: 16px;
                line-height: 16px;
                font-weight: 600;

                &::before {
                    content: '';
                    width: 4px;
                    height: 4px;

                    display: block;

                    position: absolute;
                    bottom: 2px;
                    right: -6px;

                    border-radius: 50%;
                    background-color: ${({ theme }) => theme.designSystemColors.type.a};
                }
            }
        }

        > .headerActionsWrapper {
            display: flex;
            justify-content: flex-end;
        }
    }
`;

type TRootLayoutHeaderProps = {
    className?: string;
};

function RootLayoutHeader(props: TRootLayoutHeaderProps) {
    const {
        className,
    } = props;

    return (
        <StyledRootLayoutHeaderRoot className={className}>
            <div className="innerWrapper">
                <RootLayoutNav />

                <Link 
                    className="logoLink"
                    href="/">
                    <span className="chocobe">
                        Chocobe
                    </span>

                    <span className="fe-blog">
                        FE Blog
                    </span>
                </Link>

                {/* <div className="headerActionsWrapper">
                    Header Actions Wrapper
                </div> */}
            </div>
        </StyledRootLayoutHeaderRoot>
    );
}

export default memo(RootLayoutHeader);
