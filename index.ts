import express from 'express'
import { routes } from './routes'

const app = express()
const PORT = 4000

app.use(express.json())

routes.forEach(route => {
  const { method, path, middleware, handler } = route
  app[method](path, ...middleware, handler)
})

app.listen(PORT, () => console.log(`Express with Typescript http://localhost:${PORT}`))
