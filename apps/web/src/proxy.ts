import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const session = req.cookies.get('session');

  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
