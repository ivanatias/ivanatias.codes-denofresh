const DEVELOPMENT = 'development'
const BUILD = 'build'

const ENV = Deno.env.get('ENV') ?? DEVELOPMENT

export { BUILD, DEVELOPMENT, ENV }
