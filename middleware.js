// middleware.js

import { NextResponse } from "next/server";

export default function middleware(req) {
  let loggedin = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  if (loggedin && (pathname === "/login" || pathname === "/")) {
    return NextResponse.redirect(new URL("/user", req.url));
  }

  // if (!loggedin && pathname !== "/login" ) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
