import { Event } from '../models/Event'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  Event
    .find({})
    .then((events) => {
      res.json(events)
    })
    .catch(errorHandler('Error finding events', res))
}