import { Event } from '../models/Event'
import { Request, Response, NextFunction } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  const id = req.params['id']
  console.log(`Searching for event [${id}]`)
  Event
    .findById(id)
    .then((event) => {
      if (!event) {
        res
          .status(400)
          .send('No such event')
      } else {
        res.json(event)
      }
    })
    .catch(errorHandler('Error finding event', res))
}