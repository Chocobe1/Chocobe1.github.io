'use client';

// react
import {
    memo,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledRootLayoutHeaderRoot = styled.header`
    //
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
            Root Layout Header
        </StyledRootLayoutHeaderRoot>
    );
}

export default memo(RootLayoutHeader);
