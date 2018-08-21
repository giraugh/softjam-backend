import { Event } from '../models/Event'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  const id = req.params['id']
  console.log(`Searching for event [${id}]`)
  Event
    .findByIdAndRemove(id)
    .then(() => {
      console.log('Succesfully removed event')
      return res
        .status(200)
        .send()
    })
    .catch(errorHandler('Error removing event', res))
}