import { login } from './handlers/auth'
import { home } from './handlers/home'
import { register } from './handlers/register'
import { requestLogger } from './middleware/requestLogger'
import { Route } from './types'

export const routes: Route[] = [
  {
    method: 'get',
    path: '/',
    middleware: [],
    handler: home,
  },
  {
    method: 'post',
    path: '/register',
    middleware: [],
    handler: register,
  },
  {
    method: 'post',
    path: '/login',
    middleware: [requestLogger],
    handler: login,
  },
]
