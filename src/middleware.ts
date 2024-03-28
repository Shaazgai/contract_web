import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = cookies().get("token");

  if (token?.value != "" && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/", request.url));
  }

  const needUser =
    request.nextUrl.pathname.startsWith("/contract/create") ||
    request.nextUrl.pathname.startsWith("/ad/sharing") ||
    request.nextUrl.pathname.startsWith("/ad/create") ||
    request.nextUrl.pathname.startsWith("/account");
  if (token?.value == "" && needUser) {
    return Response.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/", "/login/:path*", "/contract/:path*", "/user/:path*"],
};
