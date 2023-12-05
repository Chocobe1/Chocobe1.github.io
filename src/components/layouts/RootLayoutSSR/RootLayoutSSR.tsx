// react
import {
    PropsWithChildren,
} from 'react';
// UI Components
import RootLayoutHeader from './RootLayoutHeader';
import RootLayoutBody from './RootLayoutBody';
// styled-components
import StyledComponentsProvider from '@/lib/styledComponents/StyledComponentsProvider';

function RootLayoutSSR(props: PropsWithChildren) {
    const {
        children,
    } = props;

    return (
        <div className={`
            w-full
            h-full
        `.trim()}>
            <StyledComponentsProvider>
                <RootLayoutHeader />
                <RootLayoutBody>
                    {children}
                </RootLayoutBody>
            </StyledComponentsProvider>
        </div>
    );
}

export default RootLayoutSSR;
