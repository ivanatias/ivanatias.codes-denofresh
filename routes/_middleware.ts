import 'dotenv/load.ts'
import { MiddlewareHandlerContext } from '$fresh/server.ts'
import { BASE_URL } from 'constants/socials.ts'

const plainTextHeader = { 'Content-Type': 'text/plain' }
const isDevelopment = Deno.env.get('ENV') === 'development'

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  const nextHandler = await ctx.next()

  if (isDevelopment) return nextHandler

  const { pathname, host } = new URL(req.url)
  const shouldRedirect = host.startsWith('www')

  return shouldRedirect
    ? new Response(`Redirecting to ${BASE_URL}...`, {
      headers: {
        location: `${BASE_URL}${pathname}`,
        ...plainTextHeader,
      },
      status: 301,
    })
    : nextHandler
}
