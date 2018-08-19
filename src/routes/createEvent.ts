import { Event } from '../models/Event'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  const event = new Event(req.body)
  console.log(req.body)
  event
    .save()
    .then(event => {
      console.log(`Saved event "${event.title}"`)
      res
        .status(200)
        .send(event._id)
    })
    .catch(errorHandler('Error creating event', res))
}