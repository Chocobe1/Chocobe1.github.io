'use client';

// react
import { 
    useState,
    PropsWithChildren
} from 'react';
// nextjs
import { 
    useServerInsertedHTML,
} from 'next/navigation';
// styled-components
import { 
    ServerStyleSheet, 
    StyleSheetManager,
} from 'styled-components';

export default function StyledComponentsRegistry(props: PropsWithChildren) {
    const {
        children,
    } = props;

    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== 'undefined') return <>{children}</>;

    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
}
