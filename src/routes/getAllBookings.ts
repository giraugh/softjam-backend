import { Request, Response } from 'express'
import { Booking } from '../models/Booking'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  Booking
    .find({})
    .then((bookings) => {
      res.json(bookings)
    })
    .catch(errorHandler('Error finding bookings', res))
}