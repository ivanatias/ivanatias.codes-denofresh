import { Image, TextLayout } from 'imagescript'

const previewSuffix = '.preview.jpeg'
const font = await Deno.readFile('./static/fonts/open-sans-condensed-bold.ttf')
const textLayout = new TextLayout({ maxWidth: 1050 })
const templateImage = new Image(1200, 630)

templateImage.composite(
  await Image.decode(
    await Deno.readFile('./static/og-article-background.jpeg'),
  ),
)

async function generatePreviewImageResponse(title: string) {
  const image = templateImage.clone()
  const whiteCode = parseInt('#ffffff'.slice(-6), 16) - Math.pow(16, 6)
  image.composite(
    Image.renderText(font, 92, title, whiteCode, textLayout),
    80,
    100,
  )
  const jpegBytes = await image.encodeJPEG(90)

  return new Response(jpegBytes, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000',
    },
  })
}

function removePreviewSuffixFromPath(path: string) {
  return path.replace(previewSuffix, '')
}

export {
  generatePreviewImageResponse,
  previewSuffix,
  removePreviewSuffixFromPath,
}
