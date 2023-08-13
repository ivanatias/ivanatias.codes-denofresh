const DEVELOPMENT = 'development'

const ENV = Deno.env.get('ENV') ?? DEVELOPMENT

export { DEVELOPMENT, ENV }
