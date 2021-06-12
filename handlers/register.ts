import { addUser, users } from '../database/users'
import { Handler } from '../types'

export const register: Handler = (req, res) => {
  const { username, password } = req.body
  if (!username?.trim() || !password?.trim()) {
    return res.status(400).send('Bad username or password')
  }
  addUser({ username, password })

  console.log(users)
  res.status(201).send('User registered')
}
