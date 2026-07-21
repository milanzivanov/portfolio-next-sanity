import { timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = "admin_session";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

function tokensMatch(a: string, b: string) {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);

  if (bufferA.length !== bufferB.length) return false;

  return timingSafeEqual(bufferA, bufferB);
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") ?? "";
  const adminToken = process.env.ADMIN_ACCESS_TOKEN ?? "";

  const response = NextResponse.redirect(new URL("/", request.url));

  if (adminToken && tokensMatch(token, adminToken)) {
    response.cookies.set(ADMIN_COOKIE_NAME, "1", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: ONE_YEAR_IN_SECONDS
    });
  }

  return response;
}
