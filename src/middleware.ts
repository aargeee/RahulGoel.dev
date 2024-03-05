import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const res = NextResponse.next()
    res.cookies.set("someval", "feee", {
      maxAge: 60 * 60 * 24 * 30
    })
  return res
}
 
// Supports both a single string value or an array of matchers
export const config = {
  matcher: ['/'],
}