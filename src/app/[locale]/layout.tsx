import '../globals.css';
import { ReactNode } from 'react';
import { Locale, getLocale } from '@/locale';
import { Metadata } from 'next';

interface IProps {
    children: ReactNode;
    params: { locale: Locale };
}

/**
 * @see Internalization-https://nextjs.org/docs/app/building-your-application/routing/internationalization
 * @returns
 */
export async function generateStaticParams() {
    const locales = getLocale();
    return locales.map((locale) => ({ locale }));
}

/**
 * @see SEO-https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 * @param param0
 * @returns
 */
export async function generateMetadata({ params }: Pick<IProps, 'params'>): Promise<Metadata> {
    const { locale } = params;
    if (locale === 'en') return { title: `Hi, I'm Marulloc - ${locale}` };
    else if (locale === 'ko') return { title: `안녕하세요, Marulloc 입니다 - ${locale}` };
    else return {};
}

const RootLayout = ({ children, params }: IProps) => {
    return (
        <html lang={params.locale}>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
