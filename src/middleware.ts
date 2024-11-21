import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;

  //   if (isLogin) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL("/auth/login", req.url));
  //   }
}

export default withAuth(mainMiddleware, ["/profile",]);
// export const config = {
//   matcher: ["/products", "/about/:path*"],
// };
