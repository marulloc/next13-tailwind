import { NextMiddleware, NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import { getLocale } from './locale';

const supportedLocale = getLocale();
const defaultSupportedLocale = 'en';

export const middleware: NextMiddleware = async (request) => {
    if (isInValidLocale(request)) return localeResolver(request);
};

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg).*)'],
};

const isInValidLocale = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;
    return supportedLocale.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
};

const localeResolver = (request: NextRequest) => {
    const pathname = request.nextUrl.pathname;

    const userAcceptLanguages = (request.headers.get('accept-language') || '*').split(/,|;/);
    const userLocale = userAcceptLanguages.filter((locale) => !locale.includes('q='));

    const resolvedLocale = match(userLocale, supportedLocale, defaultSupportedLocale);
    return NextResponse.redirect(new URL(`/${resolvedLocale}/${pathname}`, request.url));
};
