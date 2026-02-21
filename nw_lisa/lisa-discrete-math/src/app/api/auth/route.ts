import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()

    if (!password || password !== process.env.SITE_PASSWORD) {
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })

    response.cookies.set('lisa-session', process.env.SESSION_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }
}
