import { Booking } from '../models/Booking'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  const id = req.params['id']
  console.log(`Searching for booking [${id}]`)
  Booking
    .findById(id)
    .then((booking) => {
      if (!booking) {
        res
          .status(400)
          .send('No such booking')
      } else {
        res.json(booking)
      }
    })
    .catch(errorHandler('Error finding booking', res))
}