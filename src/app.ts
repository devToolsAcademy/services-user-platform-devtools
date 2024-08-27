import { buildLogger } from "./plugins"

const message: string = "Bienvenidos a los juegos del hambre"
console.log(message)
const logger = buildLogger('app.js')
logger.log('hola mundo')
logger.error('esto es un error')