// nextjs
import type { 
    Metadata,
} from 'next';
import local from 'next/font/local';
// UI Components
import RootLayout from '@/components/layouts/RootLayout/RootLayout';

const PretendardFont = local({
    src: '../../public/fonts/PretendardVariable.woff2',
    display: 'auto',
});

export const metadata: Metadata = {
    title: 'Chocobe Blog v2',
    description: 'Frontend 기술 블로그 입니다.',
};

export default function RootLayoutSSR({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <body className={PretendardFont.className}>
                <RootLayout>
                    {children}
                </RootLayout>
            </body>
        </html>
    );
}
