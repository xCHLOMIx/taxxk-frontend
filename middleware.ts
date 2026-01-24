import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('authToken');

  // Redirect to /app if user is logged in and tries to access sign-in
  if (pathname === '/auth/sign-in' || pathname === '/auth/sign-up') {
    if (authToken) {
      const appUrl = new URL('/app', request.url);
      return NextResponse.redirect(appUrl);
    }
  }

  // Redirect to sign-in if user tries to access /app without authentication
  if (pathname.startsWith('/app')) {
    if (!authToken) {
      const signInUrl = new URL('/auth/sign-in', request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Apply middleware to /app and all its subroutes
    '/app/:path*',
    // Apply middleware to auth routes
    '/auth/sign-in',
    '/auth/sign-up',
  ],
};
