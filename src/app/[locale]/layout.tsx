import '../globals.css';
import { ReactNode } from 'react';
import { Locale, getDictionary, getLocale } from '@/locale';
import { Metadata } from 'next';

interface IProps {
    children: ReactNode;
    params: { locale: Locale };
}

const RootLayout = ({ children, params }: IProps) => {
    return (
        <html lang={params.locale}>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;

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
    const dict = await getDictionary(locale);
    return { title: `${locale}::${dict.introduction.title}` };
}
