'use client';

// react
import {
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';
import StyledComponentsProvider from '@/lib/styledComponents/StyledComponentsProvider';
import RootLayoutHeader from './RootLayoutHeader';
import RootLayoutBody from './RootLayoutBody';

const StyledRootLayoutRoot = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    transition: all 1s ease;

    > .layoutHeader {
        //
    }

    > .layoutBody {
        flex: 1;
        height: 100%;
    }
`;

function RootLayout(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <StyledRootLayoutRoot>
            <StyledComponentsProvider>
                <RootLayoutHeader className="layoutHeader" />
                <RootLayoutBody className="layoutBody">
                    {children}
                </RootLayoutBody>
            </StyledComponentsProvider>
        </StyledRootLayoutRoot>
    );
}

export default RootLayout;
