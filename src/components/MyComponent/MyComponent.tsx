'use client';

// react
import {
    memo,
} from 'react';

type TMyComponentProps = {
    stringProps: string;
    booleanProps: boolean;
    numberProps: number;
};

function MyComponent(props: TMyComponentProps) {
    const {
        stringProps,
        booleanProps,
        numberProps,
    } = props;
    
    return (
        <div>
            <h1>My Component</h1>

            <div>
                string props: {stringProps}
            </div>
            <div>
                boolean props: {String(booleanProps)}
            </div>
            <div>
                number props: {numberProps}
            </div>
        </div>
    );
}

export default memo(MyComponent);
