'use client';

// react
import {
    PropsWithChildren,
    memo,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledRootLayoutBodyRoot = styled.div`
    //
`;

type TRootLayoutBodyProps = PropsWithChildren<{
    className?: string;
}>;

function RootLayoutBody(props: TRootLayoutBodyProps) {
    const {
        className,
        children,
    } = props;

    return (
        <StyledRootLayoutBodyRoot className={className}>
            {children}
        </StyledRootLayoutBodyRoot>
    );
}

export default memo(RootLayoutBody);
