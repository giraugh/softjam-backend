import { Request, Response } from 'express'
import { Event } from '../models/Event'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  Event
    .find({})
    .then((events) => {
      res.json(events)
    })
    .catch(errorHandler('Error finding events', res))
}