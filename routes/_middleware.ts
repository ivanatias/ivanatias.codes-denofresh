import type { FreshContext } from '$fresh/server.ts'
import { generatePreviewImageResponse, previewSuffix } from 'lib/og-images.ts'
import { BASE_URL } from 'constants/socials.ts'
import { DEVELOPMENT, ENV } from 'config/env.ts'

const plainTextHeader = { 'Content-Type': 'text/plain' }
const contentTypeHeader = 'Content-Type'
const htmlContentType = 'text/html'
const isDevelopment = ENV === DEVELOPMENT

export async function handler(
  req: Request,
  ctx: FreshContext,
) {
  const { href, pathname, host } = new URL(req.url)

  if (pathname.endsWith(previewSuffix) && pathname.startsWith('/blog')) {
    // Generate article og-image
    Object.defineProperty(req, 'url', {
      get: () => href.slice(0, -previewSuffix.length),
    })
    const res = await ctx.next()

    if (res.status !== 200) return res
    if (!res.headers.get(contentTypeHeader)?.startsWith(htmlContentType)) {
      return ctx.renderNotFound()
    }

    const body = await res.text()
    const title = body.match(/<title>(.*?)<\/title>/)?.at(1)

    if (title === undefined) {
      return new Response(
        'Failed to generate preview image: missing title in HTML',
        {
          status: 500,
        },
      )
    }
    const titleWithRemovedName = title.replace('-', '').replace(
      'Ivan Atias',
      '',
    ).trim()
    return await generatePreviewImageResponse(titleWithRemovedName)
  }

  const next = await ctx.next()
  const shouldRedirect = host.startsWith('www')

  return shouldRedirect && !isDevelopment
    ? new Response(`Redirecting to ${BASE_URL}...`, {
      headers: {
        location: `${BASE_URL}${pathname}`,
        ...plainTextHeader,
      },
      status: 308,
    })
    : next
}
