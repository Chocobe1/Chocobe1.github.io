'use client';

// styled-components
import StyledComponentsRegistry from './styledComponents/StyledComponentsRegistry';
import GlobalStyles from './styledComponents/GlobalStyles';
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';

const StyledComponentsProvider = (props: React.PropsWithChildren) => {
    return (
        <StyledComponentsRegistry>
            <GlobalStyles />

            <ThemeProvider theme={theme}>
                {props.children} 
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default StyledComponentsProvider;
