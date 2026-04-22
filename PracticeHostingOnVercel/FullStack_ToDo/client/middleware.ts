import { NextRequest, NextResponse } from "next/server";
/*
👆
- This line imports special tools from Next.js:
NextRequest → helps you read the incoming request (like cookies, URL, etc.)
NextResponse → helps you send a response (redirect, allow, etc.)
*/

export function middleware(req: NextRequest) {
    /*
    👆
    - This creates a middleware function
    - Middleware runs before the page loads
    req → contains all request data (cookies, headers, URL)
    */

    // Check for Cookie
    const token = req.cookies.get("ADMIN")
    /*
    👆
    - This checks if a cookie named "ADMIN" exists
    - Cookies store small data in the browser
    - "ADMIN" is usually used for authentication (login token)
    */

    if (!token) {
        // 👆 If the token is not present (user is not logged in)
        return NextResponse.redirect(new URL("/", req.url))
        /*
        👆
        - Redirect the user to the homepage /
        - Basically: No login → go back to home
        - This creates a new URL based on the current request:
        "/" → where you want to redirect (home page)
        req.url → used as the base URL => current page URL
        - So it becomes:
        http://localhost:3000/
        */
    }

    return NextResponse.next()
    /*
    👆
    - If token exists → allow access
    Means: User is authenticated → continue to page
    */
}

export const config = {
    // 👆 This is configuration for middleware
    matcher: ["/admin"]
    /*
    👆
    - Middleware will run only for /admin route
    - So whenever someone opens /admin, this check runs
    - matcher => Tells Next.js: “Where should this middleware run?”
    - [ "/admin" ] (array) => This is an array (list of routes) => Means middleware will run only on /admin
    */
}