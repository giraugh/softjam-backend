import { Booking } from '../models/Booking'
import { Request, Response } from 'express'
import errorHandler from '../handlers/error' 

export default (req: Request, res: Response) => {
  const id = req.params['id']
  console.log(`Searching for booking [${id}]`)
  Booking
    .findByIdAndRemove(id)
    .then(() => {
      console.log('Succesfully removed booking')
      return res
        .status(200)
        .send()
    })
    .catch(errorHandler('Error removing booking', res))
}