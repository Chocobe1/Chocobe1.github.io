// react
import {
    PropsWithChildren,
} from 'react';
// UI Components
import RootLayoutHeader from './RootLayoutHeader';
import RootLayoutBody from './RootLayoutBody';
// styled-components
import StyledComponentsProvider from '@/lib/styledComponents/StyledComponentsProvider';

function RootLayout(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <div className={`
            w-full
            h-full
            flex
            flex-col
        `.trim()}>
            <StyledComponentsProvider>
                <RootLayoutHeader />
                <RootLayoutBody 
                    className={`
                        flex-1
                        h-full
                    `.trim()}>
                    {children}
                </RootLayoutBody>
            </StyledComponentsProvider>
        </div>
    );
}

export default RootLayout;
