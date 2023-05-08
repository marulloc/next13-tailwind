import { NextMiddleware, NextRequest, NextResponse } from 'next/server';

let locales = ['en', 'ko'];

const getLocale = (request: NextRequest) => {
    return locales[0];
};

export const middleware: NextMiddleware = async (request) => {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        console.log(pathname);
        const locale = getLocale(request);

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
    }
};

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg).*)'],
};
