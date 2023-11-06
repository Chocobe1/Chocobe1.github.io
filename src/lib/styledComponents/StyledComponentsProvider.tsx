'use client';

// styled-components
import StyledComponentsRegistry from './StyledComponentsRegistry';
import GlobalStyles from './GlobalStyles';
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';

const StyledComponentsProvider = (props: React.PropsWithChildren) => {
    const {
        children,
    } = props;

    return (
        <StyledComponentsRegistry>
            <GlobalStyles />

            <ThemeProvider theme={theme('light')}>
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default StyledComponentsProvider;
