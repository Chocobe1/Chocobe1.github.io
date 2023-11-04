'use client';

// react
import {
    useState,
    useCallback,
} from 'react';
// styled-components
import StyledComponentsRegistry from './styledComponents/StyledComponentsRegistry';
import GlobalStyles from './styledComponents/GlobalStyles';
import { 
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';

const StyledComponentsProvider = (props: React.PropsWithChildren) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(prev => {
            return prev === 'light'
                ? 'dark'
                : 'light';
        });
    }, []);

    return (
        <StyledComponentsRegistry>
            <GlobalStyles />

            <ThemeProvider theme={theme(themeName)}>
                <button onClick={toggleTheme}>
                    {themeName}
                </button>

                {props.children} 
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

export default StyledComponentsProvider;
