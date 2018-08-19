import { Response } from 'express'

export default (message: string, res: Response) => (err: Error) => {
  res
    .status(500)
    .send(message)
  console.error(err)
}