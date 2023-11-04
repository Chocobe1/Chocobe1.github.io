import 'styled-components';
import theme from '@/styles/theme';

type Theme = ReturnType<typeof theme>;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
